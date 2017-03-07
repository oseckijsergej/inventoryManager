import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './accountEditActions';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class AccountEdit extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="col-lg-12">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h2>Edit Atlanta Luxury Motors</h2>
          </div>
          <div className="ibox-content">
            <form id="updatead" name="updatead" className="form-horizontal">
              <input type="hidden" name="id" defaultValue={91} />
              <div className="form-group"><label className="col-sm-2 control-label">Account Name</label>
                <div className="col-sm-10"><input type="text" className="form-control" name="accountname" defaultValue="Atlanta Luxury Motors" /></div>
              </div>
              <div className="form-group"><label className="col-sm-2 control-label">Google ID</label>
                <div className="col-sm-10"><input type="text" className="form-control" name="googleid" defaultValue="428-771-8758" /></div>
              </div>
              <div className="form-group"><label className="col-sm-2 control-label">Active?</label>
                <div className="col-sm-10">
                  <select className="form-control m-b" name="active">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <div className="col-sm-4 col-sm-offset-2">
                  <button className="btn btn-primary" type="submit" name="updatead">Save changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}