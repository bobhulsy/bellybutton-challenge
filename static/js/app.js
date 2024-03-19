// Establish url as a global variable
const url = ("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json");

// Fetch the data
d3.json(url).then(function(data) {
    console.log(data);
});

//Initialize the dashboard
function init() {

    //Use D3 to select the dropdown menu
    let dropdownmenu = d3.select("#selDataset");
