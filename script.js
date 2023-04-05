const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//     • Contar o número de categorias e o número de livros em cada categoria

const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (let categorias of booksByCategory){
    console.log("Total de livros da categoria: ",categorias.category)
    console.log(categorias.books.length)
}

//     • Contar o número de autores

function countAuthors() {
    let authors = [];

    for(let categorias of booksByCategory){
        for(let book of categorias.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }
    console.log(authors.length);
}

countAuthors();

//     • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function booksOfAuthor(author) {
    let books = [];

    for(let categorias of booksByCategory){
        for(let book of categorias.books){
            if(book.author === author){
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury');

