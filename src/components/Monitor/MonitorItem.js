import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const MonitorItem = ({
  id, name, googleId, active,
  activatedAdGroups, noResultFound,
  errors, adGroupChangeTotal }) => {
  return (
    <tr className="footable-even">
      <td>
        <span className="footable-toggle" />
        <Link to={`/monitor/${id}`}>{ name }</Link>
      </td>
      <td>{ googleId }</td>
      <td>{ active }</td>
      <td>{ activatedAdGroups }</td>
      <td>{ noResultFound }</td>
      <td>{ errors }</td>
      <td>{ adGroupChangeTotal }</td>
    </tr>
  );
};

MonitorItem.propTypes = {
  name: PropTypes.string,
  googleId: PropTypes.string,
  active: PropTypes.bool,
  activatedAdGroups: PropTypes.number,
  noResultFound: PropTypes.number,
  errors: PropTypes.number,
  adGroupChangeTotal: PropTypes.number,
};

export default MonitorItem;