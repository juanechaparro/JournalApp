import React from 'react'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    const  dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm(
        {
            name:'juan',
            email:'juan@gmail.com',
            password:'123456',
            password2:'123456'
        }
    );
    const{name, email,password,password2} = formValues;
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log( name,
        email,
        password,
        password2);
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }

        // 
    }
    const isFormValid = ()=>{
        if(name.length === 0){
            // console.log('name required')
            dispatch(setError('Name is required'));
            return false
         
        }
        else if(!validator.isEmail(email)){
            
            dispatch(setError('email no valido'))
            return false;
        }
        else if (password2 !== password || password.length < 5){
            
            dispatch(setError("password should  match ans more than 6 charcters"));
            return false;
        }
        dispatch(removeError());
        return true
    }
    return (
        <div>
        <h3 className ="auth__title">Register</h3>
        <form onSubmit={handleRegister}
         className = "animate__animated animate__fadeIn animate__faster">
            {
                msgError &&
                <div className ="auth__alert-error">
                {msgError}
            </div>
            }
        <input type="text"
            placeholder = "Name"
            name= "name"
            className = "auth__input" 
            value={name}
            onChange= {handleInputChange}/>
            <input type="
            "
            placeholder = "Email"
            name= "email"
            className = "auth__input"
            value={email}
            onChange= {handleInputChange} />
            <input type="password"
            placeholder = "Password"
            name= "password"
            className = "auth__input" 
            value={password}
            onChange= {handleInputChange}/>

            <input type="password"
            placeholder = "Confirm password"
            name= "password2"
            className = "auth__input" 
            value={password2}
            onChange= {handleInputChange}/>

            <button
            className = "btn btn-primary btn-block mb-5"

            type = "submit">
                Register
            </button>
          
           
            <Link to = "/auth/login"
            className = 'link mt-5'>
                Alredy registered?
            </Link>
        </form>
     </div>
    )
}
