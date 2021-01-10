/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div``;

const RepoItem = ({ repo }) => {
  return (
    <Card>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </Card>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
