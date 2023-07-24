import React, { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

const Home: React.FC<HomeProps> = ({menu}: HomeProps): JSX.Element => {

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
      <ul>
        {menu.map(e => (<li key={e._id.secondCategory}>{e._id.secondCategory}</li>))}
      </ul>
    </>
  );
};

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const firstCategory = 0;

  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
