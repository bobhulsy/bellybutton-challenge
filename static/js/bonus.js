// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  
  // Initialize the dashboard at start up 
  function init() {
  
      // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#selDataset");
  
      // Use D3 to get sample names and populate the drop-down selector
      d3.json(url).then((data) => {
          
          // Set a variable for the sample names
          let names = data.names;
  
          // Add  samples to dropdown menu
          names.forEach((id) => {
  
              // Log the value of id for each iteration of the loop
              console.log(id);
  
              dropdownMenu.append("option")
              .text(id)
              .property("value",id);
          });
  
          // Set the first sample from the list
          let sample_one = names[0];
  
          // Log the value of sample_one
          console.log(sample_one);
  
          // Build the initial plots
          buildGaugeChart(sample_one);
      });
  };
  