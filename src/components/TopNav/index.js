import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './topNavActions';
import { Link } from 'react-router';

@connect(
  (state, ownProps) => ({
    isToggle: state.toggleSidebar
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class TopNav extends Component {
  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  componentDidUpdate() {
    let { isToggle } = this.props;
    this.toggleSidebar(isToggle);
  }

  toggleSidebar(isToggle) {
    if (isToggle) {
      document.getElementById('pageBody').classList.add('mini-navbar');
    } else {
      document.getElementById('pageBody').classList.remove('mini-navbar');
    }
  }

  onBurgerClick = (e) => {
    e.preventDefault();
    this.props.actions.toggleSidebar();
  };

  render() {

    return (
      <div className="row border-bottom">

        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
            <a
              onClick={this.onBurgerClick}
              className="navbar-minimalize minimalize-styl-2 btn btn-primary ">
              <i className="fa fa-bars" />
            </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <Link to="/login">
                <i className="fa fa-sign-out" /> Log out
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}