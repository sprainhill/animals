import React from 'react';
import AnimalList from './AnimalList';

const Animal = props => {
    return(
        <div>
            <p>Name: <span>{props.animal.name}</span></p>
            <p>Species: <span>{props.animal.species}</span></p>
        </div>
    );
}

export default Animal;