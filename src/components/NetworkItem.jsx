import React from 'react'

const NetworkItem = ({ network }) => {
  return (
    <li className="NetworksP__item">
      <a href={'https://www.' + network + '.com'} target="_blank">
        <img
          src={`/images/${network}.png`}
          alt={network}
          className="NetworksP__image"
          />
      </a>
    </li>
  );
};

export default NetworkItem;
