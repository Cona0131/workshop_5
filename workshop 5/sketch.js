let table;
let pizza, noodles, nuggets, applejuice;

function preload(){
  table = loadTable('foods.csv', 'csv', 'header');
  pizza = loadImage('images/pizza.jpeg');
  noodles = loadImage('images/noodles.jpeg');
  nuggets = loadImage('images/nuggets.jpeg');
  applejuice = loadImage('images/applejuice.jpeg');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

}

function allSoldFoods(){
  let xPos = 30;
  let yPos = 50;
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countPizza = row.get("Pizza");
    if (countPizza > 0){
      for (y = 0; y < countPizza; y++){
        image(pizza, xPos, yPos, 20, 20);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30;
        }
      }
    }
    let countNoodles = row.get("Noodles");
    if (countNoodles > 0){
      for (y = 0; y < countNoodles; y++){
        image(noodles, xPos, yPos, 20, 20);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30;
        }
  }
}

let countNuggets = row.get("Nuggets");
    if (countNuggets > 0){
      for (y = 0; y < countNuggets; y++){
        image(nuggets, xPos, yPos, 20, 20);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30;
        }
  }
}
let countApplejuice = row.get("Apple juice");
    if (countApplejuice > 0){
      for (y = 0; y < countApplejuice; y++){
        image(applejuice, xPos, yPos, 20, 20);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30;
        }
}
}
}
}



function draw(){
  background(220);
  allSoldFoods();
}    
