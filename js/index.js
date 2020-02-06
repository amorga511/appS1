//alert('hello world');

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(device.cordova);
    setTimeout(function(){navigator.vibrate(1000);}, 1000);
}

$(document).ready(function(){  
    switch_menu('mHome');
    $("#mHome").css('border-top', 'solid 3px red');
    $(".menubar a").on('click', function(e){
        console.log(e.currentTarget.id);
        $(".menubar a").css('border-top','solid 3px black');
        $(this).css('border-top', 'solid 3px red');

        switch_menu(e.currentTarget.id);
    });
})

function switch_menu(vId){
    if(vId=='mHome'){
            $("#dvHome").show();                
            $("#dvMenu").hide();
    }
    if(vId=='mMenu'){
        
        $("#dvMenu").show();
        $("#dvHome").hide();
    }
}