$(function(){
    

      $(".forkle")   
        .css(
          {
            fill: "#E05A5A",
            opacity: 1   
          }
        )
        .on("click", function(){
            randomForkle();
        })

        $(".oye")   
        .css(
          {
            opacity: 1   
          }
        )
        .on("click", function(){
            $(this).css({opacity: 0}).animate({opacity:1},{duration: 300})
        })

        $(".hair-barn")   
        .css(
          {
            fill: "#955838",  
          }
        )
        .on("click", function(){
            hairFarge();
        })

       $(".visp")
        .css(
         {
           transform: "translateX(-250px)"
         }
        )
        .animate(
          {
            transform: "translateX(0px)"
          },
          {
            duration: 600
          })

      $(".pizza")
        .css(
         {
           transform: "translateX(250px)"
         }
        )
        .animate(
          {
            transform: "translateX(0px)"
          },
          {
            duration: 500
          })

      $(".kjevle")
        .css(
         {
           transform: "translateY(250px)"
         }
        )
        .delay(500)
        .animate(
          {
            transform: "translateY(0px)"
          },
          {
            duration: 500
          })


    $("#color-select").on("change", function(){
      let fargeValgt = $(this).val();
          $(".bakevekt")
            .css(
              {
              fill: fargeValgt
              }
            )
        })

    $("#endre-skrevet").click("change", function(){
      let fargeSkrevet = $("#farge-skrevet").val();
          $("#bordplate")
            .css(
              {
              fill: fargeSkrevet
              }
            )
        })

      function hairFarge(){
        $(".hair-barn").each(function(index) {
          var colorR = Math.floor((Math.random() * 256));
          var colorG = Math.floor((Math.random() * 256));
          var colorB = Math.floor((Math.random() * 256));
          $(this).css("fill", "rgba(" + colorR + "," + colorG + "," + colorB + ")");
        })
      }

      function randomForkle(){
        $(".forkle").each(function(index) {
          var colorR = Math.floor((Math.random() * 256));
          var colorG = Math.floor((Math.random() * 256));
          var colorB = Math.floor((Math.random() * 256));
          $(this).css("fill", "rgba(" + colorR + "," + colorG + "," + colorB + ")");
        });  
   }
      
  })