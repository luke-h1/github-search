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
  }
`;

interface Repo {
  repo { 
    
  }
}




const RepoItem: React.FC = ({ repo }: Repo) => {
  return (
    <>
      <Card>
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </Card>
    </>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
