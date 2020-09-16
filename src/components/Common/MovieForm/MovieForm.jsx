import React, { useCallback, useState } from 'react';
import StyledButton from '../StyledButton';
import LabeledInput from '../LabeledInput';
import LabeledMultiSelect from '../LabeledMultiSelect'
import './MovieForm.css';

const MovieForm = ({ onSubmit, onReset, movieData = {} }) => {
    const initialMovieData = {
        id:  movieData.id || '',
        title: movieData.title || '',
        releaseDate: movieData.releaseDate || '',
        url: movieData.url || '',
        genres: movieData.genres || [],
        overview: movieData.overview || '',
        runtime: movieData.runtime || '',
    };

    const defaultGenres = [
        { label: 'Comedy', value: 'Comedy' },
        { label: 'Documentary', value: 'Documentary' },
        { label: 'Horror', value: 'Horror' },
        { label: 'Crime', value: 'Crime' },
    ];

    const [data, setData] = useState(initialMovieData);

    const onFormSubmit = useCallback(() => onSubmit(), [onSubmit]);
    const onFormReset = useCallback(() => onReset(), [onReset]);

    const onDataChange = useCallback(({ target: { name, value } }) => {
        setData(data => ({ ...data, [name]: value }));
    }, [data]);

    const onGenreChange = useCallback ((items) => {
        const genres = items.map((item) => item.value);
        setData(data => ({ ...data, ['genres']: genres }));
    }, [data]);

    return (
        <form className='movieForm' onSubmit={onFormSubmit}>
            {movieData.id && (<LabeledInput
                name='id'
                title='Movie id'
                value={data.id}
                readOnly={true}
            />)}
            <LabeledInput
                name='title'
                title='Title'
                value={data.title}
                onChange={onDataChange}
                placeholder='Title here'
            />
            <LabeledInput
                name='releaseDate'
                title='Release date'
                type='date'
                value={data.releaseDate}
                onChange={onDataChange}
            />
            <LabeledInput
                name='url'
                title='Movie url'
                type='url'
                value={data.url}
                onChange={onDataChange}
                placeholder='Movie URL here'
            />
            <LabeledMultiSelect
                title="Genres"
                options={defaultGenres}
                onChange={onGenreChange}
                selected={data.genres}
                overrideStrings={
                    {'selectSomeItems': 'Select Genre',}
                }
            />
            <LabeledInput
                name='overview'
                title='Overview'
                value={data.overview}
                onChange={onDataChange}
                placeholder='Overview here'
            />
            <LabeledInput
                name='runtime'
                title='Runtime'
                type='number'
                value={data.runtime}
                onChange={onDataChange}
                placeholder='Runtime here'
            />
            <div className='movieForm-footer'>
                <StyledButton
                    text='Reset'
                    size='medium'
                    type='reset'
                    onClick={onFormReset}
                />
                <StyledButton text='Submit' size='medium' type='confirm' />
            </div>
        </form>
    );
};

export default MovieForm;
