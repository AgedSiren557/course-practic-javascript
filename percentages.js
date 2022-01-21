function getDiscountPrice(price, percentage){
    const discount=percentage*price/100;
    return price-discount;
}


function onInputPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    if (inputDiscount.value != "" && inputPrice.value != ""){
        
        var originalPrice = parseFloat(inputPrice.value);
        var discount = parseFloat(inputDiscount.value);
        var newPrice = getDiscountPrice(originalPrice,discount);

        document.getElementById("finalPrice").innerText = "$"+newPrice.toFixed(2) ;
    } else {

        document.getElementById("finalPrice").innerText = "$0.00";
    }
    
}


