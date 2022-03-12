import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { Routes, Route } from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, async(user)=>{
      // el signo de interrogacion evalua si es un nullo un undefiend para no ejecutar
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));

      }else{
        setIsLoggedIn(false);
      }

      setChecking(false);
    } );
  },[dispatch, setChecking, setIsLoggedIn])
  if(checking){
    return(
      <h1>Wait...</h1>
    )
  }
    return (
        <Routes>
        <Route path="/auth/*" element={
        <PublicRoute isLoggedIn={isLoggedIn}>
          <AuthRouter />
        </PublicRoute>
        }>
        </Route>
        <Route path="/" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
        <JournalScreen/>
        </PrivateRoute>}/>
      
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    )
}
