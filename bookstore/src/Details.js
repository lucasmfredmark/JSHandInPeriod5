import React from "react"
import {Link} from "react-router"
import EditForm from './Edit'


export default class Details extends React.Component {
  render() {
    const id = this.props.params.id;
    const store = this.props.route.bookStore;
    let book = store.getBook(id);
    console.dir(book)
    return (
      <div>
        <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
        <h4> {book.info}</h4>
        <h4>{book.moreInfo}</h4>
        <br />
        <EditForm bookStore={this.props.route.bookStore} book={book} />
        <br />
        <br />
        <Link to="/products">Products</Link>
      </div>
    );
  }
}