import React from 'react';

//interface- Typescript feature that 
//allows us to define the structure of an object




interface RecipeProps {
    title: string,
    des: string,
    steps: Array<string>
}




function Recipe({ title, des, steps }: RecipeProps) {

    const stepDisplay =
        steps.map(step => <li>{step}</li>);

    return (
        <section>
            <h2>{title}</h2>
            <div>{des}</div>
            <ul>
                {stepDisplay}
            </ul>
        </section>

    );

}


export default Recipe;