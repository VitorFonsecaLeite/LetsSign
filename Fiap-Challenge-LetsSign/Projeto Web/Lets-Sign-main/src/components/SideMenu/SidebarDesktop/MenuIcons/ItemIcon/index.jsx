import React from 'react';
import PropTypes from 'prop-types';
import '../../../index.css';

const ItemIcon = ({ Icon }) => (
  <li className="pad-rem sidemenu-box-icon justify-center">
    <div className="icon-style text-white">
      <Icon />
    </div>
  </li>
);

ItemIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
};

export default ItemIcon;
