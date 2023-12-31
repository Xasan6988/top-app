import React from 'react';
import { withLayout } from '@/layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/page-components/TopPageComponent/TotPageComponent';

const TopPage: React.FC<TopPageProps> = ({ firstCategory, page, products }: TopPageProps): JSX.Element => {
  return <TopPageComponent
    firstCategory={firstCategory}
    page={page}
    products={products}
  />;
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {

  let paths: string[] = [];

  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: menuItem.id
    });

    paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${menuItem.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true
  };
};


export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

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

    if (!menu.length) {
      return {
        notFound: true
      };
    }

    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10
    });


    return {
      props: {
        menu: [...menu],
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch (e: unknown) {
    return {
      notFound: true
    };
  }

};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}
