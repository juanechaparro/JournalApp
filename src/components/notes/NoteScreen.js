import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const {active: note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset ] = useForm(note);
    const {body, title, id} = formValues;
    const activeId = useRef(note.id);
    const dispatch = useDispatch();
    useEffect(() => {
      if( note.id !== activeId.current){
          reset(note);
          activeId.current = note.id;
      }
    
      
    }, [note, reset]);

    useEffect(() => {
      dispatch(activeNote(formValues.id, {...formValues}) )
    
    }, [formValues, dispatch]);
    const handleDelete = ()=>{

        dispatch(startDeleting(id));
    }
    
    return (
        <div className = "notes__main-content">
         <NotesAppBar/>  
         <div className ="notes__content">
             <input type="text"
             placeholder="  some Awesome title"
             className= "notes__title-input"
             autoComplete="off"
             value ={title}
             name="title"
             onChange ={handleInputChange}
             />
        <textarea
        placeholder ="What happend today"
        className="notes__textarea"
        value ={body}
        onChange ={handleInputChange}
        name= "body"
        >
        </textarea>
        
        {
            (note.url) &&
        <div className="notes__image">
            <img src={note.url}
            alt="casa" />
        </div>
        }
         </div>
         <button className='btn btn-danger' onClick={handleDelete}>
            Delete
         </button>
        </div>
    )
}
