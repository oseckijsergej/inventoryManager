import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './TopNavActions';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class TopNav extends Component {
  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {

    return (
      <div className="row border-bottom">

        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars" /> </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <a href="logout.php">
                <i className="fa fa-sign-out" /> Log out
              </a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}