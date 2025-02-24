import { RegistrationType } from "./common";
import { SchoolLevel } from "./common";


/**
 * Enum representing different types of registration information details.
 * 0 = Requirement, 1 = Flow, 2 = Schedule, 3 = School
 */
export enum RegistrationInformationDetailType {
	Requirement = '0',
	Flow = '1',
	Schedule = '2',
	School = '3',
}

export type RegistrationInformationDetail = {
	id: number;
	registration_information: RegistrationInformation;
	type: RegistrationInformationDetailType;
	title: string;
	description: string;
	/**
	 * URL to the document for the registration information detail.
	 */
	document: string;
};

export interface RegistrationInformation {
	id: number;
	name: string;
	level: SchoolLevel;
	type: RegistrationType;
	/**
	 * The quota percentage information for the registration path.
	 * @maximum 100
	 * @minimum 1
	 * @isInt
	 */
	quota: number;
}

export interface RegistrationInformationWithDetails extends RegistrationInformation {
	/**
	 * Registration details for the registration information.
	 * 
	 */
	registration_details: RegistrationInformationDetail[];
}
