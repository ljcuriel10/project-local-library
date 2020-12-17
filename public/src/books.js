const findAuthorById= (authors, id) => authors.find(author => author.id === id );

const findBookById = (books, id) => books.find(book => book.id === id);

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned === true);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account=> {
    book.borrows.forEach(transaction => {
      if(transaction.id === account.id){
        let accountObj = {...account};
        accountObj.returned = transaction.returned;
        borrowers.push(accountObj)
      }
    })
  });
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
