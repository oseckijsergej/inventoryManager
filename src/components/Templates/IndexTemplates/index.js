import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Pagination } from 'react-bootstrap';
import * as actions from './templatesActions';
import { Link } from 'react-router';
import IndexTemplatesList from './IndexTemplatesList';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Templates extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    // @todo get items from api
    const items = [{}];

    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h1>Campaign Builder Templates</h1>
          <Link
            to="/templates/new"
            className="btn btn-primary btn-lg">
            New Template
          </Link>
        </div>
        <div className="ibox-content">
          <input type="text" className="form-control input-sm m-b-xs" id="filter" placeholder="Search" />
          <table className="table table-striped footable no-paging footable-loaded" data-page-size={20} data-filter="#filter">
            <thead>
            <tr><th className="footable-sortable">
              Template Name
              <span className="footable-sort-indicator" /></th>
              <th className="footable-sortable">
                Associated Account
                <span className="footable-sort-indicator" /></th>
              <th className="footable-sortable">
                Metro
                <span className="footable-sort-indicator" /></th>
              <th className="footable-sortable">
                Campaign Name
                <span className="footable-sort-indicator" /></th>
              <th className="footable-sortable">
                Campaign Filter
                <span className="footable-sort-indicator" /></th>
              <th className="footable-sortable">
                Status
                <span className="footable-sort-indicator" /></th>
              <th colSpan={5} className="footable-sortable">
                Functions
                <span className="footable-sort-indicator" /></th>
            </tr></thead>
            <IndexTemplatesList items={items} />
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
    );
  }
}