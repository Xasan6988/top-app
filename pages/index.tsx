import React, { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '@/components';

const Home = (): JSX.Element => {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>This is Home Page</Htag>
      <Button appearance='primary' arrow='right'>Push me</Button>
      <Button appearance='ghost' arrow='right'>And me</Button>

      <Ptag fontSize='s'>Some text for example</Ptag>

      <Tag size='m' color='ghost'>Some tag</Tag>
      <Tag size='s' color='red'>Some tag</Tag>
      <Tag size='s' color="green">Some tag</Tag>
      <Tag size='m' color="primary">Some tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
};

export default Home;
