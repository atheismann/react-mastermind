import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
  <div className='component'>
    {props.colors.map((color, idx) =>
      <button
        key={color}
        className={styles.button}
        style={{
          backgroundColor: props.selColorIdx === idx ? 'white' : color,
          borderColor: color
        }}></button>
    )}
    ColorPicker
  </div>
);

export default ColorPicker;