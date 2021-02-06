import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

function App() {
    const mashedPotatoesRecipe = {
        title: "Stateful Mashed Potatoes",
        des: "They are potatoes boiled & mashed",
        steps: [
            'Cut Potatoes',
            'Boil them',
            'Mash them'
        ]
    };

    const [recipe, setRecipe] = useState(mashedPotatoesRecipe);
    // Setting up state
    // Loading data
    return (
        //<RecipeList />
        <Recipe {...recipe} />
    )
}

export default App;