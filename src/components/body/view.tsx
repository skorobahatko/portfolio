import { Footer } from '../footer';
import { Header } from '../header';

import './styles.scss';

export const BodyComponent = ({ innerComponent, activePage }: { innerComponent: JSX.Element; activePage: 'about' | 'portfolio' | 'contact' }) => {
  return (
    <section className="main-container">
      <Header activePage={activePage} />
      <div className="center-container">{innerComponent}</div>
      <Footer />
    </section>
  );
};
