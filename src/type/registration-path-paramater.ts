import { RegistrationType } from "./common"

export enum RegistrationPathParameterType {
    TOTAL_GRADE = 'total_nilai',
    AGE = 'umur',
    DISTANCE = 'jarak',
    REGISTER_DATE = 'tanggal_pendaftaran',
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
    params: RegistrationPathParameterType[];
}

export type RegistrationPathCalculationParameterResponse = {
    calculation_params: RegistrationPathCalculationParameter[];
}