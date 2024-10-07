// /* From original TOP lesson */
// function favouriteAnimal(animal) {
//     return animal + " is your favourite animal!"
// }

// alert(favouriteAnimal(prompt("What is your favourite animal?")))

// /* String manipulation */

// const myText = "This is an example string";
// const myNewText = myText.replace("example", "exemplary");
// console.log(myNewText);

// /* Array join */

// const myArray = ["Welcome", "to", "the", "jungle"];
// const arrayString = myArray.join(" ");
// console.log(arrayString);

// /* Random number generation */

// const myNumber = math.random();
// alert(myNumber);

// let messageName = "Liam"

// function showMessage() {
//     let messageName = "Tim";
//     alert(`1. Hi there, ${messageName}`);
// }

// alert(`2. Hi there, ${messageName}`);

// showMessage();

// alert(`3. Hi there, ${messageName}`);


/* TASK 1 */

add7 = (num) => num + 7;
alert(add7(3));

/* TASK 2 */

multiply = (n1, n2) => n1 * n2;
alert(multiply(6, 6));

/* TASK 3 */

function capitalise(string) {
    string = string.toLowerCase();
    capString = string[0].toUpperCase() + string.slice(1);
    return capString;
}

yourString = prompt("String to capitalise:")
alert(capitalise(yourString));

/* TASK 4 */

lastLetter = (str) => str.slice(-1);
alert(lastLetter("Testing"));