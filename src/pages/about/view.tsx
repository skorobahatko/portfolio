import { Fragment } from 'react';
import { BodyComponent } from '../../components';
import './styles.scss';

const AboutPageContent = () => {
  return (
    <section className="about-content-container">
      <div className="main-header-title">
        <h1 className='name-title'>
          Welcome.
          <br />
          My name is Lorem ipsum
        </h1>
        <span className='position-title'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae harum iure illum error delectus impedit! Tenetur, numquam veritatis blanditiis alias
          mollitia totam doloribus accusantium ex, maxime iste hic, excepturi eos!
          </span>
      </div>
      <div className="main-info-content">
        <p className='main-content-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum delectus beatae eius illum corporis laudantium ipsam molestiae inventore nisi.
          Pariatur maiores molestias deleniti quis odio suscipit mollitia voluptatem itaque aperiam!
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem provident fugiat nesciunt labore vitae, odio eius deleniti dolor inventore,
          libero, in similique praesentium beatae! Minus dolore quae nesciunt cum alias?
        </p>
      </div>
    </section>
  );
};

export const AboutPage = () => {
  return (
    <Fragment>
      <BodyComponent innerComponent={AboutPageContent()} activePage={'about'} />
    </Fragment>
  );
};
