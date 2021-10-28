import React, {Component} from 'react';
import AllBooks from "./components/all-books/AllBooks";
import SearchBar from "./components/search-bar/SearchBar";

class App extends Component {
  render() {

    return (
        <div>
          <SearchBar/>

          <AllBooks/>


        </div>
    );
  }
}

export default App;