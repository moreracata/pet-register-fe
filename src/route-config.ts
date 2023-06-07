import MainOptions from "./Main/Index";
import CreatePet from "./Pets/Index";
import MainPage from "./MainPage";
import PetList from "./Pets/PetList";



import OwnerList from "./Owners/OwnerList";
import SpecieList from "./Specie/SpecieList";
import RedirectToMainPage from './Utils/RedirectToMainPage';

const routes = [
    {path: '/pets', component: MainOptions, exact: true},
    {path: '/petList', component: PetList, exact: true},
    {path: '/newpet', component: CreatePet, exact: true},

    {path: '/ownerList', component: OwnerList, exact: true},
    
    {path: '/specieList', component: SpecieList, exact: true},

    {path: '/', component: MainPage, exact: true},
    {path: '*', component: RedirectToMainPage}
    
];

export default routes;