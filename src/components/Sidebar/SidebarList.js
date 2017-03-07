import React, {PropTypes} from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const SidebarList = ({ links }) => {
  return (
  <ul className="nav metismenu" id="side-menu" style={{display: 'block'}}>
    <li className="nav-header">
      <div>
        <span className="clear">
          <span className="block m-t-xs">
            <strong className="font-bold">Auto Agency Demo</strong>
          </span>
        </span>
      </div>
      <DropdownButton title="Admin" id="basic-nav-dropdown">
        <MenuItem>
          <Link to="/login">Logout</Link>
        </MenuItem>
      </DropdownButton>
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