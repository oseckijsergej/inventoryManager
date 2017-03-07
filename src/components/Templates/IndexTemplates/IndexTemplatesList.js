import React, {PropTypes} from 'react';
import IndexTemplatesItem from './IndexTemplatesItem';

const IndexTemplatesList = ({ items }) => {
  return (
    <tbody>
      {items.map((item, i) =>
        <IndexTemplatesItem
          key={i}
          {...item}
        />
      )}
    </tbody>
  );
};

IndexTemplatesList.propTypes = {
  items: PropTypes.array.isRequired
};

export default IndexTemplatesList;