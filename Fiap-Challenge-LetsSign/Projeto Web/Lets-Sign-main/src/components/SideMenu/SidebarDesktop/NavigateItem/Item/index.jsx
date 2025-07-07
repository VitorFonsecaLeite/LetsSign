import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../index.css';

const Item = ({ path, label }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button onClick={() => navigate(path)}
      className={`pad-rem sidemenu-box-text justify-start ${location.pathname === path ? 'selected-row' : ''}`}>
      <div type="button">
        <div className="paths">{label}</div>
      </div>
    </button>
  );
};

Item.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Item;
