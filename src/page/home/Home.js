import React from 'react'
import PetCreator from '../../components/PetCreator';
import "./Home.scss";

function Home() {
    return (
        <div 
            className="container_home wrap"
        >
            <h1>SmallPets Creator</h1>
            <h2>Create your own pet</h2>
            <PetCreator />
            <p>asd</p>
        </div>
    )
}

export default Home
