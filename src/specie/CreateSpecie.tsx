import { specieCreationDTO } from "./specie.model";
import SpecieForm  from "./SpecieForm";

export default function CreateSpecie(){
    const model :specieCreationDTO = 
        { name:'', description: '', details: ' ', picture: ' ' }
    


    return (
        <>
        
        <div className="form-container"> 
            <h1>Pets Register </h1> 
            <SpecieForm model={model}
                onSubmit={values => console.log(values)}
            />
            </div>
               
        </>
    )


    
}
