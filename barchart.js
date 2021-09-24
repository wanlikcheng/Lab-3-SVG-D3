let buildings;

d3.csv('buildings.csv').then(data=>{
    buildings = data;
    console.log('buildings', data);
})

d3.csv('buildings.csv', d=>{
    return {
        ...d, 
        completed: +d.completed,
        floors: +d.floors,
        height_ft: +d.height_ft,
        height_m: +d.height_m,
        height_px: +d.height_px, 
    }
  }).then(data=>{
        buildings = data;
        console.log('buildings', data);

        d3.select('.building-name').text("Buildings");

        // filter
        const sorted = data.sort(function(a, b) {
            return b.height_m - a.height_m;
        })
        console.log("Sorted:", sorted);

        // Create SVG element
        const width = 500;
        const height = 500;
        const svg = d3.select(".building-chart")
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        svg.selectAll("rect")
            .data(sorted)
            .enter()
            .append("rect")
            .attr("x", 200)
            .attr("y", function(d, i) {
                return i * 45;
            })
            .attr("width", d=>d.height_px)
            .attr("height", 40)
            .attr("fill", "orange");
        
        // labels
        svg.selectAll("text")
            .data(sorted)
            .enter()
            .append("text")
            .text(d=>d.building)
            .attr("x", 50)
            .attr("y", function(d, i) {
                return 20 + i * 47;
            })
            .attr("font-size", function(d) {
                return 10;
            })

    })

