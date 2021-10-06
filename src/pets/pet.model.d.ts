export interface petDTO {
    id: number;
    name: string;
    dateOfBirth?: Date;
    onwnerid: string;
    picture: string;
    age: int
}

export interface petCreationDTO {
    name: string;
    owner: string;
    pictureURL: string;
    dateOfBirth?: Date;
}

export interface landingOptionDTO {
    id:int
    tag: string;
    image: string;
    url?: string
}


export interface ownerDTO {
    id: number;
    identificationNumber: string;
    name: string;
    picture: string;
}


export interface ownerListDTO {
    petList:ownerDTO[]
 
}

export interface petListDTO {
    petList:petDTO[]
 
}
