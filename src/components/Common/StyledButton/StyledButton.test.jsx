import { shallow } from 'enzyme';
import React from 'react';
import StyledButton from './StyledButton';

describe('StyledButton', () => {
    it('should be rendered', () => {
        const onClick = jest.fn();

        const styledButton = shallow(<StyledButton onClick={onClick}/>);

        expect(styledButton).toMatchSnapshot();
    });

    it('should receive correct props', () => {
        const onClick = jest.fn();

        const styledButton = shallow(<StyledButton onClick={onClick} text={'test'} />);
        styledButton.simulate('click');

        expect(styledButton.find('button').hasClass('medium confirm')).toBeTruthy();
        expect(styledButton.find('button').text()).toEqual('test');
        expect(onClick).toBeCalled();
    });
});
