export enum SchoolType {
    PRIVATE = 'Private',
    GOVT = 'Govt'
}

export type School = {
    id: number;
    name: string;
    npsn: string;
    type: SchoolType;
    accreditation: string;
}