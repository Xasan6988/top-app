import React, { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './Courses.svg';
import ServicesIcon from './Services.svg';
import BooksIcon from './Books.svg';
import ProductsIcon from './Products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {

  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menuItem => (
          <div key={menuItem.route}>
            <a href={`/${menuItem.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menuItem.id === firstCategory
              })}>
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
            {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return(
      pages.map(page => (
        <a
          key={page.alias}
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false
          })}
        >
          {page.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
