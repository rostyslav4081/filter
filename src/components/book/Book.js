import React, {Component} from 'react';


class Book extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className={"book"}>
                <div className={"name"}>{item.nameBook}</div>
                <img className={"book_img"} src={item.img.src} alt={item.img.alt}/>
            </div>
        );
    }
}


export default Book;