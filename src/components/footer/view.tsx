import './styles.scss';
import { MAIN_CONTENT_HEADER_FOOTER } from '../../const';

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="left-side-footer-container">
        <p className="copyrights-label">{MAIN_CONTENT_HEADER_FOOTER.FOOTER_COPYRIGHTS}</p>
      </div>
    </section>
  );
};
