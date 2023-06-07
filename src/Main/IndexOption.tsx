
import CrazyButton from '../Utils/CrazyButton';
import {IndexOptionDTO} from './Models/IndexOptionDTO';
import { useHistory } from 'react-router-dom';

export default function IndexOption(props: indexOptionProps){
    const history = useHistory();

    function redirect(url:string) {
        history.push(url)
      }


    return (
        <>
        <div className="col"> 
           <div className="index-option"> 
                <span className="index-option-img"> 
                <img src={props.option.image}/>
                </span>
                <CrazyButton 
                    onClick={() => redirect(props.option.url)}
                    type="button">
                {props.option.tag}
                </CrazyButton>
            </div>
        </div>
        </>
    )
}


interface indexOptionProps{
    option: IndexOptionDTO;
}
