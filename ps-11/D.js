
//Map dimensions (in pixels)
var width = 600,
    height = 350;

//Map projection
var projection = d3.geoAlbersUsa()
    .scale(730.2209486090715)
    .translate([width/2,height/2]) //translate to center the map in view

//Generate paths based on projection
var path = d3.geoPath()
    .projection(projection);

//Create an SVG
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

//Group for the map features
var features = svg.append("g")
    .attr("class","features")
    .attr("class","state")
    .attr("class","stores");

//Create zoom/pan listener
//Change [1,Infinity] to adjust the min/max zoom scale
//var zoom = d3.behavior.zoom()
//    .scaleExtent([1, Infinity])
//    .on("zoom",zoomed);

//svg.call(zoom);

tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .direction('n');

var storedata = d3.csv(("stores.csv"), function(stores){

    console.log(stores[0].count);


    d3.json("us-states.geojson",function(error,geodata) {
      if (error) return console.log(error); //unknown error, check the console
      //console.log(state)
      //Create a path for each map feature in the data
      console.log(geodata.features[0].properties.NAME);
      tip.html(function(e) {
          for (i=0; i<50; i++){
            for(j=0; j<50; j++){
              if (geodata.features[i].properties.NAME == stores[j].state)
              return  "<br/>State: " + geodata.features[i].properties.NAME +
              "<br/>Number of Stores: " + stores[i].count
            }
          }

       });
svg.call(tip);

      features.selectAll("path")
        .data(geodata.features)
        .enter()
        .append("path")
        .attr("class", function (d){console.log(d.properties.NAME)
          console.log(stores[0].count);

        return d.properties.NAME})
        .attr("d",path)
        .attr("fill", "q")
        .on('mouseover',tip.show)
        .on('mouseout', tip.hide);

    });

});







// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d,i) {}


//Update map on zoom/pan
function zoomed() {
  features.attr("transform", "translate(" + zoom.translate() + ")scale(" + zoom.scale() + ")")
      .selectAll("path").style("stroke-width", 1 / zoom.scale() + "px" );
}
