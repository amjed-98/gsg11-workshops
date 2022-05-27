import React, { Fragment } from 'react';
import MoviesListComp from '../../components/MoviesListComp';
import { Outlet } from 'react-router-dom';

const MoviesListPage = (props) => {
  return (
    <Fragment>
      <MoviesListComp />
      <Outlet />
    </Fragment>
  );
};

export default MoviesListPage;
