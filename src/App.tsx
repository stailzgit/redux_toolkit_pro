/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const {error, isLoading, users} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [ ])

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Идет загрузка...</h1>}
      {!isLoading && !error && JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
