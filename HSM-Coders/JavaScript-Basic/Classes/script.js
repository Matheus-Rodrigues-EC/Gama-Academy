// a palavra reservada CLASS é utilisada para declarar uma classe
class Book{
    // a palavra reservada CONSTRUCTOR faz a construção dos atributos da classe
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // aqui criamos um métodos da classe para mostrar o titulo do livro
    read(){
        return `Estou lendo ${this.title}`;
    }
    // aqui criamos um métodos da classe para mostrar qunatas páginas tem o livro
    page(){
        return `O livro tem ${this.pages} páginas`;
    }
}
let book = new Book("algoritimos", "André", 350);


console.log(book.read());
console.log(book.page());

// assim como no JAVA a palavra reservada EXTENDS serve para criar herança de outras classes
class ITBook extends Book{
    constructor(title, author, pages, technology){
        // a palavra reservada SUPER vai indicar o que deve ser herdado da classe pai/mãe
        super(title, author, pages);
        this.technology = technology;
    }
    // aqui criamos um métodos da classe para mostrar qual página do livro está sendo lida
    inPage(){
        return `Estou lendo na página ${this.pages}`;
    }
    // aqui criamos o get, dessa forma, podemos acessar o valor
    get gPage(){
        return this.pages;
    }
    //aqui criamos o set, dessa forma podemos reatribui valores sem necessidade de novas declarações
    set sPage(value){
        this.pages = value;
    }
}

let itBook = new ITBook("Carros", "Felix", 2500, "automação mecânica");
itBook.sPage = 158;
console.log(itBook.inPage());