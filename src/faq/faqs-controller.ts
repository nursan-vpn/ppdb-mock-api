import { generateFaq, generateFaqs } from "../faker/generator";
import { FAQ } from "../type/faq";
import { PaginatedResponseEnvelope, ResponseEnvelope, ValidationError } from "../type/response";
import { Body, Controller, Delete, Example, Get, Post, Put, Query, Response, Route, Tags } from "tsoa";

@Route("v2/ppdb/faqs/")
@Tags("CMS","FAQs")
export class FaqsController extends Controller {

    /**
     * Get list of FAQs paginated
     * @summary Get FAQs
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<FAQ>>({
        "code": 200,
        "error": false,
        "message": "",
        "count": 100,
        "next": "",
        "previous": "",
        "data": [
            {
                id: 1,
                title: "Test Question",
                description: "This is a test question",
            }
        ]
    })
    public async getFaqs(
        @Query() page: number = 1,
        @Query() page_size: number = 10
    ): Promise<PaginatedResponseEnvelope<FAQ>> {
        const data = generateFaqs(page_size);
        return {
            code: 200,
            error: false,
            message: "",
            count: 100,
            next: "",
            previous: "",
            data: data,
        }
    }


    /**
     * Add a new FAQ
     * @summary Add FAQ
     */
    @Post("")
    @Example<ResponseEnvelope<FAQ>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Question",
            description: "This is a test question",
        }
    })
    @Response<ValidationError<FAQ>>(400, "Validation Error", {
        "code": 400,
        "error": true,
        "message": "Validation Error",
        "data": {
            "title": ["Title is required"],
            "description": ["Description is required"]
        }
    })
    public async addFaqs(
        @Body() body: Omit<FAQ, "id">
    ): Promise<ResponseEnvelope<FAQ>> {
        const data = generateFaq()

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    error: false,
                    message: "",
                    data: data
                })
            }, 2000)
        })
    }

    /**
     * Get a FAQ by ID
     * @summary Get FAQ
     */
    @Get("{id}")
    @Example<ResponseEnvelope<FAQ>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Question",
            description: "This is a test question",
        }
    })
    public async getFaq(id: number): Promise<ResponseEnvelope<FAQ>> {
        const data = generateFaq()
        return {
            code: 200,
            error: false,
            message: "",
            data: data
        }
    }

    /**
     * Update a FAQ by ID
     * @summary Update FAQ
     */
    @Put("{id}")
    @Example<ResponseEnvelope<FAQ>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Question",
            description: "This is a test question",
        }
    })
    @Response<ValidationError<FAQ>>(400, "Validation Error", {
        "code": 400,
        "error": true,
        "message": "Validation Error",
        "data": {
            "title": ["Title is required"],
            "description": ["Description is required"]
        }
    })
    public async updateFaq(
        id: number,
        @Body() body: Omit<FAQ, "id">
    ): Promise<ResponseEnvelope<FAQ>> {
        console.log("Updating FAQ", id)
        const data = generateFaq()

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    error: false,
                    message: "",
                    data: data
                })
            }, 2000)
        })
    }


    /**
     * Delete a FAQ by ID
     * @summary Delete FAQ
     */
    @Delete("{id}")
    @Example<ResponseEnvelope<null>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": null
    })
    public async deleteFaq(id: number): Promise<ResponseEnvelope<null>> {
        return {
            code: 200,
            error: false,
            message: "",
            data: null
        }
    }

}