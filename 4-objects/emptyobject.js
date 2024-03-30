const stevesBook = {}
stevesBook.newproperty = {
    author: "Steve Jobs",
    title: "Walter Isaacson"
}
function getBookDetails() {
    console.log(`The book ${stevesBook.newproperty.title} written by ${stevesBook.newproperty.author} `);
}
getBookDetails()