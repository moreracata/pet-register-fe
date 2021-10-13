import { ownerCreationDTO } from "./owner.model";
import SpecieForm  from "./OwnerForm";

export default function CreateOwner(){
    const model :ownerCreationDTO = 
        { name:'', identificationNumber: '', picture: ''}
      
    


    return (
        <>
        
        <div className="form-container"> 
            <h1>Owner Register </h1> 
            <SpecieForm model={model}
                onSubmit={values => console.log(values)}
            />
            </div>
               
        </>
    )


    
}
