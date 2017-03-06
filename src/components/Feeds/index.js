import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './feedsActions';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Feeds extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h3>Data Feeds</h3>
        </div>
        <div className="ibox-content">
          <div className="ibox-title">
            <h3>Facebook Feeds</h3>
          </div>
          <table className="table footable" data-page-size={20}>
            <thead>
            <tr>
              <th>Account Name</th>
              <th>Path</th>
              <th>Download</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}