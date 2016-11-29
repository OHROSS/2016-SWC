var width = 960,
    height = 1160;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);



    d3.json("https://raw.githubusercontent.com/OHROSS/2016-SWC/master/ps-11/us-states.geojson", function(error, us_states) {
      if (error) return console.error(error);

      svg.append("path")
          //.datum(topojson.feature(us_states, us_states.objects.NAME))
          .attr("d", d3.geo.path().projection(d3.geo.mercator()));
    });
    svg.append("path")
    .datum(subunits)
    .attr("d", path);
