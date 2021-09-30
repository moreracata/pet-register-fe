
import CrazyButton from '../utils/CrazyButton';
import { landingOptionDTO } from "./pet.model";

export default function IndexOption(props: indexOptionProps){
    return (
        <>
        <div className="col"> 
           <div className="index-option"> 
            <span className="index-option-img"> 
              <img src={props.option.image}/>
            </span>
            <CrazyButton url=""
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
