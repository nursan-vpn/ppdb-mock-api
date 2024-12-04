import { RegistrationType, SchoolLevel } from "../type/common";
import { RegistrationPath, RegistrationPathBillingScheduleType, RegistrationPathDetail, RegistrationPathFieldType, RegistrationPathPayload, RegistrationPathPaymentMethod, RegistrationPathStatus } from "../type/registration-path";
import { PaginatedResponseEnvelope, ResponseEnvelope } from "../type/response";
import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Response, Tags } from "tsoa";


@Route("ppdb/registration-paths/")
@Tags("Registration Path")
export class RegistrationPathController extends Controller {
    
    /**
     * Get All Registration Paths paginated
     * @summary Get all registration paths
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<RegistrationPath>>({
        code: 200,
        error: false,
        message: "Success",
        array_count: 1,
        total_items: 1,
        page_size: 1,
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
                isHavePayment: false
            }
        ]
    })
    async getRegistrationPaths(
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() search?: string,
        @Query() level?: SchoolLevel[], // Array of SchoolLevel
        @Query() registration_type?: RegistrationType[], // Array of RegistrationType
    ): Promise<PaginatedResponseEnvelope<RegistrationPath>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            array_count: 1,
            total_items: 1,
            page_size: 1,
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
                    isHavePayment: false
                }
            ]
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
                isHavePayment: false
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
                            fieldType: RegistrationPathFieldType.CHOICE,
                            isRequired: true,
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

                        }
                    ],
                    name: "General",
                }
            ],
            schools: [1,2,3,4,],
            paymentConfig: {
                items: [
                    {
                        billingScheduleType: RegistrationPathBillingScheduleType.PAY_AFTER_ACCEPTANCE,
                        name: "Item 1",
                        price: 1000000,
                        id: 1
                    }
                ],
                paymentMethods: [
                    RegistrationPathPaymentMethod.BANK_TRANSFER
                ]
            },
            hasApplicant: false
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
                                fieldType: RegistrationPathFieldType.CHOICE,
                                isRequired: true,
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

                            }
                        ],
                        name: "General",
                    }
                ],
                schools: [1,2,3,4,],
                paymentConfig: {
                    items: [
                        {
                            billingScheduleType: RegistrationPathBillingScheduleType.PAY_AFTER_ACCEPTANCE,
                            name: "Item 1",
                            price: 1000000,
                            id: 1
                        }
                    ],
                    paymentMethods: [
                        RegistrationPathPaymentMethod.BANK_TRANSFER
                    ]
                },
                hasApplicant: false
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
                isHavePayment: false
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
}