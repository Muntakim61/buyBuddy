import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth=getAuth();
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

 const signUpWithGmail=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
 }

 const login=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 }

 const logout=()=>{
  return signOut(auth);
 }

 useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,currentuser=>{
    setUser(currentuser);
    setLoading(false);
  });
  return()=>{
    return unsubscribe()
  }
 })


  const authInfo={
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider