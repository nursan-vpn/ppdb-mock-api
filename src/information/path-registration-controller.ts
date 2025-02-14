import { faker } from "@faker-js/faker";
import { generatePathInformation, getRegistrationInfo } from "../faker/generator";
import { RegistrationType, SchoolLevel } from "../type/common";
import { RegistrationInformation, RegistrationInformationDetailType, RegistrationInformationWithDetails } from "../type/registration-information";
import { PaginatedResponseEnvelope, ResponseEnvelope } from "../type/response";
import { Body, Controller, Example, Get, Post, Put, Query, Route, Tags } from "tsoa";

@Route("/ppdb/registration-information/")
@Tags("CMS", "Registration Information")
export class PathRegistrationInformationController extends Controller {

    /**
     * Get Path Registration Informations list
     * @summary Get Registration Information list
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<RegistrationInformation>>(
        {
            count: 200,
            "next": "",
            "previous": "",
            "results": [
                {
                    id: 1,
                    name: "Test Registration Information",
                    level: SchoolLevel.ELEMENTRY,
                    type: RegistrationType.ZONING
                }
            ]
        }
    )
    public async getRegistrationInformation(
        @Query() page: number = 1,
        @Query() page_size: number = 10
    ): Promise<PaginatedResponseEnvelope<RegistrationInformation>> {
        const data = getRegistrationInfo(page_size)
        return {
           count: 300,
            "next": "",
            "previous": "",
            "results": data,
        }
    }


    /**
     * Get Path Registration Information by ID
     * @summary Get Registration Information by ID
     */
    @Get("{id}")
    @Example<ResponseEnvelope<RegistrationInformationWithDetails>>({
        id: 1,
        name: "Test Registration Information",
        level: SchoolLevel.ELEMENTRY,
        type: RegistrationType.ZONING,
        registration_details: [
            {
                id: 1,
                registration_information: {
                    id: 1,
                    name: "Test Registration Information",
                    level: SchoolLevel.ELEMENTRY,
                    type: RegistrationType.ZONING
                },
                type: RegistrationInformationDetailType.Requirement,
                title: "Syarat Pendaftaran",
                description: "This is a test registration information",
                document: "https://example.com/registration-information.jpg"
            }
        ]
    })
    public async getRegistrationInformationById(id: number): Promise<ResponseEnvelope<RegistrationInformationWithDetails>> {
        const data = generatePathInformation()
        const detail = {
            ...data,
            registration_details: [
                {
                    id: 1,
                    registration_information: data,
                    type: RegistrationInformationDetailType.Requirement,
                    title: "Syarat Pendaftaran",
                    description: faker.lorem.paragraph(),
                    document: faker.internet.url() + faker.system.filePath()
                }
            ]
        }
        return detail
    }


    /**
     * Create Path Registration Information
     * @summary Create Registration Information
     */
    @Post("")
    @Example<ResponseEnvelope<RegistrationInformation>>({
        id: 1,
        name: "Test Registration Information",
        level: SchoolLevel.ELEMENTRY,
        type: RegistrationType.ZONING
    })
    public async createRegistrationInformation(
        @Body() payload: Omit<RegistrationInformation, "id">
    ): Promise<ResponseEnvelope<RegistrationInformation>> {
        const data = generatePathInformation()
        return data
    }

    /**
     * Update Path Registration Information
     * @summary Update Registration Information
     */
    @Put("{id}")
    @Example<ResponseEnvelope<RegistrationInformation>>({
        id: 1,
        name: "Test Registration Information",
        level: SchoolLevel.ELEMENTRY,
        type: RegistrationType.ZONING
    })
    public async updateRegistrationInformation(
        id: number,
        @Body() payload: Omit<RegistrationInformation, "id">
    ): Promise<ResponseEnvelope<RegistrationInformation>> {
        const data = generatePathInformation()
        return data
    }
}