import React from 'react';
import { render, fireEvent, waitFor, cleanup, screen } from '@testing-library/react';
import MovieFormWithFormik from './MovieFormWithFormik';

describe('MovieFormWithFormik', () => {
    beforeEach(async () => {
        jest.resetAllMocks();
    });

    it('should be rendered correctly', () => {
        const onSubmit = jest.fn();
        const form = render(
            <MovieFormWithFormik
                onSubmit={onSubmit}
                genres={['Comedy', 'Horror']}
            />
        );

        expect(form).toMatchSnapshot();
    });

    it('onSubmit should not be called if fields are empty', async () => {
        const onSubmit = jest.fn();

        const form = render(
            <MovieFormWithFormik
                onSubmit={onSubmit}
                genres={['Comedy', 'Horror']}
            />
        );

        fireEvent.click(screen.getByText('Submit'));
        await waitFor(() => {
            expect(onSubmit).not.toHaveBeenCalled();
        });
    });

    it('errors should be displayed if all fields are empty and onSubmit is called', async () => {
        const onSubmit = jest.fn();

        const form = render(
            <MovieFormWithFormik
                onSubmit={onSubmit}
                genres={['Comedy', 'Horror']}
            />
        );

        expect(
            form.container.querySelectorAll('p.labeledInput-error').length
        ).toEqual(0);

        fireEvent.blur(screen.getByPlaceholderText('Title here'));
        fireEvent.blur(screen.getByPlaceholderText('Movie URL here'));
        fireEvent.blur(screen.getByPlaceholderText('Overview here'));

        await waitFor(() => {
            expect(
                form.container.querySelectorAll('p.labeledInput-error').length
            ).toEqual(3);
        });

        expect(form).toMatchSnapshot();
    });

    it('onSubmit should be called if all fields are populated', async () => {
        const onSubmit = jest.fn();
        const initialState = {
            id:'1',
            title:'test',
            release_date:'2020-10-30',
            poster_path:'https://test.com',
            genres:['Comedy'],
            overview:'test',
            runtime:100,
        };
        const form = render(
            <MovieFormWithFormik
                movieData={initialState}
                onSubmit={onSubmit}
                genres={['Comedy', 'Horror']}
            />
        );

        fireEvent.click(screen.getByText('Submit'));

        await waitFor(() => {
            expect(
                form.container.querySelectorAll('p.labeled-input__error').length
            ).toEqual(0);
        });
        expect(
            form.container.querySelectorAll('.genres__error').length
        ).toEqual(0);

        expect(onSubmit).toHaveBeenCalled();
        expect(form).toMatchSnapshot();
    });
});
