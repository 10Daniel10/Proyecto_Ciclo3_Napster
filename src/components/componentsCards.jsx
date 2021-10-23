import {Link} from 'react-router-dom'
import 'styles/style.css'

function CardLinks({nombre, imagen, link}) {
    return (
        <li className="breedCard">
            <Link to={link}>
                <div className="contImagen">
                    <img src={imagen} alt={nombre}/>
                </div>
            </Link>
            <span className="breedTitle">{nombre}</span>
        </li>
    );
}

export default CardLinks;