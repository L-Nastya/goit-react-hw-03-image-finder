import { React, Component } from "react";
class Searchbar extends Component{
    state = {
        text: ""
  }
  textInput = (e) => {
    this.setState({text: e.currentTarget.value.toLowerCase() })
  }
  textSubmit = (e) => {
    e.preventDefault()
    if (this.state.text.trim() === "") {
      alert("Введите запрос");
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }
    render() {
        return (
            <header>
  <form onSubmit ={this.textSubmit}>
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      type="text"
      value={this.state.text}
      onChange={this.textInput}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}
export default Searchbar