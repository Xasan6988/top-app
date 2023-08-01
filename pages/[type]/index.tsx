import { firstLevelMenu } from '@/helpers/helpers';
import { MenuItem } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';


const Type: React.FC<TypeProps> = ({ firstCategory }: TypeProps): JSX.Element => {

  return (
    <>
      Type: {firstCategory}
    </>
  );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: firstLevelMenu.map(m => '/' + m.route),
    fallback: true
  };
};


export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    return {
      props: {
        menu: [...menu],
        firstCategory: firstCategoryItem.id
      }
    };

  } catch (e) {
    return {
      notFound: true
    };
  }
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
