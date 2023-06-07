import { Link } from "react-router-dom";
import IndexOption from '../Utils/IndexOption';
import {IndexOptionDTO} from './Models/IndexOptionDTO';


export default function MainOptions(){
    const options: IndexOptionDTO[] = [
        { id:1, image:  'https://cdn-icons-png.flaticon.com/512/4213/4213659.png', tag: 'PETS', url: '/petList' }, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4213/4213672.png', tag: 'OWNERS' , url: '/ownerList' }, 
        { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4213/4213678.png', tag: 'SPECIES', url: '/ownerList'  }
    ]

    return (
        <> 
            <div className="row  form-container">  
                <div className="row">   
                    {options.map(option =>
                        <IndexOption option={option} key={option.id} />)}
                </div>  
            </div>   
        </>
    )


    
}
