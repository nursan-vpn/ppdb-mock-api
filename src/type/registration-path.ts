import { RegistrationType, SchoolLevel } from "./common";

/**
 * 0 = Active, 1 = Non-active
 */
export enum RegistrationPathStatus {
    ACTIVE = "1",
    NON_ACTIVE = "0"
}

export type RegistrationPath = {
    id: number;
    /**
     * Name of the registration path
     */
    name: string;
    level: SchoolLevel;
    registration_type: RegistrationType;
    description: string;
    /**
     * ISO 8601 date-time string
     */
    start_date: string;
    /**
     * ISO 8601 date-time string
     */
    end_date: string;
    /**
     * Registration path status
     */
    status: RegistrationPathStatus;
    /**
     * Boolean value indicating whether the registration path has payment or not.
     */
    is_have_payment: boolean;
}


/**
 * 0 = Text, 1 = Number, 2 = Choice, 3 = Multiple Choice, 4 = Date, 5 = Document
 */
export enum RegistrationPathFieldType {
    TEXT = "0",
    NUMBER = "1",
    CHOICE = "2",
    MULTIPLE_CHOICE = "3",
    DATE = `4`,
    DOCUMENT = `5`
}

/**
 * Enum to describe the field group type,
 * 0 = Academic, 1 = Non Academic, 2 = Custom
 */
export enum RegistrationPathConfigType {
	ACADEMIC = '0',
	NON_ACADEMIC = '1',
	CUSTOM = '2',
}

type RegistrationPathConfig = {
    id?: number;
    /**
     * Fields group name
     */
    name: string;
    /**
	 * Config type
	 */
	type: RegistrationPathConfigType;
    /**
     * List of fields in the group
     */
    fields: {
        id?: number;
        /**
         * Field title
         */
        title: string;
        /**
         * Boolean value indicating whether the field is required or not.
         */
        is_required: boolean;
        /**
         * Field type
         * 0 = Text, 1 = Number, 2 = Choice, 3 = Multiple Choice, 4 = Date, 5 = Document
         */
        field_type: RegistrationPathFieldType;
        /**
         * List of options for the field. Only applicable for field type 2 and 3.
         */
        options: {
            /**
             * Option ID
             */
            id?: number;
            /**
             * Option label
             */
            label: string;
        }[]
        /**
         * Field ordering
         */
        ordering: number;
        is_editable: boolean;
        /**
         * Field\`s point, nullable, null if the field`s type its not a Document.
         */
        point: number|null;
    }[],
    is_deleteable: boolean;
    is_editable: boolean;
}

/**
 * 0 = Pay at registration, 1 = Pay after acceptance
 */
export enum RegistrationPathBillingScheduleType {
    PAY_AT_REGISTRATION = "0",
    PAY_AFTER_ACCEPTANCE = "1",
}

export enum RegistrationPathPaymentMethod {
    BANK_TRANSFER = "BANK_TRANSFER",
    QRIS = "QRIS",
    EWALLET = "EWALLET"
}

 /**
 * Payment configuration for the registration path (Step 4)
 */
type RegistrationPathPaymentConfig = {
    id?: number;
    /**
     * List of items need to be paid for the registration path.
     */
    items: {
        id?: number;
        name: string;
        price: number;
        /**
         * When the payment should be made.
         * 0 = Pay at registration, 1 = Pay after acceptance
         */
        billing_schedule_type: RegistrationPathBillingScheduleType;
    }[],
    /**
     * List of payment methods available for the registration path.
     */
    payment_methods: RegistrationPathPaymentMethod[];
}

export interface RegistrationPathPayload {
    id?: number;
    /**
     * Registration path general information (Step 1)
     */
    general: {
        /**
         * Name of the registration path
         */
        name: string;
        level: SchoolLevel;
        registration_type: RegistrationType;
        description: string;
        /**
         * ISO 8601 date-time string
         */
        start_date: string;
        /**
         * ISO 8601 date-time string
         */
        end_date: string;
    },
    /**
     * Form configuration for the registration path (Step 2)
     */
    configuration: RegistrationPathConfig[],
    /**
     * List of school IDs that are associated with the registration path (Step 3)
     */
    schools: number[];
    payment_config?: RegistrationPathPaymentConfig;
    /**
     * Registration path zone id, null if the registration path is not zone-based.
     */
    zone_id: number | null;
}


export interface RegistrationPathDetail extends RegistrationPathPayload {
    /**
     * Boolean value indicating whether the registration path has applicant or not.
     */
    has_applicant: boolean;
}

export enum RegistrationPathPaymentStatus {
    CREATED = "CREATED",
    WAITING_PAYMENT = "WAITING_PAYMENT",
    PAYMENT_IN_PROGRESS = "PAYMENT_IN_PROGRESS",
    DISBURSE_IN_PROGRESS = "DISBURSE_IN_PROGRESS",
    COMPLETE = "COMPLETE",
    INCOMPLETE = "INCOMPLETE",
    EXPIRED = "EXPIRED",
    PAYMENT_FAILED = "PAYMENT_FAILED",
}

export type RegistrationPathPayment = {
    id: number;
    billing_schedule_type: RegistrationPathBillingScheduleType;
    student_name: string;
    fee_names: string[];
    payment_amount: number;
    payment_date: string;
    payment_method: string;
    payment_status: RegistrationPathPaymentStatus;
    transaction_code: string;
}
