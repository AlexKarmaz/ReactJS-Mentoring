import React, { useCallback, useState } from 'react';
import StyledButton from '../StyledButton';
import LabeledInput from '../LabeledInput';
import LabeledMultiSelect from '../LabeledMultiSelect'
import './MovieForm.css';

const MovieForm = ({ onSubmit, movieData = {} }) => {
    const initialMovieData = {
        id:  movieData.id || '',
        title: movieData.title || '',
        release_date: movieData.release_date || '',
        poster_path: movieData.poster_path || '',
        genres: movieData.genres || [],
        overview: movieData.overview || '',
        runtime: movieData.runtime || 0,
    };

    const defaultGenres = [
        { label: 'Comedy', value: 'Comedy' },
        { label: 'Documentary', value: 'Documentary' },
        { label: 'Horror', value: 'Horror' },
        { label: 'Crime', value: 'Crime' },
    ];

    const [data, setData] = useState(initialMovieData);

    const onFormSubmit = useCallback(() => onSubmit(data), [data, onSubmit]);

    const onFormReset = useCallback(() => setData(initialMovieData), [
        initialMovieData,
        setData,
      ]);

    const onDataChange = useCallback(({ target: { name, value, type } }) => {
        setData(data => ({ ...data, [name]: type === 'number' ? +value : value }));
    }, [data]);

    const onGenreChange = useCallback ((items) => {
        const genres = items.map((item) => item.value);
        setData(data => ({ ...data, ['genres']: genres }));
    }, [data]);

    return (
        <form className='movieForm'>
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
                name='release_date'
                title='Release date'
                type='date'
                value={data.release_date}
                onChange={onDataChange}
            />
            <LabeledInput
                name='poster_path'
                title='Movie url'
                type='url'
                value={data.poster_path}
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
                <StyledButton text='Submit' size='medium' type='confirm' onClick={onFormSubmit} />
            </div>
        </form>
    );
};

export default MovieForm;
