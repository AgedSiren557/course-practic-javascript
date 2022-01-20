console.log("hola puños!!!!");


function squarePerimeter(squareSide){
    return squareSide*4;
}

function squareArea(squareSide){
    return squareSide*squareSide
}

function triangulePerimeter(triangleSide1, triangleSide2, triangleSide3){
    return triangleSide1 + triangleSide2 + triangleSide3;
}

function trianguleArea(triangleBase, triangleHeight){
    return triangleBase*triangleHeight/2;
}

function circlePerimeter(radius){
    return 2*Math.PI*radius;
}

function circleArea(radius){
    return Math.pow(radius,2)*Math.PI;
}


//html interactions

function calculateSquare(){
    const input = document.getElementById("input-square");
    const value = input.value;
    document.getElementById("square-perimeter").innerHTML = 
        "The perimeter is: "+ squarePerimeter(value);
    document.getElementById("square-area").innerHTML = 
        "The area is: "+ squareArea(value);

}

function calculateTriangle(){
    
    const side1 = parseInt(document.getElementById("input-triangle-side1").value);
    const side2 = parseInt(document.getElementById("input-triangle-side2").value);
    const side3 = parseInt(document.getElementById("input-triangle-side3").value);
    const height = parseInt(document.getElementById("input-triangle-height").value);

    document.getElementById("triangle-perimeter").innerHTML = 
        "The perimeter is: "+ triangulePerimeter(side1, side2, side3);
    document.getElementById("triangle-area").innerHTML = 
    "The area is: "+ trianguleArea(side1,height);

}

function calculateCircle(){
    const radius = document.getElementById("input-circle").value;
    document.getElementById("circle-perimeter").innerHTML = 
        "The perimeter is: "+ circlePerimeter(radius);
    document.getElementById("circle-area").innerHTML = 
        "The area is: "+ circleArea(radius);
}