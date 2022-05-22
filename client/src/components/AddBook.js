import React, {useState} from 'react';
import { useQuery, useMutation} from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';


const AddBook = () => {
    const [addBook, {dataM}] = useMutation(addBookMutation);
    const {loading, error, data} = useQuery(getAuthorsQuery);
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [author, setAuthor] = useState(null)
    
    function getAuthors(){
        if (loading) return <option>Loading...</option>
        if (data) return  data.authors.map(author => {
            return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
    }
    const submitForm = (e) => {
        e.preventDefault();
        addBook({
            variables:{
                name: name, 
                genre: genre, 
                authorId: author
            }, 
            refetchQueries: [
                getBooksQuery, 
                'books'
            ]
        });

       
    }
    return (
        <form id="add-book" onSubmit={submitForm}>

        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)}/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthor(e.target.value)}>
            {getAuthors()}
          </select>
        </div>

        <button>+</button>

      </form> 
    );
};

export default AddBook;