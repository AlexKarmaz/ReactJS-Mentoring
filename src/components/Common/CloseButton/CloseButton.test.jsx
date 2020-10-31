import { shallow } from 'enzyme';
import React from 'react';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
    it('should be rendered', () => {
        const onClose = jest.fn();

        const closeButton = shallow(<CloseButton onClick={onClose} size='small' />);
        closeButton.simulate('click');

        expect(closeButton.find('button').hasClass('closeButton small')).toBeTruthy();
        expect(onClose).toBeCalled();
        expect(closeButton).toMatchSnapshot();
    });
});
