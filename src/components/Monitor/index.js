import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './monitorActions';
import MonitorList from './MonitorList';

@connect(
  (state, ownProps) => ({
    items: state.monitorItems
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Monitor extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  componentWillMount() {
    this.props.actions.fetchMonitorItems();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h3>Account Summary</h3>
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Add Account</button>
        </div>
        <div className="ibox-content">
          <input type="text" className="form-control input-sm m-b-xs" id="filter" placeholder="Search" />
          <MonitorList items={items} />
        </div>
      </div>

    );
  }
}