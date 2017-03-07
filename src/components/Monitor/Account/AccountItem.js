import React, {PropTypes} from 'react';

const AccountItem = (props) => {
  return (
    <tr className="footable-even">
      <td>
        <span className="footable-toggle" />Atlanta Luxury Motors
      </td>
      <td>used_Chevrolet</td>
      <td>Malibu</td>
      <td>PAUSED</td>
      <td>enabled</td>
      <td><a target="_blank" href="http://www.almnewnan.com/inventory.aspx?_search=Chevrolet+Malibu">Link</a></td>
      <td>Inventory Found</td>
      <td>200 OK</td>
    </tr>
  );
};

AccountItem.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default AccountItem;