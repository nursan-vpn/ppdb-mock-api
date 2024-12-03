import { faker } from "@faker-js/faker/.";
import { Announcement } from "../type/announcement";
import { PaginatedResponseEnvelope, ResponseEnvelope } from "../type/response";
import { Body, Delete, Example, Get, Post, Put, Query, Route, Tags } from "tsoa";

@Route("ppdb/announcements")
@Tags("Announcement")
export class AnnouncementController {
    
    /**
     * 
     * @summary Get all announcements
     */
    @Get("")
    @Example<PaginatedResponseEnvelope<Announcement>>({
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
                title: "Announcement 1",
                description: "This is the first announcement",
                file: "announcement1.pdf",
                created_at: "2021-01-01T00:00:00Z"
            }
        ]
    })
    public async getAnnouncements(
        @Query() page: number = 1,
        @Query() page_size: number = 10
    ): Promise<PaginatedResponseEnvelope<Announcement>> {
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
                    title: "Announcement 1",
                    description: "This is the first announcement",
                    file: "announcement1.pdf",
                    created_at: "2021-01-01T00:00:00Z"
                }
            ]
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
            created_at: "2021-01-01T00:00:00Z"
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
                created_at: "2021-01-01T00:00:00Z"
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
            created_at: "2021-01-01T00:00:00Z"
        }
    })
    public async createAnnouncement(
        @Body() announcement: Omit<Announcement, "id" | "created_at">
    ): Promise<ResponseEnvelope<Announcement>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                ...announcement,
                created_at: faker.date.recent().toISOString(),
                id: 1
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
            created_at: "2021-01-01T00:00:00Z"
        }
    })
    public async updateAnnouncement(
        id: number,
        @Body() announcement: Omit<Announcement, "created_at" | "id">
    ): Promise<ResponseEnvelope<Announcement>> {
        return {
            code: 200,
            error: false,
            message: "Success",
            data: {
                ...announcement,
                id: 1,
                created_at: faker.date.recent().toISOString()
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