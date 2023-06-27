import { Fragment } from 'react';
import { BodyComponent } from '../../components';

const ContactPageContent = () => {
  return (
    <div>
      <h1>CONTACT</h1>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <Fragment>
      <BodyComponent innerComponent={ContactPageContent()} activePage={'contact'} />
    </Fragment>
  );
};
