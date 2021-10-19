
import CrazyButton from '../utils/CrazyButton';
import { landingOptionDTO } from "./utils.model";
import { useHistory } from 'react-router-dom';

export default function IndexOption(props: indexOptionProps){
    const history = useHistory();



    return (
        <>
        <div className="col"> 
           <div className="index-option"> 
            <span className="index-option-img"> 
              <img src={props.option.image}/>
            </span>
            <CrazyButton 
            url ={ props.option.url}
                  type="button">
            {props.option.tag}
            </CrazyButton>
        </div></div>
        </>
    )
}


interface indexOptionProps{
    option: landingOptionDTO;
}
