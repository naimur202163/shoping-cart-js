function updateProductNumber(product, price, incrasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (incrasing == true) {
        productNumber = parseInt(productNumber) + 1;

    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber

    // updateCase Totla
    const ProductTotal = document.getElementById(product + "-total");
    ProductTotal.innerText = productNumber * price;
    // calculate Total
    calculteTotal()

};

function getInputValue(product) {
    const productValue = document.getElementById(product + "-number").value;
    const productNumBe = parseInt(productValue);
    return productNumBe;

}

//total Amount calculte
function calculteTotal() {
    const phoneTotal = getInputValue("phone") * 1250;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update One the Html
    document.getElementById("sub-total").innerText = subTotal;
    // count total

    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;



}


//phone minus
document.getElementById("phone-minus ").addEventListener("click", function () {
    updateProductNumber("phone", 1250, false)
});

// I phone Selling Function
document.getElementById("phone-plus").addEventListener("click", function () {
    updateProductNumber("phone", 1250, true)
});





// Selicon Case

document.getElementById("case-plus").addEventListener("click", function () {

    updateProductNumber("case", 59, true);

});

document.getElementById("case-minus").addEventListener("click", function () {


    updateProductNumber("case", 59, false)

})