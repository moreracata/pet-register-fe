import { Link } from "react-router-dom";
import IndexOption from './IndexOption';
import cat from '../img/gato.png';
import collar from '../img/collar.png';
import rascador from '../img/rascador.png';
import huella from '../img/huella.png';

import { landingOptionDTO } from "./pet.model";


export default function IndexPets(){
    const options: landingOptionDTO[] = [
        { id:1, image: cat, tag: 'NEW PET', url: '/newpet' }, 
        { id:1, image: huella, tag: 'NEW OWNER' }, 
        { id:2,image: collar, tag: 'OWNER DETAILS' },
        { id:3,image: rascador, tag: 'PET DETAILS' }
    ]


    return (
        <> 
        <div className="row  form-container">  
            <h1>Pets Options </h1>
            <div className="row ">   
                {options.map(option =>
                <IndexOption option={option} key={option.id} />)}
            </div>  
            </div>   
        </>
    )


    
}
