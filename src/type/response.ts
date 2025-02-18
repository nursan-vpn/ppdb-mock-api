export interface ResponseEnvelope<T> {
    /**
     * HTTP Response code
     */
    code: number;
    /**
     * Error flag
     */
    error: boolean;
    /**
     * Message
     */
    message: string;
    data: T;
}

export interface PaginatedResponseEnvelope<T> {
     /**
     * HTTP Response code
     */
     code: number;
     /**
      * Error flag
      */
     error: boolean;
     /**
      * Message
      */
     message: string;
    /**
     * Number of the returned items
     */
    array_count: number;
    /**
     * Total number of items
     */
    total_items: number;
    /**
     * Number of items per page
     */
    page_size: number
    /**
     * Url of the next page
     */
    next: string;
    /**
     * Url of the previous page
     */
    previous: string;
    data: T[];
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

