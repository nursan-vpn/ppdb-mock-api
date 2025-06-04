
export enum UserType {
    ADMIN = 'admin',
    OFFICIAL1 = 'official1',
    OFFICIAL2 = 'official2',
    FOUNDATION = 'foundation',
    APPLICANT = 'applicant',
}


export type SchoolAdminUser = {
    id: number,
    type: UserType.ADMIN,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    school: string;
}

export type OfficialUser = {
    id: number,
    type: UserType.OFFICIAL1 | UserType.OFFICIAL2 | UserType.FOUNDATION,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    foundation: string;
}

export type ApplicantUser = {
    id: number,
    type: UserType.APPLICANT,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    school: string;
    registration_number?: string;
}

export type User = SchoolAdminUser | OfficialUser | ApplicantUser;