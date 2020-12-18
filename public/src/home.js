const totalBooksCount = books => books.length;

const totalAccountsCount = accounts => accounts.length;

function booksBorrowedCount(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

const sorter = arr => arr.sort((countA,countB)=> countB.count-countA.count );

function getMostCommonGenres(books) {
  let popularGenres = books.reduce((acc, book)=> ((acc[acc.findIndex( index => index.name === book.genre)] || acc[acc.push({name: book.genre,count:0})-1]).count++,acc),[]);
  return sorter(popularGenres).slice(0,5);
}

function getMostPopularBooks(books) {
  let popularBooks = books.reduce((acc, book)=> (( acc[acc.push({name: book.title,count:book.borrows.length})]),acc),[]);
  return sorter(popularBooks).slice(0,5);
}


function AuthorNameById(authors, id){
  let authorName = "";
 authors.forEach(author => {
   if (author.id == id)  authorName = `${author.name.first} ${author.name.last}`
})
  return authorName;
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  let filteredBooks = books.reduce((acc,book) => {
    acc[book.authorId]
    ? (acc[book.authorId] += book.borrows.length)
    : (acc[book.authorId] = book.borrows.length);
    return acc;
  }, {});

  for (const key in filteredBooks){
    const value = filteredBooks[key];
    let newObj = {};
    newObj['name'] = AuthorNameById(authors, parseInt(key));
    newObj['count'] = value;
    result.push(newObj);
  }
  return sorter(result).slice(0,5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
