/* eslint-disable*/
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import StyledButton from './StyledButton';

const wrapperStyle = {
  backgroundColor: '#232323',
};

export default {
  title: 'Styled Button',
  component: StyledButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <div  style={wrapperStyle}>
    <StyledButton
      onClick={action('StyledButton-click')}
      text={text("Text","Styled button")}

    />
  </div>
);

export const Reset = () => (
  <div  style={wrapperStyle}>
    <StyledButton
      onClick={action('StyledButton-click')}
      text={text("Text","Styled button")}
      type="reset"
    />
  </div>
);

export const Action = () => (
  <div  style={wrapperStyle}>
    <StyledButton
      onClick={action('StyledButton-click')}
      text={text("Text","Styled button")}
      type="action"
    />
  </div>
);

