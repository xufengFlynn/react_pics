import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui fluid form">
          <div className="field">
            <input
              type="text"
              placeholder="Have a try !"
              onChange={this.onInputChange}
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
