export const getMovies = async function ({ sorter, filter = 'null', search, offset = 0}) {
    try {
        const params = {
            limit: 9,
            sortOrder: 'asc',
            searchBy: 'title',
            //search: search,
            //sortBy: sorter,
            //filter: filter,
            offset: offset
        };
        const response = await fetch('https://moviesapi-reactjs.herokuapp.com/movies?' + new URLSearchParams(params));
        //const response = await fetch('https://moviesapi-reactjs.herokuapp.com/movies?sortOrder=asc&searchBy=title&offset=0&limit=9');
        const data = await response.json();
        return data;
    } catch (e) {
        return console.log('Something went wrong');
    }
};

export const deleteMovie = async function (id) {
    try {
        const response = await fetch('https://moviesapi-reactjs.herokuapp.com/movies/' + id, {
            method: 'DELETE'
        });
        return response;
    } catch (e) {
        return console.log('Something went wrong');
    } 
};

export const editMovie = async function (movie) {
    try {
        const response = await fetch('https://moviesapi-reactjs.herokuapp.com/movies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(data.messages) : data;
    } catch (e) {
        return console.log('Something went wrong');
    } 
};

export const addMovie = async function (movie) {
    try {
        const response = await fetch('https://moviesapi-reactjs.herokuapp.com/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(data.messages) : data;
    } catch (e) {
        return console.log('Something went wrong');
    } 
};
