import React from 'react';
import { Button, Htag } from '@/components';

const Home = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>This is Home Page</Htag>
      <Button appearance='primary' arrow='right'>Push me</Button>
      <Button appearance='ghost' arrow='right'>And me</Button>
    </>
  );
};

export default Home;
