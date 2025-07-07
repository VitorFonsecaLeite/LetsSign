import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Table = ({ 
  headers, 
  data, 
  columnWidths = []
}) => {
  return (
    <div className='table-container'>
      <table className='data-table'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index}
                style={columnWidths[index] ? { width: columnWidths[index] } : {}}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-label={headers[cellIndex]}>
                  {typeof cell === 'string' || typeof cell === 'number' ? cell : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node
    ])
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.bool
      ])
    )
  ).isRequired,
  columnWidths: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  )
};

Table.defaultProps = {
  columnWidths: []
};

export default Table;