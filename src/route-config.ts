import IndexPets from "./pets/IndexPets";
import CreatePet from "./pets/CreatePet";
import LandingPage from "./LandingPage";
import PetList from "./pets/PetList";



import OwnerList from "./owners/OwnerList";

import SpecieList from "./specie/SpecieList";



import RedirectToLandingPage from './utils/RedirectToLandingPage';

const routes = [
    {path: '/pets', component: IndexPets, exact: true},
    {path: '/petList', component: PetList, exact: true},
    {path: '/newpet', component: CreatePet, exact: true},


    {path: '/ownerList', component: OwnerList, exact: true},
    

    {path: '/specieList', component: SpecieList, exact: true},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
    
];

export default routes;