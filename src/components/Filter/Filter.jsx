import React, {useState, useCallback} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import useToggle from '../../hooks/useToggle.jsx'
import Menu from '../Common/Menu';
import {movieActions} from '../../store/actions';
import './Filter.css';

const Filter = ({genres, setGenreForFilter, genreForFilter}) => {
    const [isOpened, toggleIsOpened] = useToggle();

    const modifiedGenres = genres.map((genre) => {
        return {
            id: genre,
            title: genre,
            onClick: () => {
                setGenreForFilter(genre);
                toggleIsOpened();
            },
        };
    });

    const genresList = (
        <ul className='filterList'>
            {genres.map((genre) => (
                <li
                    key={genre}
                    className={`filterListItem ${
                        genre == genreForFilter ? 'active' : ''
                    }`}
                    onClick={() => setGenreForFilter(genre)}
                >
                    {genre}
                </li>
            ))}
        </ul>
    );

    const genresMenu = (
        <div className='filter'>
            <div className='filterLabel'>Filter by genre</div>
            <div className='filterMenu'>{genreForFilter}</div>
            <button className='caretButton' onClick={() => toggleIsOpened()}>
                <span className={isOpened ? 'caret-up' : 'caret-down'}></span>
            </button>
            {isOpened && <Menu menuItems={modifiedGenres} />}
        </div>
    );

    return (
        <>
            {genres.length <= 6 && genresList}
            {genres.length > 6 && genresMenu}
        </>
    );
};

const mapStateToProps = (state) => ({
    //genres: state.moviesData.genres.slice(0, 5),//to test genresList
    genres: state.moviesData.genres,
    genreForFilter: state.moviesData.genreForFilter
})
  
const mapDispatchToProps = (dispatch) => ({
    setGenreForFilter: (genre) => dispatch(movieActions.setGenreForFilter(genre))
})

Filter.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
