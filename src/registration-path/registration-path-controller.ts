import { generateRegistrationPaths } from "../faker/generator";
import { RegistrationType, SchoolLevel } from "../type/common";
import { RegistrationPath, RegistrationPathBillingScheduleType, RegistrationPathDetail, RegistrationPathFieldType, RegistrationPathPayload, RegistrationPathPayment, RegistrationPathPaymentMethod, RegistrationPathPaymentStatus, RegistrationPathStatus } from "../type/registration-path";
import { PaginatedResponseEnvelope, ResponseEnvelope } from "../type/response";
import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Response, Tags } from "tsoa";


@Route("v2/ppdb/registration-paths/")
@Tags("Registration Path")
export class RegistrationPathController extends Controller {
    
    /**
     * Get All Registration Paths paginated
     * @param levels Array of SchoolLevel 
     * @summary Get all registration paths
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<RegistrationPath>>({
        code: 200,
        error: false,
        message: "Success",
        count: 100,
        next: "",
        previous: "",
        data: [
            {
                id: 1,
                name: "Path 1",
                level: SchoolLevel.ELEMENTRY,
                registration_type: RegistrationType.ACHIEVEMENT,
                description: "This is the first path",
                start_date: "2021-01-01T00:00:00Z",
                end_date: "2021-01-01T00:00:00Z",
                status: RegistrationPathStatus.ACTIVE,
                is_have_payment: false
            }
        ]
    })
    async getRegistrationPaths(
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() search?: string,
        @Query() levels?: SchoolLevel[], // Array of SchoolLevel
        @Query() registration_types?: RegistrationType[], // Array of RegistrationType
    ): Promise<PaginatedResponseEnvelope<RegistrationPath>> {
        const data = generateRegistrationPaths(page_size, levels, registration_types);
        return {
            code: 200,
            error: false,
            message: "Success",
            count: 100,
            next: "",
            previous: "",
            data: data
        }
    }

    /**
     * Create a new Registration Path
     * @summary Create a new registration path
     */
    @Post("")
    async createRegistrationPath(
        @Body() body: RegistrationPathPayload
    ): Promise<ResponseEnvelope<RegistrationPath>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                id: 1,
                name: "Path 1",
                level: SchoolLevel.ELEMENTRY,
                registration_type: RegistrationType.ACHIEVEMENT,
                description: "This is the first path",
                start_date: "2021-01-01T00:00:00Z",
                end_date: "2021-01-01T00:00:00Z",
                status: RegistrationPathStatus.ACTIVE,
                is_have_payment: false
            }
        }
    }

    /**
     * Get a Registration Path
     * @summary Get a registration path
     */
    @Get("{id}")
    @Example<ResponseEnvelope<RegistrationPathDetail>>({
        code: 200,
        error: false,
        message: "Success",
        data: {
            id: 1,
            general: {
                name: "Path 1",
                level: SchoolLevel.ELEMENTRY,
                registration_type: RegistrationType.ACHIEVEMENT,
                description: "This is the first path",
                start_date: "2021-01-01T00:00:00Z",
                end_date: "2021-01-01T00:00:00Z",
            },
            configuration: [
                {
                    id: 1,
                    fields: [
                        {
                            field_type: RegistrationPathFieldType.CHOICE,
                            is_required: true,
                            options: [
                                {
                                    id: 1,
                                    label: "Option 1"
                                },
                                {
                                    id: 2,
                                    label: "Option 2"
                                }
                            ],
                            ordering: 1,
                            title: "Field 1",
                            id: 1,
                            is_editable: true,
                            point:null
                        }
                    ],
                    name: "General",
                    is_deleteable: true,
                    is_editable: true,
                }
            ],
            schools: [1,2,3,4,],
            payment_config: {
                items: [
                    {
                        billing_schedule_type: RegistrationPathBillingScheduleType.PAY_AFTER_ACCEPTANCE,
                        name: "Item 1",
                        price: 1000000,
                        id: 1
                    }
                ],
                payment_methods: [
                    RegistrationPathPaymentMethod.BANK_TRANSFER
                ]
            },
            zone_id: null,
            has_applicant: false
        }
    })
    async getRegistrationPath(
        id: number
    ): Promise<ResponseEnvelope<RegistrationPathDetail>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                id: 1,
                general: {
                    name: "Path 1",
                    level: SchoolLevel.ELEMENTRY,
                    registration_type: RegistrationType.AFFIRMATION,
                    description: "This is the first path",
                    start_date: "2021-01-01T00:00:00Z",
                    end_date: "2021-02-01T00:00:00Z",
                },
                configuration: [
                    {
                        id: 1,
                        fields: [
                            {
                                field_type: RegistrationPathFieldType.CHOICE,
                                is_required: true,
                                options: [
                                    {
                                        id: 1,
                                        label: "Option 1"
                                    },
                                    {
                                        id: 2,
                                        label: "Option 2"
                                    }
                                ],
                                ordering: 1,
                                title: "Field 1",
                                id: 1,
                                is_editable: true,
                                point: null
                            }
                        ],
                        name: "General",
                        is_deleteable: true,
                        is_editable: true,
                    }
                ],
                schools: [1,2,3,4,],
                payment_config: {
                    items: [
                        {
                            billing_schedule_type: RegistrationPathBillingScheduleType.PAY_AFTER_ACCEPTANCE,
                            name: "Item 1",
                            price: 1000000,
                            id: 1
                        }
                    ],
                    payment_methods: [
                        RegistrationPathPaymentMethod.BANK_TRANSFER
                    ]
                },
                zone_id: null,
                has_applicant: false
            }
        }
    }


    /**
     * Update a Registration Path
     * @summary Update a registration path
     */
    @Put("{id}")
    async updateRegistrationPath(
        id: number,
        @Body() body: RegistrationPathPayload
    ): Promise<ResponseEnvelope<RegistrationPath>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                id: 1,
                name: "Path 1",
                level: SchoolLevel.ELEMENTRY,
                registration_type: RegistrationType.ACHIEVEMENT,
                description: "This is the first path",
                start_date: "2021-01-01T00:00:00Z",
                end_date: "2021-01-01T00:00:00Z",
                status: RegistrationPathStatus.ACTIVE,
                is_have_payment: false
            }
        }
    }

    /**
     * Delete a Registration Path
     * @summary Delete a registration path
     */
    @Delete("{id}")
    @Response<ResponseEnvelope<null>>(400, "Registration Path already have applicants", {
        code: 400,
        error: true,
        message: "Registration Path already have applicants",
        data: null
    })
    async deleteRegistrationPath(
        id: number,
    ): Promise<ResponseEnvelope<null>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: null
        }
    }


    /**
     * Get All Registration Payments paginated
     * @summary Get all registration payments
     */
    @Get("{registrationPathId}/registration-payments")
    @Example<PaginatedResponseEnvelope<RegistrationPathPayment>>({
        code: 200,
        error: false,
        message: "Success",
        count: 100,
        next: "",
        previous: "",
        data: [
            {
                id: 1,
                billing_schedule_type: RegistrationPathBillingScheduleType.PAY_AFTER_ACCEPTANCE,
                student_name: "John Doe",
                fee_names: ["Item 1"],
                payment_amount: 1000000,
                payment_date: "2021-01-01T00:00:00Z",
                payment_method: "Bank Transfer",
                payment_status: RegistrationPathPaymentStatus.COMPLETE,
                transaction_code: "123456",
            }
        ]
    })
    async getRegistrationPayment(
        registrationPathId: number,
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() billing_schedule_type: RegistrationPathBillingScheduleType,
        @Query() search?: string,
    ): Promise<PaginatedResponseEnvelope<RegistrationPathPayment>> {
       return {
            code: 200,
            error: false,
            message: "Success",
            count: 100,
            next: "",
            previous: "",
            data: [
                {
                    id: 1,
                    billing_schedule_type: billing_schedule_type,
                    student_name: "John Doe",
                    fee_names: ["Item 1"],
                    payment_amount: 1000000,
                    payment_date: "2021-01-01T00:00:00Z",
                    payment_method: "Bank Transfer",
                    payment_status: RegistrationPathPaymentStatus.COMPLETE,
                    transaction_code: "123456",
                }
            ]
        }
    }
    
}