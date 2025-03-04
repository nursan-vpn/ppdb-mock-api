import { RegistrationType } from "../type/common";
import { RegistrationPathCalculationParameter, RegistrationPathCalculationParameterResponse, RegistrationPathParameterType } from "../type/registration-path-paramater";
import { ResponseEnvelope } from "../type/response";
import { Body, Controller, Example, Get, Patch, Put, Route, Tags } from "tsoa";

@Route("v2/ppdb/registration-paths/paramater")
@Tags("Registration Path Parameter")
export class RegistrationPathParameterController extends Controller {

    /**
     * Get registration path calculation parameter that is used to calculate applicant priority based on their registration path type.
     * @summary Get registration path calculation parameter
     */
    @Get("")
    @Example<ResponseEnvelope<RegistrationPathCalculationParameter[]>>({
        code: 200,
        error: false,
        message: '',
        data: [
            {
                registration_type: [RegistrationType.ACHIEVEMENT],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            },
            {
                registration_type: [RegistrationType.ZONING],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            },
            {
                registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            }
        ]
    })
    async getRegistrationPathParameter(): Promise<ResponseEnvelope<RegistrationPathCalculationParameter[]>> {
        return {
            code: 200,
            error: false,
            message: '',
            data: [
                {
                    registration_type: [RegistrationType.ACHIEVEMENT],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                },
                {
                    registration_type: [RegistrationType.ZONING],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                },
                {
                    registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                }
            ]
        }
    }

    /**
     * Update registration path calculation parameter that is used to calculate applicant priority based on their registration path type.
     * @summary Update registration path calculation parameter
     */
    @Put("")
    @Example<ResponseEnvelope<RegistrationPathCalculationParameter[]>>({
        code: 200,
        error: false,
        message: '',
        data: [
            {
                registration_type: [RegistrationType.ACHIEVEMENT],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            },
            {
                registration_type: [RegistrationType.ZONING],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            },
            {
                registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                params: [
                    RegistrationPathParameterType.TOTAL_GRADE,
                    RegistrationPathParameterType.AGE,
                    RegistrationPathParameterType.REGISTER_DATE
                ]
            }
        ]
    })
    async UpdateRegistrationPathParameter(
        @Body() body: RegistrationPathCalculationParameter[]
    ): Promise<ResponseEnvelope<RegistrationPathCalculationParameter[]>> {
        return {
            code: 200,
            error: false,
            message: '',
            data: [
                {
                    registration_type: [RegistrationType.ACHIEVEMENT],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                },
                {
                    registration_type: [RegistrationType.ZONING],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                },
                {
                    registration_type: [RegistrationType.AFFIRMATION, RegistrationType.TRANSFER, RegistrationType.CUSTOM],
                    params: [
                        RegistrationPathParameterType.TOTAL_GRADE,
                        RegistrationPathParameterType.AGE,
                        RegistrationPathParameterType.REGISTER_DATE
                    ]
                }
            ]
        }
    }
}