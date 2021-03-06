import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './accountActions';
import AccountList from './AccountList';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Account extends Component {
  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    const items = [{}];

    return (
      <div>
        <div className="row">
          <div className="col-xs-10">
            <h1>
              <strong>Atlanta Luxury Motors</strong>
            </h1>
          </div>
          <div className="col-xs-2">
            <Link className="btn btn-lg btn-warning" to={`/monitor/${0}/edit`}>
              Edit
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <a href="home.php?actn=detail&cat=goodurl&aid=91">      <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>Activated Adgroups</h5>
              </div>
              <div className="ibox-content">
                <h1 className="no-margins">161</h1>
              </div>
            </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="home.php?actn=today&aid=91">      <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>Status Changes</h5>
              </div>
              <div className="ibox-content">
                <h1 className="no-margins">7</h1>
              </div>
            </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="home.php?actn=detail&cat=noinv&aid=91">      <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>No Results</h5>
              </div>
              <div className="ibox-content">
                <h1 className="no-margins">543</h1>
              </div>
            </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="home.php?actn=detail&cat=pageloaderror&aid=91">      <div className="ibox float-e-margins">
              <div className="ibox-title">
                <h5>Error Responses</h5>
              </div>
              <div className="ibox-content">
                <h1 className="no-margins">0</h1>
              </div>
            </div>
            </a>
          </div>
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h3>Changed AdGroups</h3>
            </div>
            <div className="ibox-content">
              <table className="table footable no-paging footable-loaded" data-page-size={20}>
                <thead>
                <tr>
                  <th className="footable-sortable">Account Name<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">Campaign<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">Ad Group<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">Previous Status<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">Current Status<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">URL<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">Page Content<span className="footable-sort-indicator" /></th>
                  <th className="footable-sortable">HTTP Code<span className="footable-sort-indicator" /></th>
                </tr>
                </thead>
                  <AccountList items={items} />
                <tfoot>
                <tr>
                  <td colSpan={5}>
                    <Pagination />
                  </td>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}