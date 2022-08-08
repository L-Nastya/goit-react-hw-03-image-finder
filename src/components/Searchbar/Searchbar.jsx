import { React, Component } from "react";
import styled from "styled-components";
import { GoSearch } from 'react-icons/go';
import { toast} from 'react-toastify';
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
      toast.warning("Fill in the line");
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }
    render() {
        return (
            <SearchContainer>
  <SearchForm onSubmit ={this.textSubmit}>
    <SearchBtn type="submit" >
     <GoSearch size={20}/>
    </SearchBtn>
    <SearchInput
      type="text"
      value={this.state.text}
      onChange={this.textInput}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchContainer>
        )
    }
}
export default Searchbar

const SearchContainer = styled.header`
    top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #2b6f3a;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

`;

const SearchForm = styled.form`
    display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

`;

const SearchBtn = styled.button`
      display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover{
      opacity: 1;
  }
`;

const SearchInput = styled.input`
    display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
::placeholder{
    font: inherit;
  font-size: 18px;

}
`;