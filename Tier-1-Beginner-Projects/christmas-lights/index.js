function ChristmasLight(
    element,
    actionStart,
    actionStop,
    speedInput,
    speedBtn
) {
    this.element = document.querySelector(element);
    this.actionStart = document.querySelector(actionStart);
    this.actionStop = document.querySelector(actionStop);
    this.speedInput = document.querySelector(speedInput);
    this.speedBtn = document.querySelector(speedBtn);

    this.onStart = function () {
        this.actionStop.classList.remove("active");
        this.actionStart.classList.add("active");
        this.element.classList.add("play-animation");
    };

    this.onStop = function () {
        this.actionStart.classList.remove("active");
        this.actionStop.classList.add("active");
        this.element.classList.remove("play-animation");
    };

    this.speedBtn.addEventListener("click", () => {
        const speed = this.speedInput.value;
        const elements = this.element.children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.animationDuration = speed + "s";
        }
    });

    this.actionStart.addEventListener("click", () => this.onStart());

    this.actionStop.addEventListener("click", () => this.onStop());
}

new ChristmasLight(".balls", ".play", ".stop", ".speed-input", ".speed-btn");
new ChristmasLight(
    ".title-light",
    ".play",
    ".stop",
    ".speed-input",
    ".speed-btn"
);
