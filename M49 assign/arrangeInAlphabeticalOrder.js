const books =[ 
    {
        title: "helpless NIGHT",
        writer: "jk msn",
        year: 4324
    },
    {
        title: "Harry POtter",
        writer: "J K rowling",
        year: 1834
    },
    {
        title: "1984",
        writer: "george orwell",
        year: 1923,
    }
]
function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitles(books, callback){
    const titles = books.map((book)=> book.title);
    callback(titles);
}
extractTitles(books, logTitles);