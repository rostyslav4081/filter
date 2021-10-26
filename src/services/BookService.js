export class BookService{
    url = "http://localhost:3001/api/books";
    getAllBooks(){
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;

            });
    }
    getBookByID(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value);
    }
    getBookImg(id){
        return fetch(`${this.url}/${id}`).then(value => value.img.src)
    }
}

