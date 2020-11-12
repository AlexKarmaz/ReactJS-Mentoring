import React, { useCallback, useState, useMemo, useEffect } from 'react';
import StyledButton from '../Common/StyledButton';
import Logo from '../Logo';
import { connect } from 'react-redux';
import {commonActions} from '../../store/actions';
import { useHistory, useParams, useLocation } from 'react-router';
import './Search.css';

const Search = ({onSearch, onAddMovie}) => {
    const history = useHistory();
    const location = useLocation();
    const { searchQuery } = useParams();

    const initialSearchStr = useMemo(() => {    
        return searchQuery ? searchQuery : '';
    }, [searchQuery]);

    useEffect(() => {
        const searchString = searchQuery ? searchQuery : '';

        if (location.pathname !== '/'){
            onSearch(searchString);
        }
    },[onSearch, searchQuery, location]);

    const [searchStr, setSearchStr] = useState(initialSearchStr);

    const onSearchHandler = useCallback(() => {
        history.push(`/search/${searchStr}`);
    }, [searchStr]);

    const onChange = useCallback((e) => setSearchStr(e.target.value), []);
    
    const handleKeyDown = useCallback(
        (event) => {
          if (event.key === 'Enter') {
            onSearchHandler();
          }
        },
        [onSearchHandler],
    );

    return (
        <>
            <div className='headerWrapper'>
                <Logo />
                <StyledButton
                    text='+ Add movie'
                    size='medium'
                    type='action'
                    onClick={onAddMovie}
                />
            </div>
            <div className='searchWrapper'>
                <h1 className='searchTitle'>Find your movie</h1>
                <div className='search'>
                    <input
                        className='searchInput'
                        aria-label="Search"
                        type='text'
                        placeholder='What do you want to watch?'
                        value={searchStr}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className='searchButton' onClick={onSearchHandler}>Search</button>
                </div>
            </div>
        </>
    )
};
 
const mapDispatchToProps = (dispatch) => ({
    onSearch: (searchString) => dispatch(commonActions.search(searchString)),
    onAddMovie: () => dispatch(commonActions.openAddMovieDialog()),
})
  
export default connect(null, mapDispatchToProps)(Search);
