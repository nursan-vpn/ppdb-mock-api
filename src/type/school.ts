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





export type SchoolDetail = {
    id: number;
    general_information: {
        name: string;
        npsn: string;
        address: {
            province: string,
            city: string,
            district: string,
            sub_district: string,
            postal_code: string,
            coordinates: {
                lat: number,
                lng: number,
            },
            address: string,
        },
        email: string;
        level: SchoolLevel;
        accreditation: string;
        accreditation_year: string;
        curriculum: string;
        type: SchoolType;
    },
    educators_and_students: {
        number_of_administrative_staff: number;
        number_of_teachers: number;
        number_of_students_grade_1: number; 
        number_of_students_grade_2: number; 
        number_of_students_grade_3: number; 
        number_of_students_grade_4: number; 
        number_of_students_grade_5: number; 
        number_of_students_grade_6: number;
    },
    school_facilities: {
        number_of_classrooms: number;
        number_of_laboratories: number;
        number_of_libraries: number;
        number_of_sports_facilities: number;
    },
    extracurriculars: {
        id: number;
        name: string;
        description: string;
    }[],
    other_information: string;
}