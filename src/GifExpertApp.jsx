import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        let UpLow = false;

        categories.forEach( category => { 
            console.log(category);
            if ( category.toLowerCase() === newCategory.toLowerCase() ) UpLow = true;
        });

        if( UpLow ) return;

        if( categories.includes( newCategory ) ) return;

        setCategories([ ...categories, newCategory ]);
        //setCategories( cat => [ ...cat, 'Valorant' ]);

    }

    return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory  
            onNewCategory= { (value) => onAddCategory(value) }
        />

        { 
            categories.map( (category) =>  (
                <GifGrid 
                    key={ category } 
                    category={ category }/>
                )
            ) 
        } 
    </>
    )
}

