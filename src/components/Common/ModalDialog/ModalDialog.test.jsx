import { shallow, mount } from 'enzyme';
import React from 'react';
import ModalDialog from './ModalDialog';

describe('ModalDialog', () => {
    it('should be rendered correctly', () => {
        const onClose = jest.fn();

        const modalDialog = shallow(<ModalDialog dialogTitle={'test'} onDialogClose={onClose} />);

        expect(modalDialog.find('.modalDialog-title').text()).toEqual('test');
        expect(modalDialog).toMatchSnapshot();
    });

    it('close handler should be called', () => {
        const onClose = jest.fn();

        const modalDialog = mount(<ModalDialog dialogTitle={'test'} onDialogClose={onClose} />);
        modalDialog.find('.closeButton').simulate('click');

        expect(onClose).toBeCalled();
    });
});
