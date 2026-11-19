const books = [{
  title:"Sach truy hon",
  authorName:"Ducbui",
  releaseYear:2005
},
{
  title:"Sach thanh",
  authorName:"Thiki Nguyn",
  releaseYear:2010
},
{
  title:"Sach giao khoa",
  authorName:"Hai Meo",
  releaseYear:2019
}
]

const sortByYear = (book1,book2) => {
  if(book1.releaseYear < book2.releaseYear){
    return -1
  }
  else if(book1.releaseYear > book2.releaseYear){
    return 1
  }
  else{
    return 0
  }
}
const filteredBooks = books.filter(book =>  { return book.releaseYear <= "2005"})

filteredBooks.sort((sortByYear))

console.log(filteredBooks.sort((sortByYear)))



