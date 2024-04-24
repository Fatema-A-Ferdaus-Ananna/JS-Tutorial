//creating constructor
//adding function in the constructor


function Product(name, id, price){
    this.name = name;
    this.id = id;
    this.price = price;

    this.productDetails = function(){
        document.write("Product Name: " + this.name + "<br>");
        document.write("Product Name: " + this.id + "<br>");
        document.write("Product Name: " + this.price + "<br><br>");
    }
}

var product1 = new Product("Lux Body wash", "lbw009", 200);
var product2 = new Product("Vim Liquid", "vl994", 110);

product1.productDetails();
product2.productDetails();