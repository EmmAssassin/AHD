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
            html += '<li id="states"><button value="canberra-HOME" onclick="statesLoad(this.value)">Australian Capital Territory</button></li>' + 
            '<li id="states"><button value="newSouthWales-HOME" onclick="statesLoad(this.value)">New South Wales</button></li>' +
            '<li id="states"><button value="northernTerritory-HOME" onclick="statesLoad(this.value)">Northern Territory</button></li>' +
            '<li id="states"><button value="queensland-HOME" onclick="statesLoad(this.value)">Queensland</button></li>' + 
            '<li id="states"><button value="southAus-HOME" onclick="statesLoad(this.value)">South Australia</button></li>' +
            '<li id="states"><button value="tasmania-HOME" onclick="statesLoad(this.value)">Tasmania</button></li>' +
            '<li id="states"><button value="victoria-HOME" onclick="statesLoad(this.value)">Victoria</button></li>' +
            '<li id="states"><button value="westernAus-HOME" onclick="statesLoad(this.value)">Western Australia</button></li>';    
        }
        else {
            html += '<li id="states"><button value="canberra" onclick="statesLoad(this.value)">Australian Capital Territory</button></li>' + 
        '<li id="states"><button value="newSouthWales" onclick="statesLoad(this.value)">New South Wales</button></li>' +
        '<li id="states"><button value="northernTerritory" onclick="statesLoad(this.value)">Northern Territory</button></li>' +
        '<li id="states"><button value="queensland" onclick="statesLoad(this.value)">Queensland</button></li>' + 
        '<li id="states"><button value="southAus" onclick="statesLoad(this.value)">South Australia</button></li>' +
        '<li id="states"><button value="tasmania" onclick="statesLoad(this.value)">Tasmania</button></li>' +
        '<li id="states"><button value="victoria" onclick="statesLoad(this.value)">Victoria</button></li>' +
        '<li id="states"><button value="westernAus" onclick="statesLoad(this.value)">Western Australia</button></li>';
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

function statesLoad(state) {
    var states = state.split('-');
    console.log(states[0]);
    console.log(states[1]);

    if (states[0] == "canberra") { 
        var sendArray = ["Australian Capital Territory", "ACT"];  
    }
    else if (states[0] == "newSouthWales"){
        var sendArray = ["New South Wales", "NSW"];
    }
    else if (states[0] == "northernTerritory"){
        var sendArray = ["Northern Territory", "NT"];
    }
    else if (states[0] == "queensland"){
        var sendArray = ["Queensland", "QLD"];
    }
    else if (states[0] == "southAus"){
        var sendArray = ["South Australia", "SA"];
    }
    else if (states[0] == "tasmania"){
        var sendArray = ["Tasmania", "TAS"];
    }
    else if (states[0] == "victoria"){
        var sendArray = ["Victoria", "VIC"];
    }
    else if (states[0] == "westernAus"){
        var sendArray = ["Western Australia", "WA"];
    }

    if(states[1] != undefined){
        window.location.href = "./assets/pages/" + states[0] + ".html";
    }
    else{
        window.location.href = states[0] + ".html";
    }
    var bob = "hi";
    sessionStorage.setItem('thisArray', bob);
    sessionStorage.setItem('stateArray', sendArray);
}
