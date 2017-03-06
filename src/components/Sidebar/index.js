import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './sidebarActions';
import SidebarList from './SidebarList';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    const links = [
      {href: 'monitor', text: 'Inventory Monitor', icon: 'fa-th-large'},
      {href: 'builder', text: 'Campaign Builder', icon: 'fa-cubes'},
      {href: 'feeds', text: 'Data Feeds', icon: ''},
    ];

    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <SidebarList links={links} />
        </div>
      </nav>
    );
  }
}