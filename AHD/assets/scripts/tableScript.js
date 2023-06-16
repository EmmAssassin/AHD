
$(function () {
    const stateArray = sessionStorage.getItem('stateArray');
    const thisA = sessionStorage.getItem('thisArray');
    buildTable(stateArray);
})

function buildTable(stateArray){
    console.log(stateArray);
    var tablehtml = "";
    var headinghtml = "";
    
    var stateTable = stateArray.split(',');
    console.log(stateTable);
     for(i=0; i<stateTable.length;i++){
        console.log(stateTable[i]);
     }

     const table = document.createElement("table");

     headinghtml += '<h1 id="pageHeading">' + stateTable[0] + '</h1>';

     $('main').append(headinghtml);
     $('main').append(table);
     //$('table').addClass('dataTable');
     
     tablehtml += '<table class="dataTable"><thead><tr><th id="hideMe" rowspan="2"></th><th rowspan="2" id="bold">Available dates</th><th colspan="6" id="bold">Age Interval x Year Interval</th></tr>' +
     '<tr><th id="boldTwo">1x1</th><th id="boldTwo">1x5</th><th id="boldTwo">1x10</th><th id="boldTwo">5x1</th><th id="boldTwo">5x5</th><th id="boldTwo">5x10</th></tr></thead>' +
     '<tbody><tr>' + 
     '<td>Births</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Births.txt">1x1</a></td>' +
     '<td id="clickables"></td><td id="clickables"></td><td id="clickables"></td><td id="clickables"></td><td id="clickables"></td>' + 
     '</tr><tr>' + 
     '<td>Deaths</td><td>1971-2016</td>' + 
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Deaths_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Population Size</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Population.txt"> 1x1 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Population5.txt"> 5x1 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '</tr><tr>' +
     '<td>Exposure-to-Risk</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Exposures_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Death Rates</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/Mx_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Tables - Female</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/fltper_5x10.txt"> 5x10 </a></td>'+
     '</tr><tr>' +
     '<td>Life Tables - Male</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/mltper_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Tables - Total</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_1x1.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_5x1.txt"> 5x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_5x5.txt"> 5x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/bltper_5x10.txt"> 5x10 </a></td>' +
     '</tr><tr>' +
     '<td>Life Expectancy at Birth</td><td>dates</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/E0per.txt"> 1x1 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/E0per_1x5.txt"> 1x5 </a></td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/E0per_1x10.txt"> 1x10 </a></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '<td id="clickables"></td>' +
     '</tr></tbody></table>' +
     '<h2>Input Data</h2>' +
     '<table class="dataTable"><thead><tr><th id="hideMe" rowspan="2"></th><th rowspan="2" id="bold">Available dates</th><th  id="bold">Data</th><th id="bold">Lexis map</th></tr></thead>' +
     '<tbody><tr>' +
     '<td>Births</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/InputDB/' + stateTable[1] + 'birth.txt"> txt </a></td> <td id="clickables"></td>' +
     '</tr><tr>' +
     '<td>Deaths</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/InputDB/' + stateTable[1] + 'death.txt"> txt </a></td> <td id="clickables"><a></a></td>' +
     '</tr><tr>' +
     '<td>Population size</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/InputDB/' + stateTable[1] + 'pop.txt"> txt </a></td> <td id="clickables"><a></a></td>' +
     '</tr><tr>' +
     '<td>Reference file</td><td>1971-2016</td>' +
     '<td id="clickables"><a href = "../txtFiles/humanMortality/' + stateTable[1] + '/InputDB/' + stateTable[1] + 'ref.txt"> txt </a></td> <td id="clickables"><a></a></td>' +
     '</tr></tbody></table>';

     $('main').append(tablehtml);
     
}











