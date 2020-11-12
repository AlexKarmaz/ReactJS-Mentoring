/* eslint-disable*/
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ModalDialog from './ModalDialog';

const wrapperStyle = {
    backgroundColor: '#232323',
};

export default {
    title: 'Modal Dialog',
    component: ModalDialog,
    decorators: [withKnobs],
};

export const Default = () => (
    <div style={wrapperStyle}>
        <ModalDialog onDialogClose={action('ModalDialog-close')} dialogTitle={text('dialogTitle', 'Modal Dialog text')}>
            <div>Dialog body</div>
        </ModalDialog>
    </div>
);
