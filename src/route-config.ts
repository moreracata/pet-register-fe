import IndexPets from "./pets/IndexPets";
import CreatePet from "./pets/CreatePet";
import LandingPage from "./LandingPage";
import PetList from "./pets/PetList";

import RedirectToLandingPage from './utils/RedirectToLandingPage';

const routes = [
    {path: '/pets', component: IndexPets, exact: true},
    {path: '/PetList', component: PetList, exact: true},
    {path: '/newpet', component: CreatePet, exact: true},
    

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
    
];

export default routes;