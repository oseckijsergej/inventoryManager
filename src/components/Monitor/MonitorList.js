import React, {PropTypes} from 'react';
import MonitorItem from './MonitorItem';
const MonitorList = ({ items }) => {
  return (
    <table className="table footable no-paging footable-loaded" data-page-size={20} data-filter="#filter">
      <thead>
      <tr>
        <th className="footable-sortable">Account Name<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">Google ID<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">Active<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">Activated Ad Groups<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">No Results Found<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">Errors<span className="footable-sort-indicator" /></th>
        <th className="footable-sortable">Adgroup Change Total<span className="footable-sort-indicator" /></th>
      </tr>
      </thead>
      <tbody>

      {items.map((item, i) =>
        <MonitorItem key={i} {...item} />
      )}

      </tbody>
      <tfoot>
      <tr>
        <td colSpan={5}>
          <ul className="pagination pull-right"><li className="footable-page-arrow disabled"><a data-page="first" href="#first">«</a></li><li className="footable-page-arrow disabled"><a data-page="prev" href="#prev">‹</a></li><li className="footable-page active"><a data-page={0} href="#">1</a></li><li className="footable-page-arrow disabled"><a data-page="next" href="#next">›</a></li><li className="footable-page-arrow disabled"><a data-page="last" href="#last">»</a></li></ul>
        </td>
      </tr>
      </tfoot>
    </table>
  );
};

MonitorList.propTypes = {
  items: PropTypes.array.isRequired
};

export default MonitorList;