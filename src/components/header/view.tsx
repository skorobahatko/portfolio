import { Link } from 'react-router-dom';

import './styles.scss';

export const Header = ({ activePage }: { activePage: string }) => {
  return (
    <section className="header-container">
      <div className="center-header-container">
        <td className={`${activePage === 'about' ? 'active ' : ''}nav-item`}>
          <Link className="link-item" to={'/'}>
            About
          </Link>
        </td>
        <td className={`${activePage === 'portfolio' ? 'active ' : ''}nav-item`}>
          <Link className="link-item" to={'/portfolio'}>
            Portfolio
          </Link>
        </td>
        <td className={`${activePage === 'contact' ? 'active ' : ''}nav-item`}>
          <Link className="link-item" to={'/contact'}>
            Contact
          </Link>
        </td>
      </div>
    </section>
  );
};
