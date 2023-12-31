import React, { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {

  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(menuItem => {
      if (menuItem._id.secondCategory === secondCategory) {
        menuItem.isOpened = !menuItem.isOpened;
      }

      return menuItem;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menuItem => (
          <div key={menuItem.route}>
            <Link href={`/${menuItem.route}`} legacyBehavior>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id === firstCategory
                })}>
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </a>
            </Link>
            {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
        <Link
          href={`/${route}/${page.alias}`} legacyBehavior
          key={page.alias}
        >
          <a className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
          })}
          >
            {page.category}
          </a>
        </Link>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
