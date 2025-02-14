export type ResponseEnvelope<T> = T;

export interface PaginatedResponseEnvelope<T> {
    /**
     * Total number of items
     */
    count: number;
    /**
     * Url of the next page
     */
    next: string | null;
    /**
     * Url of the previous page
     */
    previous: string | null;
    results: T[];
}


export interface ValidationError<T> {
    /**
     * HTTP Response code
     */
    code: 400;
    /**
     * Error flag
     */
    error: true;
    /**
     * Message
     */
    message: string;
    /**
     * Key value pair of field and error messages
     */
    detail: {
        [field in keyof T]?: string[];
    };
}

