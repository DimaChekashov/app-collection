const input = document.querySelector(".input-field"),
    btn = document.querySelector(".convert-btn"),
    result = document.querySelector(".result-field");

function bin2dec(bin) {
    var decimal = 0;
    for (var i = bin.length - 1; i >= 0; i--) {
        decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
    }
    return decimal;
}

input.addEventListener("input", (e) => {
    input.value = input.value.replace(/[^+\d]/g, "").substr(0, 8);
});

btn.addEventListener("click", () => {
    result.innerHTML = bin2dec(input.value);
    input.value = "";
});
