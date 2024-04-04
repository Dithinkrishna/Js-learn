const stevesBook = {
    getBookDetails: function () {
        console.log(`The book ${this.title} written by ${this.author} `);
    }
}
stevesBook.author = `Steve Jobs`;
stevesBook.title = `Walter Isaacson`
stevesBook.getBookDetails()
