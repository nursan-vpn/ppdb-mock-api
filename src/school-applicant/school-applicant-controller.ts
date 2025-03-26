import { generateAcceptedApplicants } from "../faker/generator";
import { RegistrationType, SchoolLevel } from "../type/common";
import { PaginatedResponseEnvelope } from "../type/response";
import { ReRegistrationStatus, SchoolApplicant } from "../type/school-applicant";
import { Controller, Example, Get, Query, Route, Tags } from "tsoa";

@Route("v2/ppdb/final-result")
@Tags("School Applicant")
export class SchoolApplicantController extends Controller {


    /**
     * Get School Final applicant
     * @summary Get all school final applicant
     * @param page Page number
     * @param page_size Number of items per page
     * @param search Search keyword
     * @param registration_type 
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<SchoolApplicant>>({
        code: 200,
        error: false,
        message: "Success",
        count: 100,
        next: "",
        previous: "",
        data: [
            {
                id: 1,
                accepted_school_name: "School 1",
                dob: "2025-03-12T06:44:33.969Z",
                full_name: "John Doe",
                nisn: "12345678",
                re_registration_status: ReRegistrationStatus.REGISTERED,
                registration_path: 'Jalur Langit',
                registration_id: '2938493843',
                registration_date: '2025-03-12T06:44:33.969Z',
                school_level: SchoolLevel.HIGH_SCHOOL
            }
        ]
    })
    async getApplicants(
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() registration_type: RegistrationType,
        @Query() search?: string,
    ): Promise<PaginatedResponseEnvelope<SchoolApplicant>> {
        console.log(registration_type);
        let data = generateAcceptedApplicants(page_size);
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


}