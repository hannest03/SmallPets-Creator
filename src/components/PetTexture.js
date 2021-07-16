import React from 'react'

function PetTexture(props) {
    
    let textureLink = "";

    if(props.textureValue){
        const textureJSONString = Buffer.from(props.textureValue, "base64").toString();
        const textureJSON = JSON.parse(textureJSONString);
        textureLink = textureJSON['textures']['SKIN']['url'];
    }

    console.log(textureLink);

    return (
        <div>
            
        </div>
    )
}

export default PetTexture
