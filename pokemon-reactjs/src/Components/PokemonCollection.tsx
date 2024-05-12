import React from 'react'
import { Pokemon, PokemonDetail } from '../interface'
import PokemonList from './PokemonList'
import { Detail } from '../App';
interface Props {
    pokemons: PokemonDetail[];
    detail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
};

const PokemonCollection: React.FC<Props> = (props) => {
    const { detail, setDetail, pokemons } = props;
    const selectPokemon = (id: number) => {
        if (!detail.isOpened) {
            setDetail({
                id: id,
                isOpened: true
            })
        }
    }
    return (

        <section className={detail.isOpened ? "collection-container-active" : "collection-container"}>
            {detail.isOpened ? (
                <div className='overlay'></div>
            ) : ('')}
            {pokemons.map((pokemon) => {
                return (
                    <div onClick={() => selectPokemon(pokemon.id)}>
                        <PokemonList
                            detail={detail}
                            setDetail={setDetail}
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.sprites.front_default}
                            abilities={pokemon.abilities}
                        />
                    </div>
                )
            })}
        </section>

    )
}

export default PokemonCollection
