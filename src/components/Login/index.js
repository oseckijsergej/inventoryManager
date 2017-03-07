import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './loginActions';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Login extends Component {
  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  componentWillMount() {
    document.getElementById('pageBody').className = 'gray-bg';
  }

  render() {
    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 className="logo-name">IM</h1>
          </div>
          <h3>Inventory Monitor</h3>
          <p>By Hoot Interactive </p>
          <form className="m-t" role="form" method="post" action="login.php">
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Username" required/>
            </div>
            <div className="form-group">
              <input type="password" name="pass" className="form-control" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b" name="btn-login">Login</button>
          </form>
          <p className="m-t">
            <small>Hoot Interactive © 2016</small>
          </p>
        </div>
      </div>
    );
  }
}