window.onload = function() {

          // CONSTANTS

  // const pi = 3.142;
  //
  // function calcArea(r){
  //   const pi = 10;  //defines only inside the function scoope
  //   console.log("The area is: " + pi * r * r);
  // }
  //
  // console.log(pi);
  // calcArea(5);

          // THE LET KEYWORD

  // var x = 10;
  //
  // if(x > 5){
  //   let x = 5;  //defines only inside the function scoope
  //   console.log("inside: " + x);
  // }
  //
  // console.log("outside: " + x);

            // LET vs VAR
  var items = document.getElementByTagName("li");

  for(let x = 0; x < items.length; x++){
    itemss[x].onclick = function(){
      console.log(x);
    }
  }


}
