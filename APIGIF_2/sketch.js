var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var q = "&q=cats+pizza";
var cycle = 0;
var img;

function setup() {
  createCanvas(1000, 1000);
  background(252, 142, 172);
  var url = api + apiKey + q;
  loadJSON(url, gotData);
  var inp = createInput('');

}

function gotData(giphy) {
  img = createImg(giphy.data[cycle].images.original.url);
  img.position(200, 250);

}



function keyTyped() {
  if (key === 'b') {
    cycle = cycle + 1;
    console.log(cycle); // figure out right arrow
  }
}

function draw() {
  textSize(40)
  text(cycle, 275, 700);
  fill(255);


}