/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 { 
    margin: 1rem 0 1rem 0;
    a {
      color: #fff;
      text-decoration: none;
      margin: 10px 0 10px 0;
      &:hover { 
        text-decoration: underline;
      }
    }
  }

`;

const RepoItem = ({ repo }: any) => {
  return (
    <>
      <Card>
        <h3>
          <a href={repo.html_url} target="_blank" rel="noreferrer noopener">{repo.name}</a>
        </h3>
      </Card>
    </>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
