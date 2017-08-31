const app = "I don't do much."

// var pbj = {
//   bread: "white",
//   ingredients: ["peanut butter", "jelly"],
//   cut: "triangles",
//   name: "peanut butter and jelly",
//   serve: function() {
//     console.log(`here's your ${this.name}, enjoy!`);
//   }
// }

// function Sandwich(bread, ingredients, cut) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.cut = cut;
//   this.serve = function() {
//     console.log(`here's your ${this.name}, enjoy!`);
//   };
// }
//
// var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
// var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal");
//
// blt.name = "BLT";
// blt.serve();

// function serve() {
//   console.log(`here's your ${this.name}, enjoy!`);
// }
//
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}
//
// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
// pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");
//
// serve.call(gc);
// serve.call(pbj)

function serve(customer) {
  console.log(`Hey, ${customer}, here's your ${this.name}, enjoy!`);
}


var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");

serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

function deliverFood(customer, table) {
  console.log(`Delivering ${this.name} to ${customer} at table ${table}`);
}

deliverFood.call(gc, ["Terry", "4"]);
deliverFood.call(pbj, ["Jesse", "15"]);
