import { Link } from "react-router-dom";
import IndexOption from '../Utils/IndexOption';
import { landingOptionDTO } from "../Utils/utils.model";


export default function IndexOwner(){
    const options: landingOptionDTO[] = [
        { id:1, image:  'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'REGISTER A PET', url: '/newpet' }, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'REGISTER A OWNER', url: '/newpet'  }, 
        { id:3,image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'EDIT OWNER DETAILS' , url: '/newpet' },
        { id:4,image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'EDIT PET DETAILS' , url: '/newpet' }
    ]

    const options2: landingOptionDTO[] = [
        { id:5, image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'OPTION', url: '/newpet' }, 
        { id:6, image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'OPTION' , url: '/newpet' }, 
        { id:7,image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'OPTION' , url: '/newpet' },
        { id:8,image: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png', tag: 'OPTION' , url: '/newpet' }
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
