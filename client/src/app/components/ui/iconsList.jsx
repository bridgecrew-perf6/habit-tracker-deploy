import React from 'react';
import { icons } from '../../utils/icons';
import Icon from '../common/icon';
const IconsList = () => {
  return (
    <div className="d-flex flex-wrap">
      {Object.keys(icons).map((icon) => (
        <Icon key={icons[icon].name} icon={icons[icon]} inList={true} />
      ))}
    </div>
  );
};

export default IconsList;
