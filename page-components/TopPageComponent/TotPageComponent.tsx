import React from 'react';
import { TopPageComponentProps } from './TotPageComponent.props';
import styles from './TotPageComponent.module.css';
import { Htag, Tag } from '@/components';
import { HhData } from '@/components/HhData/HhData';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const TopPageComponent: React.FC<TopPageComponentProps> = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products.length && <Tag color='gray' size='m'>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
        {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh}/>}
    </div>
  );
};
