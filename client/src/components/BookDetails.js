import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';
const BookDetails = ({bookId}) => {
    
    function displayBookDetails(){
        if (loading) return <p>Loading....</p>;

	    if (error) return <p>Ops! Something went wrong</p>;

        if(data.book){
            return (
                <div>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className='other-books'>
                        {data.book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        }
    }
    const {loading, error, data} = useQuery(getBookQuery, {
        variables: {id: bookId}
    });
    return (
        <div id='book-details'>
            <p>Output book details here</p>
            {displayBookDetails()}
        </div>
    );
};

export default BookDetails;