import { petCreationDTO } from "./pet.model";
import PetForm  from "./PetForm";

export default function IndexPets(){
    const model :petCreationDTO = 
        { name:'', owner: '', pictureURL: '' }
    


    return (
        <>
        
        <div className="form-container"> 
            <h1>Pets Register </h1> 
            <PetForm model={model}
                onSubmit={values => console.log(values)}
            />
            </div>
               
        </>
    )


    
}
