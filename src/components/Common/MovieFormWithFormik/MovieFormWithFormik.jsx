import React, { useCallback } from 'react';
import StyledButton from '../StyledButton';
import LabeledInput from '../LabeledInput';
import LabeledMultiSelect from '../LabeledMultiSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './MovieFormWithFormik.css';

const MovieFormWithFormik = ({ onSubmit, movieData = {}, genres }) => {
    const onFormSubmit = useCallback((data) => onSubmit(data), [onSubmit]);

    const formik = useFormik({
        initialValues: movieData,
        validationSchema: Yup.object({
          title: Yup.string().required('Title is required'),
          release_date: Yup.string()
            .required('Release date is required'),
          poster_path: Yup.string().url('Poster should be a valid url').required('Poster is required'),
          genres: Yup.array().min(1).required('At least 1 genre must be selected'),
          overview: Yup.string().required('Movie description is required'),
          runtime: Yup.number()
            .min(0, 'Runtime should be more then 0' )
            .required('Runtime is required'),
        }),
        onSubmit: onFormSubmit,
    });

    const modifiedGenres = genres.map((genre) => ({label: genre, value: genre}));

    const onGenreChange = useCallback ((items) => {
        const genres = items.map((item) => item.value);
        formik.setFieldValue('genres', genres, true);
    }, [formik]);

    const getErrorMessageForField = useCallback(
        (fieldName) => {
          if (formik.touched[fieldName] && formik.errors[fieldName]) {
            return formik.errors[fieldName];
          }
          return '';
        },
        [formik],
    );

    return (
        <form className='movieForm' onSubmit={formik.handleSubmit}>
            {formik.values.id && (<LabeledInput
                name='id'
                title='Movie id'
                value={formik.values.id}
                readOnly={true}
            />)}
            <LabeledInput
                name='title'
                title='Title'
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder='Title here'
                onBlur={formik.handleBlur}
                validationError={getErrorMessageForField('title')}
            />
            <LabeledInput
                name='release_date'
                title='Release date'
                type='date'
                value={formik.values.release_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                validationError={getErrorMessageForField('release_date')}
            />
            <LabeledInput
                name='poster_path'
                title='Movie url'
                type='url'
                value={formik.values.poster_path}
                onChange={formik.handleChange}
                placeholder='Movie URL here'
                onBlur={formik.handleBlur}
                validationError={getErrorMessageForField('poster_path')}
            />
            <LabeledMultiSelect
                title="Genres"
                options={modifiedGenres}
                onChange={onGenreChange}
                selected={formik.values.genres}
                error={getErrorMessageForField('genres')}
                overrideStrings={
                    {'selectSomeItems': 'Select Genre',}
                }
            />
            <LabeledInput
                name='overview'
                title='Overview'
                value={formik.values.overview}
                onChange={formik.handleChange}
                placeholder='Overview here'
                onBlur={formik.handleBlur}
                validationError={getErrorMessageForField('overview')}
            />
            <LabeledInput
                name='runtime'
                title='Runtime'
                type='number'
                value={formik.values.runtime}
                onChange={formik.handleChange}
                placeholder='Runtime here'
                onBlur={formik.handleBlur}
                validationError={getErrorMessageForField('runtime')}
            />
            <div className='movieForm-footer'>
                <StyledButton
                    text='Reset'
                    size='medium'
                    type='reset'
                    onClick={formik.resetForm}
                />
                <StyledButton text='Submit' size='medium' type='confirm' onClick={formik.handleSubmit} />
            </div>
        </form>
    );
};

export default MovieFormWithFormik;
