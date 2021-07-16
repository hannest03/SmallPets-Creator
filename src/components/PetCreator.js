import React, {useState} from 'react'
import PetTexture from './PetTexture';

const pettypes = {
    "COMBAT": "Combat",
    "MINING": "Mining",
    "FARMING": "Farming",
    "FISHING": "Fishing",
    "FORAGING": "Foraging"
};

const particles = [
    "ARROW_SPELL_EMITTER",
    "BALLON_GAS_PARTICLE",
    "BASIC_BUBBLE_PARTICLE",
    "BASIC_CRIT_PARTICLE",
    "BASIC_FLAME_PARTICLE",
    "BASIC_PORTAL_PARTICLE",
    "BASIC_SMOKE_PARTICLE",
    "BLEACH",
    "BUBBLE_COLUMN_BUBBLE",
    "CAMPFIRE_SMOKE_PARTICLE",
    "CAULDRON_BUUBLE_PARTICLE",
    "DRAGON_BREATH_FIRE",
    "EGG_DESTROY_EMITTER",
    "END_CHEST",
    "EVOKER_SPELL",
    "EYE_OF_ENDER_BUBBLE_PARTICLE",
    "FALLING_DUST",
    "FISH_HOOK_PARTICLE",
    "GUARDIAN_ATTACK_PARTICLE",
    "HEART_PARTICLE",
    "HONEY_DRIP_PARTICLE",
    "LAVA_DRIP_PARTICLE",
    "LAVA_PARTICLE",
    "LLAMA_SPIT_SMOKE",
    "NOTE_PARTICLE",
    "RAIN_SPASH_PARTICLE",
    "REDSTONE_TORCH_DUST_PARTICLE",
    "SHULKER_BULLET",
    "SNOWFLAKE_PARTICLE",
    "SPLASH_SPELL_PARTICLE",
    "TOTEM_PARTICLE",
    "VILLAGER_ANGRY",
    "VILLAGER_HAPPY",
    "WATER_DRIP_PARTICLE",
    "WATER_SPLASH_PARTICLE"
];

function PetCreator() {

    const [namespace, setNamespace] = useState("");
    const [id, setId] = useState("");
    const [pettype, setPettype] = useState("");
    const [default_translation, setDefaultTranslation] = useState("");
    const [translation_key, setTranslationKey] = useState("");
    const [particle, setParticle] = useState("");
    const [texture, setTexture] = useState("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTNkNGExNTYwM2Y5NTFkZTJlMmFiODBlZWQxNmJiYjVhNTgyM2JmNGFjYjhjNDYzMzQyNWQ1NDIxMGNmMGFkNSJ9fX0=");

    function handleSubmit(event){
        event.preventDefault();
        console.log("Click!");
    }

    return (
        <form
            className="petcreator clearfix"
            onSubmit={handleSubmit}
            autoComplete="false"
        >
            <div
                className="left clearfix"
            >
                <input
                    required 
                    autoComplete="false"
                    type="text"
                    name="namespace"
                    value={namespace}
                    placeholder="Namespace"
                    onChange={
                        (e) => {
                            setNamespace(e.target.value);
                        }
                    }
                />
                <input
                    required 
                    autoComplete="false"
                    type="text"
                    name="id"
                    value={id}
                    placeholder="ID"
                    onChange={
                        (e) => {
                            setId(e.target.value);
                        }
                    }
                />
                <select
                    required 
                    value={pettype}
                    name="pettype"
                    onChange={
                        (e) => {
                            setPettype(e.target.value);
                        }
                    }
                >
                    {Object.keys(pettypes).map(function(pettype_id){
                        return <option key={pettype_id} value={pettype_id}>{pettypes[pettype_id]}</option>
                    })}
                </select>
                <input
                    required 
                    autoComplete="false"
                    type="text"
                    name="default_translation"
                    value={default_translation}
                    placeholder="Default translation"
                    onChange={
                        (e) => {
                            setDefaultTranslation(e.target.value);
                        }
                    }
                />
                <input 
                    autoComplete="false"
                    type="text"
                    name="translation_key"
                    value={translation_key}
                    placeholder="Translation key"
                    onChange={
                        (e) => {
                            setTranslationKey(e.target.value);
                        }
                    }
                />
                <select
                    required 
                    value={particle}
                    name="particle"
                    onChange={
                        (e) => {
                            setParticle(e.target.value);
                        }
                    }
                >
                    {particles.map(effect => {
                        return <option key={effect} value={effect}>{effect}</option>
                    })}
                </select>
            </div>
            <div
                className="right clearfix"
            >
                <PetTexture
                    textureValue={texture}
                />
            </div>
        </form>
    )
}

export default PetCreator
