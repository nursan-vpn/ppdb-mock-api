import { SchoolLevel } from "./common"

export enum ReRegistrationStatus {
    REGISTERED = 'Registered',
    NON_REGISTERED = 'Not Registered',
    NON_ACTIVE = 'Not Active',
}

export type SchoolApplicant = {
    id: number,
    full_name: string,
    registration_id: string,
    /**
     * Date of Birth in ISO 8601 date string
     */
    dob: string,
    nisn: string,
    /**
     * Registration path name
     */
    registration_path: string,
    school_level: SchoolLevel,
    /**
     * ISO 8601 date string
     */
    registration_date: string,
    accepted_school_name: string,
    re_registration_status: ReRegistrationStatus
}


