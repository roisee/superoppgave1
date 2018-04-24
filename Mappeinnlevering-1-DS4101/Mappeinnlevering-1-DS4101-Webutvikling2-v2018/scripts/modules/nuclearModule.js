$("#slider").slider(
    {
        min: 0,
        max: 2000,
        step: 10,
        values: [50, 150],
        orientation: "vertical",
        slide: function(event, ui){
            console.log(ui.value);
            console.log(ui.values[0] + "" + ui.values[1]);
            setBoxSize(ui.value);
        }
    }
);

function setBoxSize(size){
    $("#box")
        .css(
            {
                width: size,
                height: size
            }
    
        )
}

let box = $("#box")
    .css(
        {
            width: 50,
            height: 50,
            backgroundColor: "rgb(100, 100, 100)"
        }
    );