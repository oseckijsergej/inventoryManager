import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MonitorList from './MonitorList';
import * as actions from './monitorActions';
import { Modal, FormControl } from 'react-bootstrap';

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

  state = {
    showModal: false
  };

  hideModal = () => {
    this.setState({showModal: false});
  };

  showModal = () => {
    this.setState({showModal: true});
  };

  componentWillMount() {
    this.props.actions.fetchMonitorItems();
  }

  render() {
    const { items } = this.props;
    const { showModal } = this.state;

    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h3>Account Summary</h3>
          <button onClick={this.showModal} type="button" className="btn btn-info">Add Account</button>
          <Modal
            className="inmodal animated bounceInRight"
            show={showModal}
            onHide={this.hideModal}>
            <Modal.Header closeButton={true}>
              <i className="fa fa-plus modal-icon" />
              <h4 className="modal-title">Add Account</h4>
              <small className="font-bold">
                Fill out the form below. We will contact you when your new account is set up.
              </small>
            </Modal.Header>
            <Modal.Body>
              <form id="newAccount" className="form-horizontal">
                <div className="form-group"><label className="col-lg-4 control-label">Account Name</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" name="accountName" required />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Adwords ID</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" name="adwordsId" />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Website Platform</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" name="websitePlatform" />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Inventory Integration</label>
                  <div className="col-lg-8">
                    <input type="checkbox" name="inventoryIntegration" defaultChecked />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Ad Customizers</label>
                  <div className="col-lg-8">
                    <input type="checkbox" name="AdCustomizers" />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Data Feed Generator</label>
                  <div className="col-lg-8">
                    <input type="checkbox" name="DataFeedGenerator" />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Campaign Manager Name</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" name="CampaignManagerName" required />
                  </div>
                </div>
                <div className="form-group"><label className="col-lg-4 control-label">Campaign Manager Email</label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" name="CampaignManagerEmail" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-4 control-label">Special Requests</label>
                  <div className="col-lg-8">
                    <FormControl componentClass="textarea" />
                  </div>
                </div>
                <input type="hidden" name="clientName" defaultValue="Auto" />
                <input type="submit" className="btn btn-primary accountSubmitBtn" />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-white" data-dismiss="modal">Cancel</button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="ibox-content">
          <input type="text" className="form-control input-sm m-b-xs" id="filter" placeholder="Search" />
          <MonitorList items={items} />
        </div>
      </div>
    );
  }
}