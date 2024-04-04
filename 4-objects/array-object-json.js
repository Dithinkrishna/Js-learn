const n = 3;
const bookDetails = [];
for (let i = 0; i < n; i++) {
    bookDetails.push({
        author: `author-${i}`,
        book: `book-${i}`,
    })
}
console.log(JSON.stringify(bookDetails));


