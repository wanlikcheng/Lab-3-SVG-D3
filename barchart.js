let buildings;

d3.csv('buildings.csv').then(data=>{
    buildings = data;
    console.log('buildings', data);
})

d3.csv('buildings.csv', d=>{
    return {
      ...d, // spread operator
      building: +d.building,
      country: +d.country,
      city: +d.city,
      height_m: +d.height_m,
      height_ft: +d.height_ft,
      height_px: +d.height_px,
      floors: +d.floors,
      completed: +d.completed,
      image: +d.image
    }
  }).then(data=>{
      buildings = data;
      console.log('buildings', data);
    })

d3.csv('buildings.csv', d3.autoType).then(data=>{
    buildings = data;
    console.log('buildings', data);
})

// filter dataset by height


d3.select('.building-name').text("Buildings");

// draw a rectangle for each city

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 100);


// labels for top buildings

