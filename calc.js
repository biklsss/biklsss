window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList =
    {"ch1": 10, "ch2": 25, "ch3": 30, "ch4": 500, "ch5": 450};

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let calcButton = document.getElementById("calculate");
    let resultfield = document.getElementById("result");
    calcButton.addEventListener("click", function () {
        let inp = amount.value;
        if (inp.match(/^\d+$/) !== null) {
            let res = goodsPriceList[product.value] * inp;
            resultfield.innerText = res;
        } else {
            resultfield.innerText = "Неккоретный ввод. Введите численное значение.";
        }
    });
});