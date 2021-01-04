import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    // method 2: use async - await syntax
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID KLP1CM4iZ7bpkzw-jbC3z-PPGDErqTXSZi4JvrCtVvI",
      },
    });

    console.log(response.data.results);
    // method 1 to deal with promise
    // .then((response) => {
    //   console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
