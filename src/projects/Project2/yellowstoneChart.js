// document.addEventListener('DOMContentLoaded',function(){
$("#yellowstone").ready(function () {

   req3 = new XMLHttpRequest();
   req3.open("GET", '/yellowstoneVisitors.json', true);
   req3.send();
   req3.onload = function () {
      json3 = JSON.parse(req3.responseText);

      let months = json3[1];
      months.pop();
      months.shift();


      let dataset = json3[3];
      dataset.pop();
      dataset.shift();

      // console.log(json3) 
      // console.log(dataset) 
      // console.log(months)


      const myDataSet = [];
      for (let i = 0; i < dataset.length; i++) {
         let newData = dataset[i].replace(/,/g, "");
         let newMonths = months[i];
         let newNum = parseInt(newData);
         let finalNum = [newMonths, newNum];
         myDataSet.push(finalNum);
      }

      // console.log(myDataSet);

      // Start of scatterplot

      // Size of the svg
      const w = 420;
      const h = 400;

      const margin = { top: 20, right: 20, bottom: 20, left: 60 };
      const innerWidth = w - margin.left - margin.right;
      const innerHeight = h - margin.top - margin.bottom;

      // Creates an x and y scale

      const xScale = d3.scaleBand()
         .domain(months)
         .range([0, innerWidth])
      const xAxis = d3.axisBottom(xScale)


      const yScale = d3.scaleLinear()
         .domain([0, 1000000])
         .range([innerHeight, margin.bottom])
      const yAxis = d3.axisLeft(yScale)

      //   svg, where the graph will be and size

      const svg = d3.select(".yellowstoneGraph")
         .append("svg")
         .attr("width", w)
         .attr("height", h)

      // Creates the line for the linegraph

      const lineGenerator = d3.line()
         .x((d) => xScale(d[0]) + 75)
         .y((d) => yScale(d[1]) + 20)
      svg.append("path")
         .attr("class", "line-path")
         .attr("d", lineGenerator(myDataSet))

      //   Creates the circle and places in the correct spot based on x and y values

      svg.selectAll("circle")
         .data(myDataSet)
         .enter()
         .append("circle")
         .attr("cx", (d) => xScale(d[0]) + 75)
         .attr("cy", (d) => yScale(d[1]) + 20)
         .attr("r", 3)
         .attr("fill", "white")
         .append("title")
         .text((d) => {
            return d[0] + " - " + d[1] + " Visitors"
         })


      const g = svg.append('g')
         .attr('transform', `translate(${margin.left},${margin.top})`)

      g.append('g').call(yAxis)
         .attr('id', 'yAxis')


      g.append('g').call(xAxis)
         .attr('transform', `translate(0, ${innerHeight})`)
         .attr('id', 'xAxis')


   }
})
// })