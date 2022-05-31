// ScatterPlot Start


document.addEventListener('DOMContentLoaded', function () {

        fetch('cyclist-data.json')
                .then(response => response.json())
                .then(data => {

                        // console.log(data)
                        
                        let dataset = data.map(function (item) {
                                if (item.Doping == "") {
                                        item.Doping = "Yes"
                                } else {
                                        item.Doping = "No"
                                }

                                return {
                                        place: item.Place,
                                        seconds: parseFloat((item.Seconds / 60).toFixed(2)),
                                        year: Date.parse(item.Year),
                                        doping: item.Doping
                                }
                        })

                        // console.log(dataset);

                        // Variables for xAxis domain
                        let yearMin = d3.min(dataset, d => d.year);
                        let yearMax = d3.max(dataset, d => d.year);


                        // Size of SVG
                        const w = 1000;
                        const h = 500;

                        const svg = d3.select("body")
                                .append("svg")
                                .attr('width', w)
                                .attr('height', h)



                        let formatted = d3.timeFormat("%Y")
                        const margin = { top: 50, right: 50, bottom: 60, left: 80 };
                        const innerWidth = w - margin.left - margin.right;
                        const innerHeight = h - margin.top - margin.bottom / 2;
                        const title = 'Doping in Professional Bicycle Racing'

                        //x and y axis placement

                        const xScale = d3.scaleTime()
                                .domain([(yearMin - 2), (yearMax)])
                                .range([0, innerWidth])
                                .nice()
                        const xAxis = d3.axisBottom(xScale)
                                .tickPadding(10)


                        const yScale = d3.scaleLinear()
                                .domain([36.0, 40.0])
                                .range([innerHeight, margin.bottom])
                                .nice()
                        const yAxis = d3.axisLeft(yScale)

                        const g = svg.append('g')
                                .attr('transform', `translate(${margin.left},${margin.top})`)

                        const yAxisG = g.append('g').call(yAxis)
                                .attr('id', 'yAxis')

                        yAxisG.append('text')
                                .text('Time In Minutes')
                                .attr('transform', `rotate(-90)`)
                                .attr('y', -50)
                                .attr('x', -innerHeight / 2)
                                .attr('text-anchor', 'middle')
                                .attr('fill', 'black')
                                .attr('id', 'yAxis')

                        g.append('g').call(xAxis)
                                .attr('transform', `translate(0, ${innerHeight})`)
                                .attr('id', 'xAxis')

                        g.selectAll('circle')
                                .data(dataset)
                                .enter()
                                .append('circle')
                                .attr('cx', d => xScale(d.year))
                                .attr('cy', d => yScale(d.seconds))
                                .attr('x', innerWidth / dataset.length)
                                .attr('r', 5)
                                .attr("fill", function (d) {
                                        if (d.doping == "No") {
                                                return "blue"
                                        } else {
                                                return "red"
                                        }
                                })
                                .attr("class", "dot")
                                .attr('id', 'tooltip')
                                .append("title")
                                .text(d => d.seconds + "-")
                                .append("title")
                                .text(d => formatted(new Date(d.year + 100000000)))


                        g.append('text')
                                .text(title)
                                .attr('id', 'title')
                                .attr('x', 200)
                        g.append('text')
                                .text("35 Fastest times up Alpe d'Huez")
                                .attr('x', 375)
                                .attr('y', 30)

// Legend
                        svg.append("rect")
                                .attr("x", 880)
                                .attr("y", 300)
                                .attr("height", 20)
                                .attr("width", 30)
                                .style("fill", "red")
                        svg.append("text")
                                .attr("x", 755)
                                .attr("y", 315)
                                .text("No Doping Allegations")
                                .style("font-size", "12px")

                        svg.append("rect")
                                .attr("x", 880)
                                .attr("y", 320)
                                .attr("height", 20)
                                .attr("width", 30)
                                .style("fill", "blue")
                        svg.append("text")
                                .attr("x", 715)
                                .attr("y", 335)
                                .text("Riders with Doping Allegations")
                                .style("font-size", "12px")



                });
})
