import { HhData } from '@/interfaces/page.interface';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, HhData {
  color?: 'white' | 'blur'
  children?: ReactNode
}
