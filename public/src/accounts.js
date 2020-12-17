const findAccountById = (accounts, id) => accounts.find(account => account.id === id);

const sortAccountsByLastName = accounts => accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);

function numberOfBorrows(account, books) {
  let sum = 0;
  const mappedArray = books.map((book) => book.borrows.forEach((obj) => {
    if (obj.id === account.id){
      sum++;
    }
  }));
  return sum;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];
  const booksInPossesion = books.filter(book => {
    const {id, title, genre, authorId, borrows} = book
    if(borrows[0].id === account.id && borrows[0].returned === false){
      return authors.forEach(author=> {
      if(author.id === authorId){
        let tempBook = {id, title, genre, author, borrows};
        console.log(tempBook);
        possessedBooks.push(tempBook);
      };
    });
  };
});
return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
