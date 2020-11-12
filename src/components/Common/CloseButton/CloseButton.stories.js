/* eslint-disable*/
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CloseButton from './CloseButton';

const wrapperStyle = {
  backgroundColor: '#232323',
};

export default {
  title: 'Close Button',
  component: CloseButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <div  style={wrapperStyle}>
    <CloseButton
    onClick={action('CloseButton-click')}
  />
  </div>
);
