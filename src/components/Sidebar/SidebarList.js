import React, {PropTypes} from 'react';
import NavLink from './NavLink';

const SidebarList = ({ links }) => {
  return (
  <ul className="nav metismenu" id="side-menu" style={{display: 'block'}}>
    <li className="nav-header">
      <div className="dropdown profile-element">
        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Auto Agency Demo</strong>
                    </span> <span className="text-muted text-xs block">Admin <b className="caret" /></span> </span> </a>
        <ul className="dropdown-menu animated fadeInRight m-t-xs">
          <li><a href="logout.php">Logout</a></li>
        </ul>
      </div>
      <div className="logo-element">
        IC
      </div>
    </li>

    {links.map((link, i) =>
      <NavLink key={i} to={link.href}>
        <i className={`fa ${link.icon}`} />
        <span className="nav-label">{link.text}</span>
      </NavLink>
    )}

    <li>
      <a href="http://help.hootinteractive.net" target="_blank">
        <span className="nav-label">Help Documentation</span>
      </a>
    </li>

  </ul>
  );
};

SidebarList.propTypes = {
  links: PropTypes.array.isRequired
};

export default SidebarList;