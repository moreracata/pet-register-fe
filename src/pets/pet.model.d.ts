export interface petDTO {
    id: number;
    name: string;
    onwnerid: string;
    picture: string;
    age: string
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

