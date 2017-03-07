import React, {PropTypes} from 'react';

const IndexTemplatesItem = ({ item }) => {
  return (
    <tr className="footable-even">
      <td>
        <span className="footable-toggle" />
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
        <a href="index.php?actn=edit&id=264">edit</a>
      </td>
      <td>
        <a href="index.php?actn=createcsv&id=264">generate structure</a></td>
      <td>
        <a href="index.php?actn=copy&id=264">copy</a></td>
      <td>
        <a href="index.php?actn=del&id=264">delete</a></td>
    </tr>
  );
};

IndexTemplatesItem.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default IndexTemplatesItem;