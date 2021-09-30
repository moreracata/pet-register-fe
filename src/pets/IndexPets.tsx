import { Link } from "react-router-dom";
import IndexOption from './IndexOption';
import cat from '../img/gato.png';
import collar from '../img/collar.png';
import rascador from '../img/rascador.png';
import huella from '../img/huella.png';
import pez from '../img/pez.png';
import mouse2 from '../img/mouse2.png';
import mouse from '../img/mouse.png';
import gato2 from '../img/gato2.png';


import { landingOptionDTO } from "./pet.model";


export default function IndexPets(){
    const options: landingOptionDTO[] = [
        { id:1, image: cat, tag: 'REGISTER A PET', url: '/newpet' }, 
        { id:1, image: huella, tag: 'REGISTER A OWNER' }, 
        { id:2,image: collar, tag: 'EDIT OWNER DETAILS' },
        { id:3,image: rascador, tag: 'EDIT PET DETAILS' }
    ]

    const options2: landingOptionDTO[] = [
        { id:1, image: pez, tag: 'OPTION', url: '/newpet' }, 
        { id:1, image: mouse, tag: 'OPTION' }, 
        { id:2,image: mouse2, tag: 'OPTION' },
        { id:3,image: gato2, tag: 'OPTION' }
    ]


    return (
        <> 
        <div className="row  form-container">  
            <h1>Pets Options </h1>
            <div className="row ">   
                {options.map(option =>
                <IndexOption option={option} key={option.id} />)}
            </div>  
            <div className="row ">   
                {options2.map(option =>
                <IndexOption option={option} key={option.id} />)}
            </div>  
            </div>   
        </>
    )


    
}
