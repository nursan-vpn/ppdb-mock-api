import { RegistrationInformationDetail, RegistrationInformationDetailType } from "../type/registration-information";
import { Body, Controller, Example, FormField, Patch, Post, Put, Route, Tags, UploadedFile } from "tsoa";
import { ResponseEnvelope } from "../type/response";
import { faker } from "@faker-js/faker";
import { generatePathInformation } from "../faker/generator";
import { RegistrationType, SchoolLevel } from "../type/common";

@Route("/ppdb/registration-detail/")
@Tags("CMS", "Registration Information")
export class PathRegistrationInformationDetailController extends Controller {

    /**
     * Add registration information detail to the registration information
     * @param registration_information ID of the registration information
     * @summary Add Registration Information Detail
     */
    @Post("")
    @Example<ResponseEnvelope<RegistrationInformationDetail>>({
        id: 1,
        description: "This is a test registration information detail",
        document: "https://example.com/registration-information-detail.pdf",
        registration_information: {
            id: 1,
            name: "Test Registration Information",
            level: SchoolLevel.ELEMENTRY,
            type: RegistrationType.ACHIEVEMENT
        },
        title: "Test Registration Information",
        type: RegistrationInformationDetailType.Requirement
    })
    public async addRegistrationInformationDetail(
        @FormField() title: string,
        @FormField() registration_information: number,
        @FormField() type: RegistrationInformationDetailType,
        @FormField() description: string,
        @UploadedFile() document?: File,
    ): Promise<ResponseEnvelope<RegistrationInformationDetail>> {
        const data = generatePathInformation()
        return {
            id: 1,
            description: faker.lorem.paragraph(),
            document: faker.internet.url() + faker.system.filePath(),
            registration_information: data,
            title: "Test Registration Information",
            type: type
        }
    }

    /**
     * Update registration information detail
     * @param registration_information ID of the registration information
     * @summary Update Registration Information Detail
     */
    @Patch("{id}")
    @Example<ResponseEnvelope<RegistrationInformationDetail>>({
        id: 1,
        description: "This is a test registration information detail",
        document: "https://example.com/registration-information-detail.pdf",
        registration_information: {
            id: 1,
            name: "Test Registration Information",
            level: SchoolLevel.ELEMENTRY,
            type: RegistrationType.ACHIEVEMENT
        },
        title: "Test Registration Information",
        type: RegistrationInformationDetailType.Requirement
    })
    public async updateRegistrationInformationDetail(
        id: number,
        @FormField() title: string,
        @FormField() registration_information: number,
        @FormField() type: RegistrationInformationDetailType,
        @FormField() description: string,
        @UploadedFile() document?: File,
    ): Promise<ResponseEnvelope<RegistrationInformationDetail>> {
        const data = generatePathInformation()
        return {
            id: 1,
            description: faker.lorem.paragraph(),
            document: faker.internet.url() + faker.system.filePath(),
            registration_information: data,
            title: "Test Registration Information",
            type: type
        }
    }
}