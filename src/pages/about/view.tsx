import { Fragment } from 'react';
import { BodyComponent } from '../../components';
import './styles.scss';

const AboutPageContent = () => {
  return (
    <div>
      <h1>HELLO THERE!!!</h1>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <Fragment>
      <BodyComponent innerComponent={AboutPageContent()} activePage={'about'} />
    </Fragment>
  );
};
