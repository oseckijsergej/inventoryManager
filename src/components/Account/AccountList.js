import React, {PropTypes} from 'react';
import AccountItem from './AccountItem';

const AccountList = ({ items }) => {
  return (
    <tbody>
      {items.map((item, i) =>
        <AccountItem key={i} {...item} />
      )}
    </tbody>
  );
};

AccountList.propTypes = {
  items: PropTypes.array.isRequired
};

export default AccountList;