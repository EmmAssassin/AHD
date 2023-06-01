
$(function () {
    var stateArray = localStorage.getItem('stateArray');
    buildTable(stateArray);
})

function buildTable(stateArray){
    console.log(stateArray.stateName);
}