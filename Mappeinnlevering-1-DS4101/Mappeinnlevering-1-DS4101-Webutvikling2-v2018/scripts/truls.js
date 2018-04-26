

$(function(){
    $(".gress").css(
        {
            opacity: 0,
            transform: "translateX(-500px)"
        }
    )
    
    .animate(
        {
            opacity: 1,
            transform: "translateX(0px)"
        },
        {
            duration: 600
        }
        )
    }
)

$(function(){
    $(".del1").css(
        {
            opacity: 0,
            transform: "translateY(500px)"
        }
    )

    .animate({
        opacity: 1,
        transform: "translateY(0px)"
    },
    {
        duration: 600
    }
    )
})

$(function(){
    $(".del2").css(
        {
            opacity: 0,
            transform: "translateY(-500px)"
        }
    )
    .animate({
        opacity: 1,
        transform: "translateY(0px)"
    },
    {
        duration: 600
    })
})

$(function(){
    $(".pipe")
    .on("click", function(){
        ned();
        opp();
    })
    function ned(){
        $(".pipe").animate(
            {
                transform: "translateY(30px)"
            },
            {
                duration: 500
            }
        )
    }
    function opp(){
        $(".pipe").animate({
            transform: "translateY(0px)"
        },
        {
            duration: 300
        }
    )
    }
})

$(function(){
    $(".gress")
    .on("click", function(){
        endregress();
})
    function endregress(){
    $(".gress").each(function(index){
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("fill", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
}
    })

$(function(){
    let window = $(".window");

    window
    .css({opacity: 0.2})
    .mouseenter(function(){
        $(this).stop().fadeTo(300, 1);
    })
    .mouseleave(function(){
        $(this).stop().fadeTo(200, 0.2);
    })

    $("#farge-select").on("change", function(){
        let fargeValgt = $(this).val();
        $(".house")
        .css({
            fill: fargeValgt
        })
    })
});	

