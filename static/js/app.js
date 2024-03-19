import * as d3 from 'd3';
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
    //D3 to pull sample names from the data for the dropdown menu
    d3.json(url).then((data) => {
        
        //Set sample names as variable
        let names = data.names;

        //Append the sample names to the dropdown menu
        names.forEach((id)) => {

            //Append the value of id for each sample to the dropdown menu
            console.log(id);

            dropdownmenu.append("option").text(id).property("value", id);
        }
    });

    
        
        )

