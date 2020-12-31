import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui fluid form">
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <div className="ui pointing blue basic label">
              Pics you want to search !
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
