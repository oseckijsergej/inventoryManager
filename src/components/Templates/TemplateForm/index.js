import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './templateForm';

@connect(
  (state, { params: {id} }) => ({
    templateId: id,
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class TemplateForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.props.templateId);
  }

  static propTypes = {
    // prop: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h3>Edit Template</h3>
        </div>
        <div className="ibox-content">
          <form action="index.php" method="post" className="form form-horizontal">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">
                  Template Information
                </h5>
              </div>
              <div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Template Name
                    </label>
                    <div className="col-sm-10">
                      <input type="text" name="accountname" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Account ID
                    </label>
                    <div className="col-sm-10">
                      <input type="text" name="accountid" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Location
                    </label>
                    <div className="col-sm-10">
                      <input type="text" name="location" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Include Location <br />
                    </label>
                    <div className="col-sm-10">
                      <div>
                        <label>
                          <input type="checkbox" name="processlocation" defaultValue={1} defaultChecked/>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Make Filter <br />
                      <small className="text-navy">i.e. ford, kia</small>
                    </label>
                    <div className="col-sm-10">
                      <input type="text" name="makefilter" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">
                      Year Range <br />
                    </label>
                    <div className="col-xs-3">
                      <input type="text" name="year_start" className="form-control"
                             placeholder="Year Start"/>
                    </div>
                    <div className="col-xs-1 text-center">
                      -
                    </div>
                    <div className="col-xs-3">
                      <input type="text" name="year_end" className="form-control" placeholder="End Year"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="id" />
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading flex justify-between">
                  <div>
                    <h5 className="panel-title">
                      <a data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                         className="collapsed">Campaign Naming</a>
                    </h5>
                  </div>
                  <div>
                    <input type="checkbox" name="processcampaigns" defaultValue={1} defaultChecked/>
                  </div>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" aria-expanded="false">
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Campaign Name
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue="[year] [make] Models " type="text" name="campaignname"
                               className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Campaign Status
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="campaignstatus">
                          <option>Active</option>
                          <option>Paused</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Budget
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue={1} type="text" name="campaigndailybudget" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Networks
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="networks">
                          <option>Google Search</option>
                          <option>Google Search; Search Partners</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Enhanced CPC
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="enhancedcpc">
                          <option>Enabled</option>
                          <option>Disabled</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Bid Modifier
                      </label>
                      <div className="col-sm-10">
                        <input type="text" name="bidmodifier" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Ad Rotation
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="adrotation">
                          <option>Optimize for clicks</option>
                          <option>Optimize for conversions</option>
                          <option>Rotate Evenly</option>
                          <option>Rotate Indefinitely</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Delivery Method
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="deliverymethod">
                          <option>Standard</option>
                          <option>Accelerated</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading flex justify-between">
                  <div>
                    <h5 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true"
                         className>
                        Ad Group Naming
                      </a>
                    </h5>
                  </div>
                  <div>
                    <input type="checkbox" defaultChecked name="processadgroups" defaultValue={1}/>
                  </div>
                </div>
                <div id="collapseThree" className="panel-collapse collapse in" aria-expanded="true">
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Ad Group Name <br />
                        <small className="text-navy">Ex: [model]</small>
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue="[model] [trim]" type="text" name="adgroupname" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Ad Group Status
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="adgroupstatus">
                          <option>Active</option>
                          <option>Paused</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Max CPC Bid
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue="2.50" type="text" name="maxcpcbid" className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading flex justify-between">
                  <div>
                    <h5 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseAds" aria-expanded="false"
                         className="collapsed">
                        Ads
                      </a>
                    </h5>
                  </div>
                  <div>
                    <input defaultChecked type="checkbox" name="processads" defaultValue={1}/>
                  </div>
                </div>
                <div id="collapseAds" className="panel-collapse collapse" aria-expanded="false">
                  <div className="panel-body">
                    <div id="adContainer">
                      <div className="ad" id="ad1">
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 1 </label>
                          <div className="col-sm-10"><input defaultValue="[model] [trim]" type="text"
                                                            name="ads[1][headline1]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 1
                          Alternate </label>
                          <div className="col-sm-10"><input defaultValue="[model]" type="text"
                                                            name="ads[1][headline1_alt]" className="form-control"/>
                          </div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 2 </label>
                          <div className="col-sm-10"><input defaultValue="[year] Model Year End Clearance" type="text"
                                                            name="ads[1][headline2]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 2
                          Alternate </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[1][headline2_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Description </label>
                          <div className="col-sm-10">
                            <input
                            defaultValue="Browse Our Huge Selection of [year] [make]s In Stock Now! See Specials & Financing Options."
                            type="text" name="ads[1][description]" className="form-control"/>
                          </div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Description
                          Alternate </label>
                          <div className="col-sm-10"><input
                            defaultValue="Browse Our Huge Selection of [year] [make]s In Stock Now! " type="text"
                            name="ads[1][description_alt]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 1 </label>
                          <div className="col-sm-10"><input defaultValue="[year]" type="text" name="ads[1][path1]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 1 Alternate </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[1][path1_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 2 </label>
                          <div className="col-sm-10"><input defaultValue="[model]" type="text" name="ads[1][path2]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 2 Alternate </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[1][path2_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Final URL </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[1][finalurl]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Final Mobile URL </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[1][finalmobileurl]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Device
                          Preference </label>
                          <div className="col-sm-10">
                            <select className="form-control m-b" name="ads[1][devicepreferences]">
                            <option value="All">All</option>
                            <option value="Mobile">Mobile</option>
                          </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-sm-2 control-label"> Ad Status </label>
                          <div className="col-sm-10">
                            <select className="form-control m-b" name="ads[1][adstatus]">
                            <option>Active</option>
                            <option>Paused</option>
                          </select></div>
                        </div>
                        <button type="button" id="removeAd1" className="btn btn-w-s btn-danger">Delete Ad</button>
                        <div className="hr-line-dashed"/>
                      </div>
                      <div className="ad" id="ad2">
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 1 </label>
                          <div className="col-sm-10"><input defaultValue="[year] [model] [trim]" type="text"
                                                            name="ads[2][headline1]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 1
                          Alternate </label>
                          <div className="col-sm-10"><input defaultValue="[model]" type="text"
                                                            name="ads[2][headline1_alt]" className="form-control"/>
                          </div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 2 </label>
                          <div className="col-sm-10"><input defaultValue="Drive One At Servco Toyota" type="text"
                                                            name="ads[2][headline2]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Headline 2
                          Alternate </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[2][headline2_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Description </label>
                          <div className="col-sm-10"><input
                            defaultValue="Your [make] Super Store. We Have The Perfect [model] [trim] For You!"
                            type="text" name="ads[2][description]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Description
                          Alternate </label>
                          <div className="col-sm-10">
                            <input defaultValue="Your [make] Super Store. We Have The Perfect Car For You!" type="text"
                            name="ads[2][description_alt]" className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 1 </label>
                          <div className="col-sm-10"><input defaultValue="[make]" type="text" name="ads[2][path1]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 1 Alternate </label>
                          <div className="col-sm-10">
                            <input defaultValue type="text" name="ads[2][path1_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 2 </label>
                          <div className="col-sm-10">
                            <input defaultValue type="text" name="ads[2][path2]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Path 2 Alternate </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[2][path2_alt]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Final URL </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[2][finalurl]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Final Mobile URL </label>
                          <div className="col-sm-10"><input defaultValue type="text" name="ads[2][finalmobileurl]"
                                                            className="form-control"/></div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Device
                          Preference </label>
                          <div className="col-sm-10">
                            <select className="form-control m-b" name="ads[2][devicepreferences]">
                            <option>All</option>
                            <option>Mobile</option>
                          </select>
                          </div>
                        </div>
                        <div className="form-group"><label className="col-sm-2 control-label"> Ad Status </label>
                          <div className="col-sm-10">
                            <select className="form-control m-b" name="ads[2][adstatus]">
                            <option>Active</option>
                            <option>Paused</option>
                          </select>
                          </div>
                        </div>
                        <button type="button" id="removeAd2" className="btn btn-w-s btn-danger">Delete Ad</button>
                        <div className="hr-line-dashed"/>
                      </div>
                    </div>
                    <button type="button" id="createAdBtn" className="btn btn-w-m btn-primary">
                      New Ad
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading flex justify-between">
                  <div>
                    <h5 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false"
                         className="collapsed">
                        Keywords
                      </a>
                    </h5>
                  </div>
                  <div>
                    <input type="checkbox" defaultChecked name="processkeywords" defaultValue={1}/>
                  </div>
                </div>
                <div id="collapseSix" className="panel-collapse collapse" aria-expanded="false">
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Keywords <br />
                        <small className="text-navy">
                          keyword1,phrase <br />
                          keyword2,exact
                        </small>
                      </label>
                      <div className="col-sm-10">
                        <textarea className="form-control" name="keywords"
                                  defaultValue={"New [make] [model] [trim],Phrase\nnew [model] [trim],Phrase\n[make] [model] [trim],Exact\n[model] [trim],Exact\n++[model] ++[trim] +car,Broad\n++[model] ++[trim],Broad\n[year] ++[make] ++[model] +[trim],Broad\n[year] ++[model] ++[trim],Broad\n"}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Keyword Status
                      </label>
                      <div className="col-sm-10">
                        <select className="form-control m-b" name="keywordactive">
                          <option value="active">active</option>
                          <option value="paused">paused</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h5 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false"
                       className="collapsed">
                      Ad Extensions
                    </a>
                  </h5>
                </div>
                <div id="collapseSeven" className="panel-collapse collapse" aria-expanded="false">
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Phone <br />
                        <small className="text-navy">
                          (xxx)xxx-xxxx
                        </small>
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="phone" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Include Call Ext <br />
                      </label>
                      <div className="col-sm-10">
                        <div>
                          <label>
                            <input type="checkbox" name="processcallextension" defaultValue={1} defaultChecked/>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Include Site Links <br />
                      </label>
                      <div className="col-sm-10">
                        <div>
                          <label>
                            <input type="checkbox" defaultChecked name="processlinks" defaultValue={1}/>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link Text 1
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue="Payment Calculator" type="text" name="sitelinktext1"
                               className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link URL 1
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinkurl1" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link Text 2
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinktext2" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link URL 2
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinkurl2" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link Text 3
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinktext3" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link URL 3
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinkurl3" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link Text 4
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinktext4" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Link URL 4
                      </label>
                      <div className="col-sm-10">
                        <input defaultValue type="text" name="sitelinkurl4" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Include Call Outs <br />
                      </label>
                      <div className="col-sm-10">
                        <div>
                          <label>
                            <input type="checkbox" defaultChecked name="processcallouts"/>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Call Out 1
                      </label>
                      <div className="col-sm-10">
                        <input type="text" name="callouttext1" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Call Out 2
                      </label>
                      <div className="col-sm-10">
                        <input type="text" name="callouttext2" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Call Out 3
                      </label>
                      <div className="col-sm-10">
                        <input type="text" name="callouttext3" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Call Out 4
                      </label>
                      <div className="col-sm-10">
                        <input type="text" name="callouttext4" className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}