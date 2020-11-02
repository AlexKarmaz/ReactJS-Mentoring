import { shallow } from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
    it('should be rendered', () => {
        const logo = shallow(<Logo />);

        expect(logo.find('.logo').text()).toEqual('netflixroulette');
        expect(logo).toMatchSnapshot();
    });
});
