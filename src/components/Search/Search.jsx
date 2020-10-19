import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux'
import {commonActions} from '../../store/actions'
import './Search.css';

const Search = ({onSearch}) => {
    const [searchStr, setSearchStr] = useState('');

    const onSearchHandler = useCallback(() => onSearch(searchStr), [
        onSearch,
        searchStr
    ]);

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
        <div className='searchWrapper'>
            <h1 className='searchTitle'>Find your movie</h1>
            <div className='search'>
                <input
                    className='searchInput'
                    type='text'
                    placeholder='What do you want to watch?'
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <button className='searchButton' onClick={onSearchHandler}>Search</button>
            </div>
        </div>
    )
};
 
const mapDispatchToProps = (dispatch) => ({
    onSearch: (searchString) => dispatch(commonActions.search(searchString))
})
  
export default connect(null, mapDispatchToProps)(Search);
