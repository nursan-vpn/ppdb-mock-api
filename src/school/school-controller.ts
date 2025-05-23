import { generateSchools } from "../faker/generator";
import { SchoolLevel } from "../type/common";
import { PaginatedResponseEnvelope } from "../type/response";
import { School, SchoolDetail, SchoolType } from "../type/school";
import { Controller, Example, Get, Query, Route, Tags } from "tsoa";


@Route("v2/ppdb/schools/")
@Tags("School")
export class SchoolController extends Controller {

    /**
     * Get All Schools paginated
     * @summary Get all schools
     * @param page Page number
     * @param page_size Number of items per page
     * @param search Search keyword
     * @param levels filter by school levels
     * @param ids filter by school ids
     * @param zone_id get schools based on zone id
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<School>>({
        code: 200,
        error: false,
        message: "Success",
        count: 100,
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
        @Query() ids?: string,
        @Query() zone_id?: number
    ): Promise<PaginatedResponseEnvelope<School>> {
        let data = generateSchools(page_size, levels)
        let schoolIds = ids?.split(",").map(id => parseInt(id)) ?? [];
        if (ids) {
            data = generateSchools(schoolIds.length, levels);

            data = data.map((school,index) => ({
                ...school,
                id: schoolIds[index]
            }))
        }

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


    @Get("{schoolId}")
    @Example<SchoolDetail>({
        id: 1,
        general_information: {
            name: "School 1",
            npsn: "12345678",
            address: {
                province: "Jawa Barat",
                city: "Bandung",
                district: "Cibiru",
                sub_district: " Cileunyi",
                postal_code: "12345",
                coordinates: {
                    lat: -6.914744,
                    lng: 107.619125,
                },
                address: "Jl. ABC",
            },
            email: "",
            level: SchoolLevel.ELEMENTRY,
            accreditation: "A",
            accreditation_year: "2021",
            curriculum: "Kurikulum 2013",
            type: SchoolType.GOVT
        },
        educators_and_students: {
            number_of_administrative_staff: 10,
            number_of_teachers: 10,
            number_of_students_grade_1: 100,
            number_of_students_grade_2: 100,
            number_of_students_grade_3: 100,
            number_of_students_grade_4: 100,
            number_of_students_grade_5: 100,
            number_of_students_grade_6: 100,
        },
        school_facilities: {
            number_of_classrooms: 10,
            number_of_laboratories: 10,
            number_of_libraries: 10,
            number_of_sports_facilities: 10,
        },
        extracurriculars: [
            {
                id: 1,
                name: "Pramuka",
                description: "Kegiatan Pramuka"
            }
        ],
        other_information: "Other Information"
    })
    async getSchool(
        schoolId: number
    ): Promise<SchoolDetail> {
        return {
            id: 1,
            general_information: {
                name: "School 1",
                npsn: "12345678",
                address: {
                    province: "Jawa Barat",
                    city: "Bandung",
                    district: "Cibiru",
                    sub_district: " Cileunyi",
                    postal_code: "12345",
                    coordinates: {
                        lat: -6.914744,
                        lng: 107.619125,
                    },
                    address: "Jl. ABC",
                },
                email: "",
                level: SchoolLevel.ELEMENTRY,
                accreditation: "A",
                accreditation_year: "2021",
                curriculum: "Kurikulum 2013",
                type: SchoolType.GOVT
            },
            educators_and_students: {
                number_of_administrative_staff: 10,
                number_of_teachers: 10,
                number_of_students_grade_1: 100,
                number_of_students_grade_2: 100,
                number_of_students_grade_3: 100,
                number_of_students_grade_4: 100,
                number_of_students_grade_5: 100,
                number_of_students_grade_6: 100,
            },
            school_facilities: {
                number_of_classrooms: 10,
                number_of_laboratories: 10,
                number_of_libraries: 10,
                number_of_sports_facilities: 10,
            },
            extracurriculars: [
                {
                    id: 1,
                    name: "Pramuka",
                    description: "Kegiatan Pramuka"
                }
            ],
            other_information: "Other Information"
        };
    }
}