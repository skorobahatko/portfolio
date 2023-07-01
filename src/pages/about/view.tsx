import { Fragment } from 'react';
import { BodyComponent } from '../../components';
import { ABOUT_PAGE_CONTENT } from '../../const';
import './styles.scss';

const AboutWorkExperience = ({ fromTo, title, content }: { fromTo: string; title: string; content: string }) => {
  return (
    <div className="about-work-experience-content-container">
      <div className="time-from-to">
        <span>{fromTo}</span>
      </div>
      <div className="content-container">
        <h3 className="content-title">{title}</h3>
        <br />
        <p className="content-data">{content}</p>
      </div>
    </div>
  );
};

const AboutPageContent = () => {
  return (
    <section className="about-content-container">
      <div className="main-header-title">
        <h1 className="name-title">
          {ABOUT_PAGE_CONTENT.HEADER_WELCOME}
          <br />
          {ABOUT_PAGE_CONTENT.HEADER_NAMING}
        </h1>
        <span className="position-title">{ABOUT_PAGE_CONTENT.HEADER_SUB_NAMING}</span>
      </div>
      <div className="main-info-content">
        <p className="main-content-text">
          {ABOUT_PAGE_CONTENT.MAIN_CONTENT_1}
          <br />
          {ABOUT_PAGE_CONTENT.MAIN_CONTENT_2}
        </p>
      </div>
      <div className="main-work-experience-container">
        {ABOUT_PAGE_CONTENT.WORK_EXPERIENCE_ARRAY.map(({ fromTo, title, content }) => (
          <AboutWorkExperience fromTo={fromTo} title={title} content={content} />
        ))}
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
