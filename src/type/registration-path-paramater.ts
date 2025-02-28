import { RegistrationType } from "./common"

/**
 * Enum representing different types of paramater.
 * 0 = Total nilai (Sorting from Highest to lowest), 
 * 1 = Umur (Sorting from Oldest to Youngest), 
 * 2 = Jarak  (terdekat - terjauh),  
 * 3 = Register Date (Oldest to Newest)
 */
export enum RegistrationPathParameterType {
    TOTAL_GRADE = '0',
    AGE = '1',
    DISTANCE = '2',
    REGISTER_DATE = '3',
}


export type RegistrationPathParameter = {
    /**
     * Parameter type
     */
    type: RegistrationPathParameterType;
    /**
     * Order of the parameter
     */
    order: number;
}

export type RegistrationPathCalculationParameter = {
    /**
     * Array of Enum representing different types of registration.
     * 0 = Zoning, 1 = Achievement, 2 = Affirmation, 3 = Transfer, 4 = Custom
     */
    registration_type: RegistrationType[];
    params: RegistrationPathParameter[];
}

export type RegistrationPathCalculationParameterResponse = {
    calculation_params: RegistrationPathCalculationParameter[];
}