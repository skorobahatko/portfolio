import { Fragment } from 'react';
import { BodyComponent } from '../../components';

export const PortfolioPageContent = () => {
  return (
    <div>
      <h1>PORTFOLIO</h1>
    </div>
  );
};

export const PortfolioPage = () => {
  return (
    <Fragment>
      <BodyComponent innerComponent={PortfolioPageContent()} activePage={'portfolio'} />
    </Fragment>
  );
};
