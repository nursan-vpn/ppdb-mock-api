import { faker } from "@faker-js/faker";
import { Announcement } from "../type/announcement";
import { PaginatedResponseEnvelope, ResponseEnvelope, ValidationError } from "../type/response";
import { Body, Delete, Example, FormField, Get, Post, Put, Query, Response, Route, Tags, UploadedFile } from "tsoa";
import { generateAnnouncements } from "../faker/generator";

@Route("ppdb/announcements/")
@Tags("Announcement")
export class AnnouncementController {
    
    /**
     * Get All Announcements paginated
     * @summary Get all announcements
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<Announcement>>({
        code: 200,
        error: false,
        message: "Success",
        count: 100,
        next: "",
        previous: "",
        data: [
            {
                id: 1,
                title: "Announcement 1",
                description: "This is the first announcement",
                file: "announcement1.pdf",
                created_at: "2021-01-01T00:00:00Z",
                updated_at: "2021-01-01T00:00:00Z",
                created_by: "admin"
            }
        ]
    })
    public async getAnnouncements(
        @Query() page: number = 1,
        @Query() page_size: number = 10
    ): Promise<PaginatedResponseEnvelope<Announcement>> {
        const data = generateAnnouncements(page_size);
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

    /**
     * 
     * @summary Get an announcement
     */
    @Get("{id}")
    @Example<ResponseEnvelope<Announcement>>({
        code: 200,
        error: false,
        message: "Success",
        data: {
            id: 1,
            title: "Announcement 1",
            description: "This is the first announcement",
            file: "announcement1.pdf",
            created_at: "2021-01-01T00:00:00Z",
            updated_at: "2021-01-01T00:00:00Z",
            created_by: "admin"
        }
    })
    public async getAnnouncement(id: number): Promise<ResponseEnvelope<Announcement>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                id: 1,
                title: "Announcement 1",
                description: "This is the first announcement",
                file: "announcement1.pdf",
                created_at: "2021-01-01T00:00:00Z",
                updated_at: "2021-01-01T00:00:00Z",
                created_by: "admin"
            }
        }
    }


    /**
     * 
     * @summary Create an announcement
     */
    @Post()
    @Example<ResponseEnvelope<Announcement>>({
        code: 200,
        error: false,
        message: "Success",
        data: {
            id: 1,
            title: "Announcement 1",
            description: "This is the first announcement",
            file: "announcement1.pdf",
            created_at: "2021-01-01T00:00:00Z",
            updated_at: "2021-01-01T00:00:00Z",
            created_by: "admin"
        }
    })
    @Response<ValidationError<AnnouncementPayload>>("400", "Validation Error",{
        code: 400,
        error: true,
        message: "Validation Error",
        data: {
            title: ["Title is required"],
            description: ["Description is required"]
        }
    })
    @Response<ValidationError<AnnouncementPayload>>("400", "Duplicate Title",{
        code: 400,
        error: true,
        message: "Title is duplicate",
        data: {}
    })
    public async createAnnouncement(
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFile() file?: File | string
    ): Promise<ResponseEnvelope<Announcement>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                id: 1,
                title: title,
                description: description,
                file: faker.internet.url() + "/" + faker.system.fileName(),
                created_at: faker.date.recent().toISOString(),
                updated_at: faker.date.recent().toISOString(),
                created_by: "admin"
            }
        }
    }


    /**
     * 
     * @summary Update an announcement
     */
    @Put("{id}")
    @Example<ResponseEnvelope<Announcement>>({
        code: 200,
        error: false,
        message: "Success",
        data: {
            id: 1,
            title: "Announcement 1",
            description: "This is the first announcement",
            file: "announcement1.pdf",
            created_at: "2021-01-01T00:00:00Z",
            updated_at: "2021-01-01T00:00:00Z",
            created_by: "admin"
        }
    })
    @Response<ValidationError<AnnouncementPayload>>("400", "Validation Error",{
        code: 400,
        error: true,
        message: "Validation Error",
        data: {
            title: ["Title is required"],
            description: ["Description is required"]
        }
    })
    public async updateAnnouncement(
        id: number,
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFile() file?: File | string
    ): Promise<ResponseEnvelope<Announcement>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                title: title,
                description: description,
                file: faker.internet.url() + "/" + faker.system.fileName(),
                id: id,
                created_at: faker.date.recent().toISOString(),
                updated_at: faker.date.recent().toISOString(),
                created_by: "admin"
            }
        }
    }


    @Delete("{id}")
    @Example<ResponseEnvelope<null>>({
        code: 200,
        error: false,
        message: "Success",
        data: null
    })
    public async deleteAnnouncement(id: number): Promise<ResponseEnvelope<null>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: null
        }
    }

}

type AnnouncementPayload = {
    title: string;
    description: string;
    file?: File | string;
}