let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "img/2.jpeg";

    for(bt of btn ){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "img/3.jpeg";

    for(bt of btn ){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "img/1.jpg";

    for(bt of btn ){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
