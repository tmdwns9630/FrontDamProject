// new Morris.Line({
//   // ID of the element in which to draw the chart.
//   element: "myfirstchart",
//   // Chart data records -- each entry in this array corresponds to a point on
//   // the chart.
//   data: [
//     { year: "2008", value: 20 },
//     { year: "2009", value: 10 },
//     { year: "2010", value: 5 },
//     { year: "2011", value: 5 },
//     { year: "2012", value: 20 },
//   ],
//   // The name of the data record attribute that contains x-values.
//   xkey: "year",
//   // A list of names of data record attributes that contain y-values.
//   ykeys: ["value"],
//   // Labels for the ykeys -- will be displayed when you hover over the
//   // chart.
//   labels: ["Value"],
// });

const cdata = [100, 75, 50, 200, 10, 200, 10];
new Morris.Area({
  element: "myfirstchart",
  data: [
    { y: "2006", a: cdata[0], b: 90 },
    { y: "2007", a: cdata[1], b: 65 },
    { y: "2008", a: cdata[2], b: 40 },
    { y: "2009", a: cdata[3], b: 65 },
    { y: "2010", a: cdata[4], b: 40 },
    { y: "2011", a: cdata[5], b: 65 },
    { y: "2012", a: cdata[6], b: 90 },
  ],
  xkey: "y",
  ykeys: ["a", "b"],
  labels: ["Series A", "Series B"],
});
