export type Announcement = {
    id: number;
    title: string;
    description: string;
    file: string | File;
    /**
     * ISO 8601 date-time string
     * @format date-time
     * @example 2021-01-01T00:00:00Z
     */
    created_at: string;
}