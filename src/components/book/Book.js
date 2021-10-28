import React, {Component} from 'react';
import './Book.css'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        };
    }
    render() {
        let {item} = this.props;

        return (
            <div className={"book"}>
                <div className={"info"}>
                    <div className={"name"} onMouseOver={() => this.setState(() => ({
                        isHovering: true
                    }))} onMouseOut={()=>this.setState(() => ({
                        isHovering: false
                    }))}>{item.name}</div>
                    {this.state.isHovering &&(<div>
                        <div className={"author"}>{item.info.author}</div>
                        <div className={"category"}>{item.info.category}</div>
                    </div>)}
                </div>
                {this.state.isHovering &&<img className={"book_img"} src={item.img.src} alt={item.img.alt}/>}
            </div>
        );
    }
}


export default Book;