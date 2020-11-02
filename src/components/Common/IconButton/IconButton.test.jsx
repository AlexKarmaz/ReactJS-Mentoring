import { render, shallow } from 'enzyme';
import React from 'react';
import IconButton from './IconButton';

describe('IconButton', () => {
    it('should be rendered', () => {
        const onClick = jest.fn();

        const iconButton = render(<IconButton onClick={onClick} />);

        expect(iconButton).toMatchSnapshot();
    });

    it('should receive correct props', () => {
        const onClick = jest.fn();
        const iconSrc =  '/icon.png';

        const iconButton = shallow(<IconButton onClick={onClick} imgSrc={iconSrc} />);
        iconButton.simulate('click');

        expect(iconButton.find('button').hasClass('iconButton medium')).toBeTruthy();
        expect(iconButton.find('img').prop('src')).toEqual(iconSrc);
        expect(onClick).toBeCalled();
    });
});
