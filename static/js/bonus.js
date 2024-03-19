const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Function to fetch and process all data
function fetchData() {
  return d3.json(url).then(data => {
    return {
      names: data.names,
      samples: data.samples,
      metadata: data.metadata
    };
  });
}

// Function to build initial plots
function buildCharts(sampleId, data) {
  buildMetadata(sampleId, data.metadata);
  buildBarChart(sampleId, data.samples);
  buildBubbleChart(sampleId, data.samples);
  buildGaugeChart(sampleId, data.metadata);
}

// Function to update all charts when a new sample is selected
function optionChanged(newSampleId) {
  fetchData().then(data => buildCharts(newSampleId, data));
}

// Initializes the dashboard 
function init() {
  // Fetch data only once at the start
  fetchData().then(data => {
    // Populate the dropdown
    const dropdownMenu = d3.select("#selDataset");
    data.names.forEach(id => dropdownMenu.append("option").text(id).property("value", id));

    // Build initial plots using the first sample
    const initialSampleId = data.names[0];
    buildCharts(initialSampleId, data);
  });
}

  
          // Set the first sample from the list
          let sample_one = names[0];
  
          // Log the value of sample_one
          console.log(sample_one);
  
          // Build the initial plots
          buildGaugeChart(sample_one);
      });
  };

// Function that builds the gauge chart
function buildGaugeChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {

        // Retrieve all metadata
        let metadata = data.metadata;

        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Use Object.entries to get the key/value pairs and put into the demographics box on the page
        let washFrequency = Object.values(valueData)[6];
        
        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFrequency,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 16}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "black"},
                steps: [
                    {range: [0, 1], color: "rgba(255, 255, 255, 0)"},
                    {range: [1, 2], color: "rgba(232, 226, 202, .5)"},
                    {range: [2, 3], color: "rgba(210, 206, 145, .5)"},
                    {range: [3, 4], color:  "rgba(202, 209, 95, .5)"},
                    {range: [4, 5], color:  "rgba(184, 205, 68, .5)"},
                    {range: [5, 6], color: "rgba(170, 202, 42, .5)"},
                    {range: [6, 7], color: "rgba(142, 178, 35 , .5)"},
                    {range: [7, 8], color:  "rgba(110, 154, 22, .5)"},
                    {range: [8, 9], color: "rgba(50, 143, 10, 0.5)"},
                    {range: [9, 10], color: "rgba(14, 127, 0, .5)"},
                ]
            } 
        };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

// Call the initialize function
init();
  