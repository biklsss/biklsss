window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList =
    {"ch1": 10, "ch2": 25, "ch3": 300};
    const goodsCategory =
    {"ch1": 1, "ch2": 2, "ch3": 3};

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let calcButton = document.getElementById("calculate");
    let resultfield = document.getElementById("result");
    let BlockA = document.getElementById("BlockA");
    let BlockB = document.getElementById("BlockB");
    let BlockC = document.getElementById("BlockC");
    
    calcButton.addEventListener("click", function () {
        let inp = amount.value;
        if (inp.match(/^\d+$/) !== null) {
            let res = goodsPriceList[product.value] * inp;
            resultfield.innerText = res;
        } else {
            resultfield.innerText = "Неккоретный ввод. Введите численное значение.";
        }
    });
    product.addEventListener("change", function () {
        if (goodsCategory[product.value]===1) {
            calculate();
            BlockA.style = "display:flex; flex-direction: column";
            BlockB.style = "display:none";
            BlockC.style = "display:none";
        }
        if (goodsCategory[product.value]===2) {
            calculate();
            BlockA.style = "display:none";
            BlockB.style = "display:flex; flex-direction: column";
            BlockC.style = "display:none";
        }
        if (goodsCategory[product.value]===3) {
            calculate();
            BlockA.style = "display:none";
            BlockB.style = "display:none";
            BlockC.style = "display:flex; flex-direction: column";
        }
    });
});