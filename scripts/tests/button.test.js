// 1-st test
// const buttonClick = require("../button");
// beforeEach(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// describe("DOM tests", () => {
//     test("expects p content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
//     });
// });

const buttonClick = require("../button");
beforeEach(() => {
    let fs =require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
 });

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 sholud exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

