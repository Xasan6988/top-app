import React from 'react';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { Ptag } from '@/components';
import {format} from 'date-fns';
import styles from './Footer.module.css';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return(
    <footer
      className={cn(className, styles.footer)}
      {...props}
    >
      <Ptag fontSize='m' className={styles.copywright}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </Ptag>
      <a href="#" target='_blank'>Пользовательское соглашение</a>
      <a href="#" target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
};
