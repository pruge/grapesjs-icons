import { AddComponentTypeOptions } from 'grapesjs';
import type { Plugin as Plugin_2 } from 'grapesjs';

declare type ComponentOptions = {
    type: string;
    name: string;
};

declare type ModalOptions = {
    title: string;
    collectionText: string;
    categoryText: string;
    searchText: string;
};

declare const plugin: Plugin_2<PluginOptions>;
export default plugin;

declare type PluginOptions = {
    search?: Partial<SearchOptions>;
    modal?: Partial<ModalOptions>;
    component?: Partial<ComponentOptions>;
} & Pick<AddComponentTypeOptions, 'block'> & Pick<AddComponentTypeOptions, 'model'>;

declare type SearchOptions = {
    query?: string;
    limit: number;
    start: number;
    total: number;
    prefix?: string;
    prefixes?: string;
    translate?: {
        from?: string;
        to?: string;
    };
    debounce: number;
    throttle: number;
};

export { }
