import React, { useState, useContext } from 'react';
import GithubContext from '../../../context/Github/githubContext';
import AlertContext from '../../../context/Alert/alertContext';
import {
  SearchInput, Form, SearchWrap,
} from './SearchEl';
import { InputButton } from '../../helpers/InputButton';
import { Button } from '../../helpers/Button';

const Search: React.FC = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  const onChange = (e: any) => setText(e.target.value);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('enter a valid string');
    } else {
      githubContext.clearUsers(); // CLEAR ANY EXISTING USERS AND SEARCH FOR SINGLE USER
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
        <InputButton
          type="submit"
          value="Search"
          style={{ marginLeft: '20px' }}
        />
      </Form>
      {githubContext.users.length > 0 && (
      <Button onClick={githubContext.clearUsers} round="true">
        Clear
      </Button>
      )}
    </SearchWrap>

  );
};
export default Search;
