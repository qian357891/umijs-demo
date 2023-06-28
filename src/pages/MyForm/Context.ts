import { defaultInformation, Information } from '@/pages/MyForm/types';
import { createContext } from 'react';

export const PreViewProps = createContext<Information>(defaultInformation);
export const PreViewPropsList = createContext<Information[]>([]);
