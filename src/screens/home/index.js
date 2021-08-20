import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { username } = useSelector((state) => state.user)
  return (
    <>
        <h1>Bienvenido! {username}</h1>
    </>
  );
};

export default Home;
