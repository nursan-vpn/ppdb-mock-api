import { SchoolLevel } from "../type/common";
import { PaginatedResponseEnvelope } from "../type/response";
import { School, SchoolType } from "../type/school";
import { Controller, Example, Get, Query, Route, Tags } from "tsoa";


@Route("ppdb/schools/")
@Tags("School")
export class SchoolController extends Controller {
    
    /**
     * Get All Schools paginated
     * @summary Get all schools
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<School>>({
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
                name: "School 1",
                npsn: "12345678",
                type: SchoolType.PRIVATE,
                accreditation: "A",
                address: "Jl. ABC",
                level: SchoolLevel.ELEMENTRY
            }
        ]
    })
    async getSchools(
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() search?: string,
        @Query() levels?: SchoolLevel[], // Array of SchoolLevel
    ): Promise<PaginatedResponseEnvelope<School>> {
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
                    name: "School 1",
                    npsn: "12345678",
                    type: SchoolType.PRIVATE,
                    accreditation: "A",
                    address: "Jl. ABC",
                    level: SchoolLevel.ELEMENTRY
                }
            ]
        }
    }
}