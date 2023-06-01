$(function () {
    
    startUp();

})

function startUp() {
           
    $(window).resize(function(){            
        if($(window).width() > 1024){   
            if($('.collapsable').hasClass('open')) {
                $('.collapsable').removeClass('open');
                $('main').removeClass('no-move');   
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
}

function openStates(value) {
    var html = "";

    if(value == 1){
        /*
        html += '<li id="states"><a href="./assets/pages/canberra.html">Australian Capital Territory</a></li>' + 
        '<li id="states"><a href="./assets/pages/newSouthWales.html">New South Wales</a></li>' +
        '<li id="states"><a href="./assets/pages/northernTerritory.html">Northern Territory</a></li>' +
        '<li id="states"><a href="./assets/pages/queensland.html">Queensland</a></li>' + 
        '<li id="states"><a href="./assets/pages/southAus.html">South Australia</a></li>' +
        '<li id="states"><a href="./assets/pages/tasmania.html">Tasmania</a></li>' +
        '<li id="states"><a href="./assets/pages/victoria.html">Victoria</a></li>' +
        '<li id="states"><a href="./assets/pages/westernAus.html">Western Australia</a></li>';   
        */ 
        html += '<li id="states"><button value="ACT" onclick="statesLoad(this.value)">Australian Capital Territory</button></li>' + 
        '<li id="states"><button value="NSW" onclick="statesLoad(this.value)">New South Wales</button></li>' +
        '<li id="states"><button value="NT" onclick="statesLoad(this.value)">Northern Territory</button></li>' +
        '<li id="states">button value="QLD" onclick="statesLoad(this.value)">Queensland</a></li>' + 
        '<li id="states"><button value="SA" onclick="statesLoad(this.value)">South Australia</button></li>' +
        '<li id="states"><button value="TAS" onclick="statesLoad(this.value)">Tasmania</button></li>' +
        '<li id="states"><button value="VIC" onclick="statesLoad(this.value)">Victoria</button></li>' +
        '<li id="states"><button value="WA" onclick="statesLoad(this.value)">Western Australia</button></li>';
    }
    else {
        /*
        html += '<li id="states"><a href="./canberra.html">Australian Capital Territory</a></li>' + 
    '<li id="states"><a href="./newSouthWales.html">New South Wales</a></li>' +
    '<li id="states"><a href="./northernTerritory.html">Northern Territory</a></li>' +
    '<li id="states"><a href="./queensland.html">Queensland</a></li>' + 
    '<li id="states"><a href="./southAus.html">South Australia</a></li>' +
    '<li id="states"><a href="./tasmania.html">Tasmania</a></li>' +
    '<li id="states"><a href="./victoria.html">Victoria</a></li>' +
    '<li id="states"><a href="./westernAus.html">Western Australia</a></li>';
    */
    html += '<li id="states"><button value="ACT" onclick="statesLoad(this.value)">Australian Capital Territory</button></li>' + 
    '<li id="states"><button value="NSW" onclick="statesLoad(this.value)">New South Wales</button></li>' +
    '<li id="states"><button value="NT" onclick="statesLoad(this.value)">Northern Territory</button></li>' +
    '<li id="states">button value="QLD" onclick="statesLoad(this.value)">Queensland</a></li>' + 
    '<li id="states"><button value="SA" onclick="statesLoad(this.value)">South Australia</button></li>' +
    '<li id="states"><button value="TAS" onclick="statesLoad(this.value)">Tasmania</button></li>' +
    '<li id="states"><button value="VIC" onclick="statesLoad(this.value)">Victoria</button></li>' +
    '<li id="states"><button value="WA" onclick="statesLoad(this.value)">Western Australia</button></li>';
    }
    
    $('.collapsableStates').toggleClass('hide');

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
}