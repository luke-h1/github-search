import React, { useState, useContext } from 'react';
import GithubContext from '../../../context/Github/githubContext';
import AlertContext from '../../../context/Alert/alertContext';
import {
  SearchInput, Form, SearchInputBtn, Button, SearchWrap,
} from './SearchEl';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('enter a valid string');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  return (
    <SearchWrap>
      <Form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="text"
          placeholder="search github users"
          value={text}
          onChange={onChange}
        />
        <SearchInputBtn
          type="submit"
          value="Search"
        />
      </Form>
      {githubContext.users.length > 0 && (
      <Button onClick={githubContext.clearUsers}>
        Clear
      </Button>
      )}
    </SearchWrap>

  );
};
export default Search;