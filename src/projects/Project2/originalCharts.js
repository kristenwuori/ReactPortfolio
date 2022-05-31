
//       
//    req = new XMLHttpRequest();
//    req.open("GET", '/visitors.json', true);
//    req.send();
//    req.onload = function () {
//       json = JSON.parse(req.responseText);


//       let dataset = json[3];


//       let months = json[1];

//       // months.pop();
//       // months.shift();
//       // let newMonths = months;
//       // console.log(newMonths);

//       // let date = new Date("Jan 2, 2019");
//       // console.log(date);

//       // let newDate = Date.parse(date);
//       // console.log(newDate);



//       let finalMonths = [1,2,3,4,5,6,7,8,9,10,11,12];

//       dataset.pop();
//       dataset.shift();
//       let newDataset = dataset;
//       const finalDataset = [];

//       for (let i = 0; i < newDataset.length; i++) {
//          let newData = newDataset[i].replace(/,/g, "");
//          let newNum = [finalMonths[i], parseInt(newData)];

//          finalDataset.push(newNum);
//       }


//       // Start of scatterplot

//       // Size of the svg
//       const w = 420;
//       const h = 400;

//       // Padding between the SVG canvas boundary and the plot
//       const padding = 60;

//       // Creates an x and y scale

//       const xScale = d3.scaleLinear()
//          .domain([0, d3.max(finalDataset, (d) => d[0])])
//          .range([padding, w - padding])

//       const yScale = d3.scaleLinear()
//          .domain([0, d3.max(finalDataset, (d) => d[1])])
//          .range([h - padding, padding]);

//       //   svg, where the graph will be and size

//       const svg = d3.select(".yosemiteGraph")
//          .append("svg")
//          .attr("width", w)
//          .attr("height", h);

// // Creates the line for the linegraph

//       const lineGenerator = d3.line()
//       .x((d) => xScale(d[0]))
//       .y((d) => yScale(d[1]));
//       svg.append("path")
//       .attr("class", "line-path")
//       .attr("d", lineGenerator(finalDataset))

// //   Creates the circle and places in the correct spot based on x and y values

//       svg.selectAll("circle")
//          .data(finalDataset)
//          .enter()
//          .append("circle")
//          .attr("cx", (d) => xScale(d[0]))
//          .attr("cy", (d) => yScale(d[1]))
//          .attr("r", (d) => 2)
      
//       // Creates a tooltip

//          .append("title")
//          .text((d) => {
//             return d[1]
//          })

//       // Creating the text
//       svg.selectAll("text")
//          .data(finalDataset)
//          .enter()
//          .append("text")
//          .style("font-size", "9")

//          //    Text for each circle
//          //   .text((d) => (d[1]))
         
//          //    Location for text of each circle
//          .attr("x", (d) => xScale(d[0] + .12))
//          .attr("y", (d) => yScale(d[1] + 15000))

//       //   Uses axisBottom and axisLeft to scale the graph and create axes


//       const xAxis = d3.axisBottom(xScale);

//       const yAxis = d3.axisLeft(yScale);

//       //   Determines where the axes will be using padding

//       svg.append("g")
//          .attr("transform", "translate(0," + (h - padding) + ")")
//          .call(xAxis);

//       svg.append("g")
//          .attr("transform", 'translate(' + padding + ',0)')
//          .call(yAxis)

//       };
// });