import { GeneralInformation } from "../type/general-information";
import { ResponseEnvelope, ValidationError } from "../type/response";
import { Controller, Example, FormField, Get, Post, Route, Tags, UploadedFile, Response } from "tsoa";


@Route("/ppdb/general-information/")
@Tags("CMS", "General Information")
export class GeneralInformationController extends Controller {

    /**
     * Get PPDB General Information
     * @summary Get General Information
     */
    @Get("")
    @Example<ResponseEnvelope<GeneralInformation>>({
        id: 1,
        title: "Test General Information",
        description: "This is a test general information",
        picture: "https://example.com/general-information.jpg"
    })
    public async getGeneralInformation(): Promise<ResponseEnvelope<GeneralInformation | null>> {
        return {
            id: 1,
            title: "Test General Information",
            description: "This is a test general information",
            picture: "https://example.com/general-information.jpg"
        }
    }

    /**
     * Submit PPDB General Information
     * @summary Submit General Information
     */
    @Post("")
    @Example<ResponseEnvelope<GeneralInformation>>({
        id: 1,
        title: "Test General Information",
        description: "This is a test general information",
        picture: "https://example.com/general-information.jpg"
    })
    @Response<ValidationError<GeneralInformation>>(400, "Validation Error", {
        "code": 400,
        "error": true,
        "message": "Validation Error",
        "detail": {
            "title": ["Title is required"],
            "description": ["Description is required"]
        }
    })
    public async saveGeneralInformation(
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFile() picture: File
    ): Promise<ResponseEnvelope<GeneralInformation>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    title: title,
                    description: description,
                    picture: "https://example.com/general-information.jpg"
                })
            }, 2000)
        })
    }
}