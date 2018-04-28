var width = 0
var size = 0

$("#Increase").click(function() {
     setTimeout(function(){
         width += 50;
         setBoxSize2(width);
         changeColor2(width);
         setDegrees2(width);
     }, 600);
 }
)
$("#Decrease").click(function() {
     setTimeout(function(){
         width -= 50;
         setBoxSize2(width);
         changeColor2(width);
         setDegrees2(width);
     }, 600);
 }
)

 

$("#slider").slider(
    {
        min: 0,
        max: 500,
        step: 10,
        values: [0],
        slide: function(event, ui){
            setTimeout(function(){
            console.log(ui.value);
            console.log(ui.values[0] + "" + ui.values[1]);
            setBoxSize(ui.value);
            changeColor1(ui.value);
            setDegrees(ui.value);
            }, 600);
        }
    }
);

$("#reset").click(function() {
     $("#slider").slider({values: [0]})
     setBoxSize(0);
     changeColor1(0);
     setDegrees(size)

     width = 0;
     setBoxSize2(0);
     changeColor2(0);
     setDegrees2(width)
 })

function setBoxSize(size){
    $("#nuclear1")

        .css(
            {
                width: size
            }
            
        )
}

function setBoxSize2(width){
    $("#nuclear2")

        .css(
            {
                width: width
            }
            
        )
}

function changeColor1(size){
    if( size < "100"){
        $("#nuclear1").css({
        backgroundColor: "blue"
        })
        .html("<h2>Too cold</h2>")
    }else if( size == "200"){
        $("#nuclear1").css({
        backgroundColor: "green"
        })
        .html("<h2>All OK</h2>")
    }else if( size == "350"){
        $("#nuclear1").css({
        backgroundColor: "yellow"
        })
        .html("<h2>Starting to get hot</h2>")
    }else if( size == "400"){
        $("#nuclear1").css({
        backgroundColor: "red"
        })
        .html("<h2>WARNING! Fatal error! Too hot</h2>")
        .delay(1000)
        .animate(
            {
               width: 0
            }
        )
        setTimeout(function(){
             $("#slider").slider({values: [0]})
             setBoxSize(0);
             changeColor1(0);
             setDegrees(0)
         }, 2000);
        
     
    }
}

function changeColor2(width){
    if( width < "100"){
        $("#nuclear2").css({
        backgroundColor: "blue"
        })
        .html("<h2>Too cold</h2>")
    }else if( width == "200"){
        $("#nuclear2").css({
        backgroundColor: "green"
        })
        .html("<h2>All OK</h2>")
    }else if( width == "350"){
        $("#nuclear2").css({
        backgroundColor: "yellow"
        })
        .html("<h2>Starting to get hot</h2>")
    }else if( width == "400"){
        $("#nuclear2").css({
        backgroundColor: "red"
        })
        .html("<h2>WARNING! Fatal error! Too hot</h2>")
        .delay(1000)
        .animate(
            {
               width: 0,
            }
        )
        setTimeout(function(){
             width = 0;
             setBoxSize2(0);
             changeColor2(0);
             setDegrees2(0)
        }, 2000);
    }
}



let nuclear1 = $("#nuclear1")
    .css(
        {
            width: 0,
            height: 100,
            backgroundColor: "blue"
        }
    )
     .html("<h2>Too cold</h2>")

 let nuclear2 = $("#nuclear2")
 .css(
     {
         width: 0,
         height: 100,
         backgroundColor: "blue"
     }
 )
 .html("<h2>Too cold</h2>")
      
 function setDegrees(size){
     $("#value1")
         .html("Reactor 1 is: " + size + " degrees")    
 }

 function setDegrees2(width){
     $("#value2")
         .html("Reactor 2 is: " + width + " degrees")    
 }

 let nuclearbox = $(".nuclearbox")
    .css(
        {
            width: 500,
            height: 100,
            backgroundColor: "lightgrey"
            
        }
    );
