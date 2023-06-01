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
    html += '<li id="states"><button value="canberra" onclick="statesLoad(this.value)">Australian Capital Territory</button></li>' + 
    '<li id="states"><button value="newSouthWales" onclick="statesLoad(this.value)">New South Wales</button></li>' +
    '<li id="states"><button value="northernTerritory" onclick="statesLoad(this.value)">Northern Territory</button></li>' +
    '<li id="states"><button value="queensland" onclick="statesLoad(this.value)">Queensland</a></li>' + 
    '<li id="states"><button value="southAus" onclick="statesLoad(this.value)">South Australia</button></li>' +
    '<li id="states"><button value="tasmania" onclick="statesLoad(this.value)">Tasmania</button></li>' +
    '<li id="states"><button value="victoria" onclick="statesLoad(this.value)">Victoria</button></li>' +
    '<li id="states"><button value="westernAus" onclick="statesLoad(this.value)">Western Australia</button></li>';
    
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

function statesLoad(state) {
    if (state == "ACT") { 
        var sendArray = [{stateName: "Australian Capital Territory", acronym: "ACT"}];
    }
    else if (state == "NSW"){
        var sendArray = [{stateName: "New South Wales", acronym: "NSW"}];
    }
    else if (state == "NT"){
        var sendArray = [{stateName: "Northern Territory", acronym: "NT"}];
    }
    else if (state == "QLD"){
        var sendArray = [{stateName: "Queensland", acronym: "QLD"}];
    }
    else if (state == "SA"){
        var sendArray = [{stateName: "South Australia", acronym: "SA"}];
    }
    else if (state == "TAS"){
        var sendArray = [{stateName: "Tasmania", acronym: "TAS"}];
    }
    else if (state == "VIC"){
        var sendArray = [{stateName: "Victoria", acronym: "VIC"}];
    }
    else if (state == "WA"){
        var sendArray = [{stateName: "Western Australia", acronym: "WA"}];
    }

    window.location.href = state + ".html";
    localStorage.setItem('stateArray', sendArray);
}
