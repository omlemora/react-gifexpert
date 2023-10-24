import { useState } from 'react'
import AddCategory from './components/AddCategory';
import Gifgrid from './components/Gifgrid';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) => (
                    <Gifgrid
                        key={category}
                        category={category} />
                ))
            }
        </>

    )
};

export default GifExpertApp