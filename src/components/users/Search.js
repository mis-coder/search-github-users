import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    input: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  changeHandler = (e) => this.setState({ input: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.input === "") {
      this.props.setAlert("Please enter something!");
    } else {
      this.props.searchUsers(this.state.input);
      this.setState({ input: "" });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} className='form'>
          <input
            type='text'
            name='text'
            placeholder='search users...'
            className='search-bar'
            value={this.state.input}
            onChange={this.changeHandler}
          />
          <input type='submit' value='Search' className='search-btn' />
        </form>
      </>
    );
  }
}

export default Search;
