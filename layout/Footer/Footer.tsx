import React from 'react';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Layout.module.css';

export const Footer = ({...props}: FooterProps): JSX.Element => {
  return(
    <div {...props}>
      Footer
    </div>
  );
};
