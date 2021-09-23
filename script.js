let cities;

d3.csv('cities.csv').then(data=>{
    cities = data;
    console.log('cities', data);
})

d3.csv('cities.csv', d=>{
    return {
      ...d, // spread operator
      eu: d.eu==='true', // convert to boolean
      population: +d.population,
      x: +d.x,
      y: +d.y,
    }
  }).then(data=>{
        cities = data;
        console.log('cities', data);

        // filter data
        cities = data.filter(d=>d.eu);

        console.log("Filtered", cities);

        d3.select('.city-count').text("Number of cities: 29");

        // draw a circle for each city
        const width = 700;
        const height = 550;
        const svg = d3.select('.population-plot')
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        svg.selectAll("circle")
            .data(cities)
            .enter()
            .append("circle")
            .attr("cx", d=>d.x)
            .attr("cy", d=>d.y)
            .attr("r", function(d) {
                if(d.population > 1000000) {
                    return 8;
                }
                else {
                    return 4;
                }
            })
            .attr("fill", "black");
        
        // labels
        svg.selectAll("text")
            .data(cities)
            .enter()
            .append("text")
            .text(d=>d.city)
            .attr("x", d=>d.x + 10)
            .attr("y", d=>d.y + 10)
            .attr("opacity", function(d) {
                if(d.population > 1000000) {
                    return 100;
                }
                else {
                    return 0;
                }
            })
            .attr("font-size", function(d) {
                return 10;
            })

    })



