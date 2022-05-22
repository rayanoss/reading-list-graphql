import React from 'react';
import { useQuery} from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import { useState } from 'react';


const BookList = () => {
    const [selected, setSelected] = useState(null)
    const {loading, error, data} = useQuery(getBooksQuery);
   
    function getBooks(){
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error! {error.message}</p>
        if (data) return  <ul id='book-list'>
        {data.books.map(book => <li key={book.id} onClick={() => setSelected(book.id)}>{book.name}</li>)}
    </ul>
    }
   
  
    return (
        <div>
           {getBooks()}
           <BookDetails bookId={selected}/>
        </div>
    );
};

export default BookList;