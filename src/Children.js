import React from 'react';

// UI component without state made by function
const Children = ({characters}) => {
    // const charactersList = characters.map(character => {
    //     return (
    //         <div className="character" key={character.id}>
    //             <div>Name: {character.name}</div>
    //             <div>Age: {character.age}</div>
    //             <div>Belt: {character.belt}</div>
    //         </div>
    //     )
    // });

    const charactersList = characters.map(character => {
        return character.age > 20 ? (
            <div className="character" key={character.id}>
                <div>Name: {character.name}</div>
                <div>Age: {character.age}</div>
                <div>Belt: {character.belt}</div>
            </div>
        ) : null;
    });

    return (
        <div className="characters-list">
            {charactersList}
        </div>
    )
};

export default Children;