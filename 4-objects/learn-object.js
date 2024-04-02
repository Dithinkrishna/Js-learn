const stevesBook = {
    author: `Steve Jobs`,
    title: `Walter Isaacson`,
    getBookDetails: function () {
        console.log("-----------------------------------------------------------------");
        console.log(`The book ${this.title} written by ${this.author} `);
        console.log("-----------------------------------------------------------------");
    }
}
stevesBook.getBookDetails();