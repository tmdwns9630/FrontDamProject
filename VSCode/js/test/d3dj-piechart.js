const svgDimensions = {
  width: 300,
  height: 300,
};
const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;
const data = [500, 80, 130, 210, 510, 80];

// const svg = d3
//   .select("body")
//   .append("svg")
//   .attr("width", svgDimensions.width)
//   .attr("height", svgDimensions.height)
//   .style("border", "1px solid rgba(0,0,0,0.1)");

const svg = d3
  .select("svg")
  .append("g")
  .attr("width", svgDimensions.width)
  .attr("height", svgDimensions.height)
  .style("border", "1px solid rgba(0,0,0,0.1)");

const g = svg
  .append("g")
  .attr(
    "transform",
    `translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`
  );
const color = d3.scaleOrdinal([
  "#ff9800",
  "#ffa726",
  "#ffb74d",
  "#ffcc80",
  "#ffe0b2",
  "#fff3e0",
]);

const pie = d3.pie();
const arc = d3.arc().innerRadius(0).outerRadius(radius);
const arcs = g
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");
arcs
  .append("path")
  .attr("fill", (d, i) => color(i))
  .attr("d", arc);
