import React, { FC }  from 'react';
import { CatalogItem } from '../model/catalog-item';
import { CatalogListItem } from './CatalogListItem';

interface CatalogProps {
    items: CatalogItem[];
}
export const CatalogList: FC<CatalogProps> = (props) => {
    return <div className="row">
        <div className="row">
            { props.items.map(item => <CatalogListItem key={item.id} item={item} />) }
        </div>
    </div>
};