import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    const isActive = this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    const className = isActive ? 'active' : '';

    return (
      <li className={className}>
        <Link { ...this.props } activeClassName='active'>{this.props.children}</Link>
      </li>
    );
  }
}