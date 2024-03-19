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
        names.forEach((id) => {

            //Append the value of id for each sample to the dropdown menu
            console.log(id);

            dropdownmenu.append("option").text(id).property("value", id);
        });
    });
} // END: abpxx6d04wxr
// Function to handle change on dropdown menu selection
function optionChanged(newSample) {
    console.log(newSample);
    // Update the charts with new data
    updateCharts(newSample);
    // Update the demographic info with new data
    updateDemographics(newSample);
}

// Call the init function to initialize the dashboard on page load
function buildMetadata(sample) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
        // Filter the data for the object with the desired sample number
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        PANEL.html("");

        //Add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

