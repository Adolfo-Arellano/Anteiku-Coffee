// Codigo de funcionamiento de carrousel
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    // variables
    const btn = event.currentTarget;
    const slidingList = event.currentTarget.parentNode;
    const base = event.currentTarget.parentNode.querySelector('#base');
    const sliding = base.querySelectorAll('.sliding-img');

    const slidingWidth = sliding[0].offsetWidth;
    
    const baseWidth = base.offsetWidth;
    const listWidth = slidingList.offsetWidth;

    base.style.left == ""  ? leftPosition = base.style.left = 0 : leftPosition = parseFloat(base.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slidingWidth,base) : nextAction(leftPosition,baseWidth,listWidth,slidingWidth,base)
}

// Funcionamiento de boton de retroceso
let prevAction = (leftPosition,slidingWidth,base) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        base.style.left = `${-1 * (leftPosition - slidingWidth)}px`;
    }
}

// Funcionamiento de boton de avance
let nextAction = (leftPosition,baseWidth,listWidth,slidingWidth,base) => {
    if(leftPosition < (baseWidth - listWidth)) {
        base.style.left = `${-1 * (leftPosition + slidingWidth)}px`;
    }
}