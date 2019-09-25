import React from 'react';

const ColorPicker = (props) => (
  <div className='component'>
    {props.colors.map(color =>
      <button key={color}>{color}</button>
    )}
    ColorPicker
  </div>
);

export default ColorPicker;