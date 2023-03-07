import { Dispatch, SetStateAction } from 'react';
import { PageId } from '.';

export interface ITab {
    id: PageId,
    active?: boolean,
    text: string,
}

export interface ITabs {
    tabs: ITab[],
    active: string,
    switchTab: Dispatch<SetStateAction<PageId>>,
}

export interface IPage {
    active: PageId,
}