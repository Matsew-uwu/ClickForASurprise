'use-strict';

class Count {
    constructor(count){
        this.count = count;
    }

    increment(count){
        this.count += 1;
    }

    decrement(count){
        if (this.count -= 1 < 0) {
            this.count -= 1;
        }
    }

    reset(){
        this.count = 0;
    }
}

let count;

// Check if the counter is already set by sessionStorage
if (sessionStorage.getItem('counter') === null) {
    count = 10;
} else {
    count = JSON.parse(sessionStorage.getItem('counter'));
}

let counter = new Count(count)

// Update the view
const updateVue = (counter) => {
    element = document.getElementById('counter');
    element.innerHTML = `Number : ${counter.count}`
    sessionStorage.setItem('counter', JSON.stringify(counter.count));
}


// Functions that update the counter value
function onclickIncr(counter) {
    counter.increment();
    updateVue(counter);
}

function onclickDecr(counter) {
    counter.decrement();
    updateVue(counter);
}

function onclickReset(counter) {
    counter.reset();
    updateVue(counter);
}






// Event listener that automatically display the counter value by default right after the page is loaded.
window.addEventListener('load', updateVue(counter));