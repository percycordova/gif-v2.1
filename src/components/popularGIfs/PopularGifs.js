import React from 'react'
import { Link } from 'wouter';
import { removeAccents, replaceHyphens } from '../../services/validations';


const PopularGifs = ({ popularGifs }) => {



    return (
        <ul className="links">
            {
                popularGifs.map(gif => {
                    return (
                        <li key={gif}>
                            <Link to={encodeURI(`/search/${replaceHyphens(removeAccents(gif))}`)} >
                                {gif}
                            </Link>
                        </li>
                    )
                })
            }

            {/* <a href="facebook">Facebook</a> al usar href me refresca toda la pagina, en vez uso Link y el atributo to*/}
        </ul>
    )
}

export default PopularGifs;
