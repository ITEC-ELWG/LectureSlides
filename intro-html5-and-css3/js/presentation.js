/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



(function presentation(){
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        screen = $(".full-screen"),
        screenSize = {
            'width':windowWidth*0.99,
            'height':windowHeight
        };
        
//     $("html,body").css(screenSize);   
     screen.css(screenSize);
     
     
     $(window).scroll(function() {
            if ($(this).scrollTop()>windowHeight*0.9 && $(this).scrollTop()<windowHeight*2) {
                $(".html5-abstract").find("h2").addClass("show");
            }
        });
     
    $(window).resize(function(){
    var newWindowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        newWindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        screenSize = {
            'width':newWindowWidth*0.99,
            'height':newWindowHeight
        };
//        $("html,body").css(screenSize);   
        screen.css(screenSize);
     });
     
     screen.on('click','.ico-next',function(){
         var thisScreen = $(this).parents(".full-screen");
         var index = parseInt(thisScreen.find("input[name=index]").val()),
             newWindowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
         $("body,html").animate({
             scrollTop:index*newWindowHeight
         },200,function(){
             if(index === 1){
                 $(".html5-abstract").find("h2").addClass("show");
             }
         });
     });
    
})();

