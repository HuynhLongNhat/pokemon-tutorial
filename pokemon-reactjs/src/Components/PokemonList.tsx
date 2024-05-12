import React, { useEffect, useState } from 'react'
import "./pokemon.scss"
import { Detail } from '../App';
interface Props {
    abilities: {
        name: string;
        ability: string;
    }[] | undefined;
    name: string;
    id: number;
    image: string;
    detail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonList: React.FC<Props> = (props) => {
    const { name, id, image, abilities, detail, setDetail } = props;
    const [isSelected, setSelected] = useState(false);
    useEffect(() => {
        setSelected(id === detail?.id)
    }, [detail])

    const closeDetail = () => {
        setDetail({
            id: 0,
            isOpened: false
        })
    }
    return (
        <div className=''>
            {isSelected ?
                (<>
                    <div className="pokemon-list-detailed">
                        <div className="detail-container">
                            <div className="detail-close" onClick={() => closeDetail()}>X</div>
                            <div className="detail-info">
                                <img src={image} alt="pokemon" className='detail-img'></img>
                                <p className="detail-name">{name}</p>
                            </div>
                            <div className="detail-skill">
                                <p className="detail-ability">Abilities :</p>
                                {abilities?.map((ab: any) => {
                                    return (
                                        <div> {ab.ability.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>) :
                (<section className="pokemon-list-container">
                    <p className="pokemon-name">{name}</p>
                    <img src={image} alt='pokemon' />

                </section>)}

        </div>
    )
}

export default PokemonList
