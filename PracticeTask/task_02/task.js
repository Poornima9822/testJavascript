let price_one;
let price_two;
let price_three;

function calculateTotal(){
    price_one = parseFloat(document.getElementById('grocery1').value);
    price_two = parseFloat(document.getElementById('grocery2').value);
    price_three = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = price_one + price_two + price_three;

    document.getElementById('total').innerText = `The total amount is : $ ${totalAmount}`;
}