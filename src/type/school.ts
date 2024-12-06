import { SchoolLevel } from "./common";

export enum SchoolType {
    PRIVATE = 'Private',
    GOVT = 'Govt'
}

export type School = {
    id: number;
    name: string;
    level: SchoolLevel;
    npsn: string;
    type: SchoolType;
    accreditation: string;
    address: string;
}