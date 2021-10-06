import { petDTO, ownerDTO } from "./pet.model";
import PetData  from "./PetData";
import './petList.css';

export default function PetList(){
    
    const options: petDTO[] = [
                { id:1, name: 'Mia', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png' ,onwnerid:'1', age:'1'}, 
                { id:2, name: 'Chuck', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:'2'},
                { id:3, name: 'Linda', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:'3'},
                { id:4, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:'3'},
                { id:5, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:'4'},
    ]



    const owners: ownerDTO[] = [
        { id:1, name: 'Catalina' , identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png' }, 
        { id:2, name: 'Saul', identificationNumber:'' , picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' },
        { id:3, name: 'Ingrid', identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png'  },
        { id:4, name: 'David', identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png'  },
        { id:5, name: 'Mauxi',  identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' }
]
    return (
        <>
         
            <div className="form-container"> 
                <div className="row ">   
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                <thead>
                                    <tr>
                                    <th><span>Name</span></th>
                                    <th><span>Date of Birth</span></th>
                                    <th className="text-center"><span>Specie</span></th>
                                    <th><span>Owner</span></th>
                                    <th><span>Options</span></th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {options.map(option =>
                                <PetData petData={option} key={option.id} />)}
                                </tbody>
                                </table>
                            </div>
                            <ul className="pagination pull-right">
                            <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>



             
        </>
    )

}

