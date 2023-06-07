
import IndexOption from './IndexOption';
import {IndexOptionDTO} from './Models/IndexOptionDTO';

export default function MainOptions(){
    const options: IndexOptionDTO[] = [
        { id:1, image:  'https://cdn-icons-png.flaticon.com/512/4213/4213659.png', tag: 'PETS', url: '/Pet' }, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4213/4213672.png', tag: 'OWNERS' , url: '/Owner' }, 
        { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4213/4213678.png', tag: 'SPECIES', url: '/Specie'  }
    ]

    return (
        <> 
            <div className="row">   
                <IndexOption option={options[0]} key='1' />
                <IndexOption option={options[1]} key='2' />
                <IndexOption option={options[2]} key='3' />
            </div>    
        </>
    )
}
