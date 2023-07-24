$(function () {
    
    startUp();
})

function startUp() {
           
    $(window).resize(function(){            
        if($(window).width() > 1024){   
            if($('.collapsable').hasClass('open')) {
                $('.collapsable').removeClass('open');
                $('main').removeClass('no-move');   
                if ($('.hideNavButtons').addClass('hide')){
                    $('.hideNavButtons').removeClass('hide');
                }
            }            
                   
            $('.topLine').removeClass('rightCross');            
            $('.midLine').removeClass('hidden');             
            $('.bottomLine').removeClass('leftCross');   
            
            if($('#states')){
                $('.collapsable > #states').remove();
            }
            
        } 

        if($(window).width() < 1024){ 
            if(!$('.collapsableStates').hasClass('hide')){
                $('.collapsableStates').addClass('hide');
                $('.collapsableStates > #states').remove();
                //$('.hideNavButtons').removeClass('hide');
            }
        }
    });
}

function navFunction(){
 
        $('.collapsable').toggleClass('open'); 
        $('main').toggleClass('no-move');   
        $('.topLine').toggleClass('rightCross');      
        $('.midLine').toggleClass('hidden');     
        $('.bottomLine').toggleClass('leftCross'); 

        if(!$('.collapsableStates').hasClass('hide')){
            $('.collapsableStates').addClass('hide');
        }

        if($('#states')){
            $('.collapsable > #states').remove();
        }

        if($('.collapsableStates').hasClass('hide')){ 
            $('.hideNavButtons').removeClass('hide');
        }
}

function openStates(value) {
    var html = "";
    
        if(value == 1){
            html += '<li id="states"><a href="./assets/pages/canberra.html">Australian Capital Territory</a></li>' + 
            '<li id="states"><a href="./assets/pages/newSouthWales.html">New South Wales</a></li>' +
            '<li id="states"><a href="./assets/pages/northernTerritory.html">Northern Territory</a></li>' +
            '<li id="states"><a href="./assets/pages/queensland.html">Queensland</a></li>' + 
            '<li id="states"><a href="./assets/pages/southAus.html">South Australia</a></li>' +
            '<li id="states"><a href="./assets/pages/tasmania.html">Tasmania</a></li>' +
            '<li id="states"><a href="./assets/pages/victoria.html">Victoria</a></li>' +
            '<li id="states"><a href="./assets/pages/westernAus.html">Western Australia</a></li>';    
        }
        else {
            html += '<li id="states"><a href="canberra.html">Australian Capital Territory</a></li>' + 
            '<li id="states"><a href="newSouthWales.html">New South Wales</a></li>' +
            '<li id="states"><a href="northernTerritory.html">Northern Territory</a></li>' +
            '<li id="states"><a href="queensland.html">Queensland</a></li>' + 
            '<li id="states"><a href="southAus.html">South Australia</a></li>' +
            '<li id="states"><a href="tasmania.html">Tasmania</a></li>' +
            '<li id="states"><a href="victoria.html">Victoria</a></li>' +
            '<li id="states"><a href="westernAus.html">Western Australia</a></li>';
        }
    
    $('.collapsableStates').toggleClass('hide');
    
    $('.fa').toggleClass('fa-angle-down');
    
    if($(window).width() < 1024 && $('.collapsable > #states')){ 
        $('.collapsable > #states').remove();
    }

    if(!$('.collapsableStates').hasClass('hide') && $(window).width() > 1024){
        $('.collapsableStates').append(html);
    }
    
    if($('.collapsableStates').hasClass('hide') && $(window).width() > 1024){
        $('.collapsableStates').empty();
    }

    if(!$('.collapsableStates').hasClass('hide') && $(window).width() < 1024){
        $('.collapsable').append(html);
    }

    if($('.collapsableStates').hasClass('hide') && $(window).width() < 1024){
        $('.collapsable > #states').remove();
    }
        
        if($(window).width() < 1024 && $('.collapsableStates').hasClass('hide')){ 
                $('.hideNavButtons').removeClass('hide');
        }
        else if($(window).width() < 1024 && !$('.collapsableStates').hasClass('hide')){ 
            $('.hideNavButtons').addClass('hide');
        }
}