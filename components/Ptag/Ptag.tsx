import React from 'react';
import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({children, fontSize = 'm', className, ...props}: PtagProps): JSX.Element => {
  return(
    <p
      className={cn(styles.p, className, {
        [styles.s]: fontSize === 's',
        [styles.m]: fontSize === 'm',
        [styles.l]: fontSize === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
