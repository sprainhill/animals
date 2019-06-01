import React from 'react'
import Animal from './Animal'

const AnimalList = props => {
    console.log('AnimalList props', props);
    return(
        <div className="animal-list">
            {props.animals.map(animal => {
                return <Animal animal={animal} key={animal.id}  />
            })}
        </div>
    )

}

export default AnimalList;