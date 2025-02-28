import { RegistrationType } from "../type/common";
import { RegistrationPathCalculationParameterResponse, RegistrationPathParameterType } from "../type/registration-path-paramater";
import { ResponseEnvelope } from "../type/response";
import { Body, Controller, Example, Get, Patch, Route, Tags } from "tsoa";

@Route("v2/ppdb/registration-path-parameter")
@Tags("Registration Path Parameter")
export class RegistrationPathParameterController extends Controller {
    
    /**
     * Get registration path calculation parameter that is used to calculate applicant priority based on their registration path type.
     * @summary Get registration path calculation parameter
     */
    @Get("")
    @Example<ResponseEnvelope<RegistrationPathCalculationParameterResponse>>({
        code: 200,
        error: false,
        message: '',
        data: {
            calculation_params: [
                {
                    registration_type: [RegistrationType.ACHIEVEMENT],
                    params: [
                        {
                            type: RegistrationPathParameterType.TOTAL_GRADE,
                            order: 1
                        },
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                },
                {
                    registration_type: [RegistrationType.ZONING],
                    params: [
                        {
                            type: RegistrationPathParameterType.TOTAL_GRADE,
                            order: 1
                        },
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                },
                {
                    registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                    params: [
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                }
            ]
        }
    })
    async getRegistrationPathParameter(): Promise<ResponseEnvelope<RegistrationPathCalculationParameterResponse>> {
        return {
            code: 200,
            error: false,
            message: '',
            data: {
                calculation_params: [
                    {
                        registration_type: [RegistrationType.ACHIEVEMENT],
                        params: [
                            {
                                type: RegistrationPathParameterType.TOTAL_GRADE,
                                order: 1
                            },
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    },
                    {
                        registration_type: [RegistrationType.ZONING],
                        params: [
                            {
                                type: RegistrationPathParameterType.TOTAL_GRADE,
                                order: 1
                            },
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    },
                    {
                        registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                        params: [
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    }
                ]
            }
        }
    }

    /**
     * Update registration path calculation parameter that is used to calculate applicant priority based on their registration path type.
     * @summary Update registration path calculation parameter
     */
    @Patch("")
    @Example<ResponseEnvelope<RegistrationPathCalculationParameterResponse>>({
        code: 200,
        error: false,
        message: '',
        data: {
            calculation_params: [
                {
                    registration_type: [RegistrationType.ACHIEVEMENT],
                    params: [
                        {
                            type: RegistrationPathParameterType.TOTAL_GRADE,
                            order: 1
                        },
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                },
                {
                    registration_type: [RegistrationType.ZONING],
                    params: [
                        {
                            type: RegistrationPathParameterType.TOTAL_GRADE,
                            order: 1
                        },
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                },
                {
                    registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                    params: [
                        {
                            type: RegistrationPathParameterType.AGE,
                            order: 2
                        },
                        {
                            type: RegistrationPathParameterType.REGISTER_DATE,
                            order: 3
                        }
                    ]
                }
            ]
        }
    })
    async UpdateRegistrationPathParameter(
        @Body() body: RegistrationPathCalculationParameterResponse
    ): Promise<ResponseEnvelope<RegistrationPathCalculationParameterResponse>> {
        return {
            code: 200,
            error: false,
            message: '',
            data: {
                calculation_params: [
                    {
                        registration_type: [RegistrationType.ACHIEVEMENT],
                        params: [
                            {
                                type: RegistrationPathParameterType.TOTAL_GRADE,
                                order: 1
                            },
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    },
                    {
                        registration_type: [RegistrationType.ZONING],
                        params: [
                            {
                                type: RegistrationPathParameterType.TOTAL_GRADE,
                                order: 1
                            },
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    },
                    {
                        registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                        params: [
                            {
                                type: RegistrationPathParameterType.AGE,
                                order: 2
                            },
                            {
                                type: RegistrationPathParameterType.REGISTER_DATE,
                                order: 3
                            }
                        ]
                    }
                ]
            }
        }
    }
}