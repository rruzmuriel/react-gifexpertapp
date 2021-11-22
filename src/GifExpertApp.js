import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);
    
    // const handelAdd = ()=> {
    //     setCategories([...categories, 'HunterXHunter']);
    // setCategories((cats)=>[...cats, 'HunterXHunter]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </>
    )
}





