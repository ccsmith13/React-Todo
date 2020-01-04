import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 12rem;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 1%;
  padding: 2%;
  font-size: 1rem;
`;
const Search = props => {
  return (
    <div>
      <form>
        <SearchInput
          type="text"
          placeholder="Search for a Task"
          onChange={props.handleSearch}
          value={props.searchText}
        />
      </form>
    </div>
  );
};

export default Search;
