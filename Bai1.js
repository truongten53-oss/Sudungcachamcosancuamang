let myColor = ["Red","Green","Blue","Orange"];
let newColer = "";
for (let i = 0 ; i < myColor.length; i++) {
    newColer += myColor[i];
    if (i < myColor.length - 1) {
        newColer += ",";
    }
}
console.log(newColer);

