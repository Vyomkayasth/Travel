// $("document").ready(function(){
//     $(".image").click(function(){
//         $(".box").hide(1000);
//         $()
//     });
// })
$("document").ready(function(){
    $(".india").click(function(){
        $(".indiaPlace").hide();
        $(".indiaBox").fadeIn(500,function(){
            $(".p_india").show(500);

        });
        
    });
    $(".Turkey").click(function(){
        $(".turkeyPlace").hide();
        $(".TurkeyBox").fadeIn(500,function(){
            $(".p_turkey").show(500);
        });
    });
    $(".France").click(function(){
        $(".francePlace").hide();
        $(".franceBox").fadeIn(500,function(){
            $(".p_France").show(500);
        });
    });
    $(".Indonesia").click(function(){
        $(".indonesiaPlace").hide();
        $(".indonesiaBox").fadeIn(500,function(){
            $(".p_indonesia").show(500);
        });
    });
    $(".UAE").click(function(){
        $(".UAEPlace").hide();
        $(".unitedBox").fadeIn(500,function(){
            $(".p_united").show(500);
        });
    });
    $(".Swiz").click(function(){
        $(".genevaPlace").hide();
        $(".swizBox").fadeIn(500,function(){
            $(".p_swiz").show(500);
        });
    });
    $(".AN").click(function(){
        $(".portPlace").hide();
        $(".ANbox").fadeIn(500,function(){
            
            $(".p_AN").show(500);
        });
    });
    $(".Italy").click(function(){
        $(".romePlace").hide();
        $(".italyBox").fadeIn(500,function(){
            $(".p_italy").show(500);
        });
    });
});




// Flight j query

$("document").ready(function(){
    $("flightSearchBtn").click(function(){
        if($(".flightInput-right").val() == "kashmir" || "India kashmir"){
            $(".AmdToSxr").show();
        }else if($(".flightInput-right").val() == "paris" || "Paris" || "France Paris")
        {
            $(".AmdToSxr").hide(function(){
                $(".AmdToParis").show();
            });    
        }
    });
});

