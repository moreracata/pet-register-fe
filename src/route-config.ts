import MainOptions from "./Main/Index";
import MainPage from "./MainPage";

import OwnerIndex from "./Owners/IndexOwner";
import SpecieIndex from "./Specie/IndexSpecie";
import PetIndex from './Pets/IndexPets';

import PetList from "./Pets/PetList";
import OwnerList from "./Owners/OwnerList";
import SpecieList from "./Specie/SpecieList";


import RedirectToMainPage from './Utils/RedirectToMainPage';

const routes = [
    {path: '/Index', component: MainOptions, exact: true},

    {path: '/Owner', component: OwnerIndex, exact: true},
    {path: '/Specie', component: SpecieIndex, exact: true},
    {path: '/Pet', component: PetIndex, exact: true},

    {path: '/PetList', component: PetList, exact: true},
    {path: '/OwnerList', component: OwnerList, exact: true},
    {path: '/SpecieList', component: SpecieList, exact: true},

    {path: '/', component: MainPage, exact: true},
    {path: '*', component: RedirectToMainPage}
    
];

export default routes;