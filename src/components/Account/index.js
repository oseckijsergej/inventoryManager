import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './accountActions';
@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Account extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Account</h1>
      </div>
    );
  }
}