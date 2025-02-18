import { PaginatedResponseEnvelope } from "../type/response";
import { User, UserType } from "../type/user";
import { Controller, Get, Query, Route, Tags } from "tsoa";

@Route("ppdb/users/")
@Tags("User")
export class UserController extends Controller {

    /**
     * Get All Users paginated
     * @summary Get all users
     * @param page Page number
     * @param page_size Number of items per page
     * @param search Search keyword
     * @param types filter by user types
     * @param username search by username
     */
    @Get("")
    async getUsers(
        @Query() page: number = 1,
        @Query() page_size: number = 10,
        @Query() search?: string,
        @Query() username?: string,
        @Query() user_type?: UserType[], // Array of UserType
    ): Promise<PaginatedResponseEnvelope<User>> {
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
                    type: UserType.ADMIN,
                    username: "admin",
                    first_name: "Admin",
                    last_name: "Admin",
                    email: "",
                    school: "School 1"
                }
            ]
        }
    }
}