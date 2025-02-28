import { Banner } from "../type/banner";
import { ResponseEnvelope } from "../type/response";
import { Body, Controller, Example, FormField, Get, Patch, Post, Put, Response, Route, Security, Tags, UploadedFile } from "tsoa";

@Route("v2/ppdb/banner")
@Tags("CMS", "Banner")
export class BannerController extends Controller {

    /**
     * Get PPDB Banner
     * @summary Get Banner
     */
    @Get("")
    @Example<ResponseEnvelope<Banner>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    })
    public async getBanner(): Promise<ResponseEnvelope<Banner | null>> {
        const success = {
            "code": 200,
            "error": false,
            "message": "",
            "data": {
                id: 1,
                title: "Test Banner",
                description: "This is a test banner",
                picture: "https://example.com/banner.jpg"
            }
        }
    
        const empty = {
            "code": 200,
            "error": false,
            "message": "",
            "data": null
        }
        return success
    }

    /**
     * Create a PPDB Banner, will return an error if a banner is already exist
     * @summary Create Banner
     */
    @Post("")
    @Example<ResponseEnvelope<Banner>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    })
    @Response<ResponseEnvelope<{banner_duplicated: string}>>(403, "Banner already exist", {
        "code": 403,
        "error": true,
        "message": "Only one banner allowed on each province/city/foundation and school level (Elementary School, Middle School, High School)",
        "data": {
            banner_duplicated: "Only one banner allowed on each province/city/foundation and school level (Elementary School, Middle School, High School)"
        }
    })
    public async createBanner(
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFile() picture: File
    ): Promise<ResponseEnvelope<Banner>> {
        const success = {
            "code": 200,
            "error": false,
            "message": "Success",
            "data": {
                id: 1,
                title: "Test Banner",
                description: "This is a test banner",
                picture: "https://example.com/banner.jpg"
            }
        }
        return success
    }

    /**
     * Update a PPDB Banner
     * @summary Update Banner
     */
    @Patch("{id}")
    @Example<ResponseEnvelope<Banner>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    })
    public async updateBanner(
        id: number,
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFile() picture: string | File
    ): Promise<ResponseEnvelope<Banner>> {
        const success = {
            "code": 200,
            "error": false,
            "message": "Success",
            "data": {
                id: 1,
                title: "Test Banner",
                description: "This is a test banner",
                picture: "https://example.com/banner.jpg"
            }
        }
        return success
    }
}