export type Announcement = {
    id: number;
    title: string;
    /**
     * This is an HTML string
     */
    description: string;
    file?: string | File;
    /**
     * ISO 8601 date-time string
     * @format date-time
     * @example 2021-01-01T00:00:00Z
     */
    created_at: string;
    /**
     * ISO 8601 date-time string
     * @format date-time
     * @example 2021-01-01T00:00:00Z
     */
    updated_at: string;
    created_by: string;
    deleted_at?: string | null;
}