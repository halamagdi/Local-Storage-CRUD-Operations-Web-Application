
var productContainer = [];// keda yb2a awel had yd5ol 

if (localStorage.getItem('ourProducts') != null) { // keda yb2a zboon adem leh data 3nadena
    productContainer = JSON.parse(localStorage.getItem('ourProducts'));
    displayProducts();

}
//sessionStorage hya hya el local el storage bas bttms7 m3 aflet el page 

var productNameInput = document.getElementById('productName'); //el 3onsor kolo mosh elly gwah
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var mainIndex;

function add() {
    if (mainBtn.innerHTML == "Add Product") {
        addProduct();
    }
    else {
        addUpdate();
    }
}
function addProduct() { // main function

    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,

    }
    productContainer.push(product);    //b3d may3ml addproduct ya5od el data w y7otha fy el array
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));//3lshan t7wel el arr le string  
    console.log(productContainer);
    clearForm();
    displayProducts();

}
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";

}
function displayProducts() {

    var cartoona = ``;
    for (var i = 0; i < productContainer.length; i++) { //el loop btsht8l b3dd el products
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProducts(${i})" class="btn btn-outline-warning">Ubdate</button></td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`; // law el arr feha 5 montagat el cartoona htb2a feha sfoof b3dd el montagat
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteProducts(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    displayProducts();
}
//JSON javascript object notation : 3ard data 3an tare2 js

function searchProducts(term) {
    var cartoona = ``;
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {//includes b2dr a 3ml search fy el gomla 3la kela aw 7arf mo3yn 
            cartoona += `<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button onclick="updateProducts(${i})" class="btn btn-outline-warning">Ubdate</button></td>
            <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}
//to lower case bt7wel el cap le small
// searchProducts("T");

function updateProducts(index) {
    mainIndex = index;
    productNameInput.value = productContainer[index].name;
    productPriceInput.value = productContainer[index].price;
    productCategoryInput.value = productContainer[index].category;
    productDescInput.value = productContainer[index].desc;

    document.getElementById('mainBtn').innerHTML = "Update";

}
function addUpdate() {

    productContainer[mainIndex].name = productNameInput.value;
    productContainer[mainIndex].price = productPriceInput.value;
    productContainer[mainIndex].category = productCategoryInput.value;
    productContainer[mainIndex].desc = productDescInput.value;

    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    displayProducts();
    clearForm();
    document.getElementById('mainBtn').innerHTML = "Add Product ";
}
