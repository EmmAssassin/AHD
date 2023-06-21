
$(function () {
    buildTable();
})

function buildTable(){
    var tablehtml = "";
    var pageHeading = document.getElementById('pageHeading');
    pageHeadingText = pageHeading.innerHTML;
    console.log(pageHeadingText);

    if(pageHeadingText == "Tasmania"){
        var state = "TAS";
    }
    else if (pageHeadingText == "Australian Capital Territory") { 
        var state = "ACT";  
    }
    else if (pageHeadingText == "New South Wales"){
        var state = "NSW";
    }
    else if (pageHeadingText == "Northern Territory"){
        var state = "NT";
    }
    else if (pageHeadingText == "Queensland"){
        var state = "QLD";
    }
    else if (pageHeadingText == "South Australia"){
        var state = "SA";
    }
    else if (pageHeadingText == "Victoria"){
        var state = "VIC";
    }
    else if (pageHeadingText == "Western Australia"){
        var state = "WA";
    }
    
     const table = document.createElement("table");

     $('main').append(table);
     //$('table').addClass('dataTable');
     
     tablehtml += '<table class="dataTable"><thead><tr><th id="hideMe" rowspan="2"></th><th rowspan="2" id="bold">Available dates</th><th colspan="6" id="bold">Age Interval x Year Interval</th></tr>' +
     '<tr><th id="boldTwo">1x1</th><th id="boldTwo">1x5</th><th id="boldTwo">1x10</th><th id="boldTwo">5x1</th><th id="boldTwo">5x5</th><th id="boldTwo">5x10</th></tr></thead>' +
     '<tbody><tr>' + 
     '<td>Births</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Births.txt">1x1</a></td>' +
     '<td id="clickables"></td><td id="clickables"></td><td id="clickables"></td><td id="clickables"></td><td id="clickables"></td>' + 
     '</tr><tr>' + 
     '<td>Deaths</td><td>1971-2016</td>' + 
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Deaths_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Population Size</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Population.txt"> 1x1 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Population5.txt"> 5x1 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '</tr><tr>' +
     '<td>Exposure-to-Risk</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Exposures_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Death Rates</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/Mx_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Tables - Female</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/fltper_5x10.txt"> 5x10 </a></td>'+
     '</tr><tr>' +
     '<td>Life Tables - Male</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/mltper_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Tables - Total</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/bltper_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Expectancy at Birth</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/E0per.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/E0per_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/E0per_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '</tr></tbody></table>' +
     '<h2>Input Data</h2>' +
     '<table class="dataTable"><thead><tr><th id="hideMe" rowspan="2"></th><th rowspan="2" id="bold">Available dates</th><th  id="bold">Data</th></tr></thead>' +
     '<tbody><tr>' +
     '<td>Births</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/InputDB/' + state + 'birth.txt"> txt </a></td>' +
     '</tr><tr>' +
     '<td>Deaths</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/InputDB/' + state + 'death.txt"> txt </a></td>' +
     '</tr><tr>' +
     '<td>Population size</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/InputDB/' + state + 'pop.txt"> txt </a></td>' +
     '</tr><tr>' +
     '<td>Reference file</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + state + '/InputDB/' + state + 'ref.txt"> txt </a></td>' +
     '</tr></tbody></table>';

     $('main').append(tablehtml);
     
}











