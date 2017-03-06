import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './builderActions';

@connect(
  (state, ownProps) => ({
    state: state
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  }))
export default class Builder extends Component {
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
          <h1>Campaign Builder Templates</h1>
          <a href="index.php?actn=new"><button className="btn btn-primary btn-lg"> New Template</button></a>
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
            <tbody>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                0_Default Template - New Vehicles with Years</td>
              <td>
              </td>
              <td>
              </td>
              <td>
                [year] [make] Models </td>
              <td>
              </td>
              <td>
                <a href="upload/0_Default_Template_-_New_Vehicles_with_Years.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=264">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=264">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=264">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=264">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                0_Default Template - Used Vehicle Campaigns</td>
              <td>
              </td>
              <td>
              </td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=270">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=270">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=270">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=270">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Cottage Chrysler Dodge Jeep Ram - New Vehicles</td>
              <td>
                381-525-9312</td>
              <td>
                Wautoma, WI</td>
              <td>
                [year] [make] Models </td>
              <td>
                Chrysler, Dodge, Jeep, Ram</td>
              <td>
                <a href="upload/Cottage_Chrysler_Dodge_Jeep_Ram_-_New_Vehicles.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=789">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=789">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=789">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=789">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Cottage Chrysler Dodge Jeep Ram - Used Vehicles</td>
              <td>
                381-525-9312</td>
              <td>
                Wautoma, WI</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                <a href="upload/Cottage_Chrysler_Dodge_Jeep_Ram_-_Used_Vehicles.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=788">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=788">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=788">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=788">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                D'Ambrosio Chrysler Dodge Jeep - New</td>
              <td>
                997-193-8644</td>
              <td>
                Downington, PA</td>
              <td>
                [year] [make] Models with Trim</td>
              <td>
                Chrysler, Dodge, Jeep</td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=226">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=226">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=226">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=226">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                D'Ambrosio Chrysler Dodge Jeep - Used</td>
              <td>
                997-193-8644</td>
              <td>
                Downington, PA</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=224">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=224">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=224">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=224">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Gateway Buick GMC - New Vehicles</td>
              <td>
                926-543-9837</td>
              <td>
                Dallas, TX</td>
              <td>
                [year] [make] Models </td>
              <td>
                Buick, GMC</td>
              <td>
                <a href="upload/Gateway_Buick_GMC_-_New_Vehicles.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=837">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=837">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=837">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=837">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Gateway Buick GMC - Used Vehicles</td>
              <td>
                926-543-9837</td>
              <td>
                Dallas, TX</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                <a href="upload/Gateway_Buick_GMC_-_Used_Vehicles.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=836">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=836">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=836">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=836">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Servco Lexus - New</td>
              <td>
                267-154-7807</td>
              <td>
                Honolulu, HI</td>
              <td>
                [year] [make] Models with Trim</td>
              <td>
                Lexus</td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=227">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=227">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=227">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=227">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Servco Lexus - Used</td>
              <td>
                Servco Lexus</td>
              <td>
                Honolulu, HI</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                <a href="upload/Servco_Lexus_-_Used.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=321">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=321">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=321">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=321">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Stuart Powell Ford- New</td>
              <td>
                233-849-1945</td>
              <td>
                Danville, KY</td>
              <td>
                [year] [make] Models </td>
              <td>
              </td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=706">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=706">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=706">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=706">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Stuart Powell Ford- Used</td>
              <td>
                233-849-1945</td>
              <td>
                Danville, KY</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=707">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=707">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=707">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=707">delete</a></td>
            </tr>
            <tr className="footable-even" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Toyota of Dallas - New</td>
              <td>
                123-456-7890</td>
              <td>
                Dallas, TX</td>
              <td>
                [year] [make] Models </td>
              <td>
                Toyota</td>
              <td>
                ---</td>
              <td>
                <a href="index.php?actn=edit&id=381">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=381">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=381">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=381">delete</a></td>
            </tr>
            <tr className="footable-odd" style={{display: 'table-row'}}>
              <td><span className="footable-toggle" />
                Toyota of Dallas - Used</td>
              <td>
                123-456-7890</td>
              <td>
                Dallas, TX</td>
              <td>
                used_[make]</td>
              <td>
              </td>
              <td>
                <a href="upload/Toyota_of_Dallas_-_Used.csv">Download<br />Campaign</a></td>
              <td>
                <a href="index.php?actn=edit&id=380">edit</a></td>
              <td>
                <a href="index.php?actn=createcsv&id=380">generate structure</a></td>
              <td>
                <a href="index.php?actn=copy&id=380">copy</a></td>
              <td>
                <a href="index.php?actn=del&id=380">delete</a></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colSpan={5}>
                <ul className="pagination pull-right"><li className="footable-page-arrow disabled"><a data-page="first" href="#first">«</a></li><li className="footable-page-arrow disabled"><a data-page="prev" href="#prev">‹</a></li><li className="footable-page active"><a data-page={0} href="#">1</a></li><li className="footable-page-arrow disabled"><a data-page="next" href="#next">›</a></li><li className="footable-page-arrow disabled"><a data-page="last" href="#last">»</a></li></ul>
              </td>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}