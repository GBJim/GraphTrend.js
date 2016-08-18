//This is the core javascript file

var Height = 700;



function render_circle(words) {
    console.log(words)
    xy=[words[0].time, 300.6740400843/1.7];
    var wordCloud= d3.select("#wordCloud")
            .append("g")
            .attr("class","wordCircle")
                    .on("mouseover",function(){
                        
                        d3.select(this).selectAll("text").style("font-weight", "bold").style("font-style","oblique");
          d3.select(this).selectAll("circle").transition().attr("fill-opacity",1);})
                     .on("mouseout",function(){
                      d3.select(this).selectAll("text").style("font-weight", "normal").style("font-style","normal");
          d3.select(this).selectAll("circle").transition().attr("fill-opacity",0.1);})
                      .on("click", function(){showChart(words[0].href,showEmotion);});
  
        

        wordCloud
        .append("circle").attr("stroke-width","2px")
        .on("mouseover",function(){
          d3.select(this).transition().attr("fill-opacity",1);})
        .on("mouseout",function(){
          d3.select(this).transition().attr("fill-opacity",0.2);})
       
        .transition().duration(1000) 
        .attr("fill", getRandomColor())   
        .attr("fill-opacity",0.1)
         .attr("stroke","black")
          .attr("stroke-opacity",0.1)
             //return radius
        .attr("r", function(d){return 100+"px";} );
        
        

    var moveScale = 100 /90;

      wordCloud.
      selectAll("text")
              .data(words)
              .enter().append("text")
              .transition()
              .duration(2000)
              .style("font-size", function(d) { return Math.sqrt(d.radius)*d.size/9 + "px"; })
             
              .style("fill", function(d, i) { return fill(i); })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                  return "translate(" + [d.x*moveScale, d.y*moveScale] + ")rotate(" + d.rotate + ")";})
              .text(function(d) { return d.text; });
  
wordCloud.attr("transform", "translate(" + scale(xy[0])+","+(Height-xy[1])+")");

  }

  

function node_parser(){}


  function render_node(node) {
   d3.layout.cloud().size([200, 200])
      .words([node].map(function(d) {
        console.log(d);

        return {text: d.content , size: 35, time: new Date(d.date), connections: d.connections };
      }))
     
      .rotate(function(d) { return ~~(Math.random() * 5) * 30 - 60; })
      
      .fontSize(function(d) { return ; })
      .on("end", render_circle)
      .start();


  
  }





 



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



  function plot(){

d3.select("#wordCloud")
          .transition()
          .ease("bounce")
          .duration(1000)
          .attr("width","1300").
          attr("height",Height);

d3.select("#wordCloud").call(zoom); 


}



function zoomed() {
  svg.call(xAxis);
zoomer=Math.sqrt(radiusScale(1200))/100;
  d3.selectAll(".wordCircle")
    .data(position)
    .transition()
    .duration(500)
    .attr("transform",function(d){
      return "translate("+scale(d[0])+","+(Height-d[1])+"),scale("+zoomer+","+zoomer+")";});}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


var parseDate = d3.time.format("%m/%d/%Y").parse;



var fill = d3.scale.category20();
var scale = d3.time.scale()
            .domain([new Date("2013-04-01"),new Date("2013-04-30")])
            .range([30,1000]);

var radiusScale = d3.scale.linear()
                    .domain([10,10000])
                    .range([10000,100]);

var zoom = d3.behavior.zoom()
              .x(scale)
              .y(radiusScale)
              .on("zoom",zoomed);




var xAxis= d3.svg.axis()
    .scale(scale). tickSize(-Height, 0, 0)
    .orient("bottom");



var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);

 var line = svgContainer.append("line")
                         .attr("x1", 5)
                         .attr("y1", 5)
                         .attr("x2", 50)
                         .attr("y2", 50)
                         .attr("stroke-width", 2)
                         .attr("stroke", "black");