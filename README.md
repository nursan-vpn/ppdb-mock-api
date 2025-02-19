# API v2 Metadata Contract

This document outlines the structure and details of the API v2 metadata contract, including success responses, paginated data, and error responses.

## Success Response Metadata

### Non-Paginated Data

This section describes the structure of a successful response when the data is not paginated.

```ts
{
    code: number;
    message: string;
    error: boolean;
    data: any | null;
}
```

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Is Mandatory?</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>code</td>
            <td>number</td>
            <td>Yes</td>
            <td>Reflect HTTP status code</td>
        </tr>
        <tr>
            <td>message</td>
            <td>string</td>
            <td>Yes</td>
            <td>Short message about the response</td>
        </tr>
        <tr>
            <td>error</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Always false</td>
        </tr>
        <tr>
            <td>data</td>
            <td>any | null</td>
            <td>Yes</td>
            <td>Response data, set to null if there is no data expected</td>
        </tr>
    </tbody>
</table>

**Example:**

```ts
{
    code: 200,
    message: "",
    error: false,
    data: {
        the_actual_data: "you_want_to_return"
    }
}
```

**Example with no data expected:**

```ts
{
    code: 200,
    message: "",
    error: false,
    data: null
}
```

### Paginated Data

This section describes the structure of a successful response when the data is paginated.

```ts
{
    code: number;
    message: string;
    error: boolean;
    count: number;
    next: string;
    previous: string;
    data: [];
    extra_data?: any;
}
```

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Is Mandatory?</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>code</td>
            <td>number</td>
            <td>Yes</td>
            <td>Reflect HTTP status code</td>
        </tr>
        <tr>
            <td>message</td>
            <td>string</td>
            <td>Yes</td>
            <td>Short message about the response</td>
        </tr>
        <tr>
            <td>error</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Always false</td>
        </tr>
        <tr>
            <td>count</td>
            <td>number</td>
            <td>Yes</td>
            <td>Total number of items</td>
        </tr>
        <tr>
            <td>next</td>
            <td>string</td>
            <td>Yes</td>
            <td>Next page URL</td>
        </tr>
        <tr>
            <td>previous</td>
            <td>string</td>
            <td>Yes</td>
            <td>Previous page URL</td>
        </tr>
        <tr>
            <td>data</td>
            <td>array</td>
            <td>Yes</td>
            <td>Response data</td>
        </tr>
        <tr>
            <td>extra_data</td>
            <td>any</td>
            <td>No</td>
            <td>Extra data, optional</td>
        </tr>
    </tbody>
</table>

**Example:**

```ts
{
    code: 200,
    message: "",
    error: false,
    count: 100,
    next: "url_to_next_page",
    previous: "url_to_previous_page",
    data: [
        {
            the_actual_data: "you_want_to_return"
        }
    ]
}
```

**Example with extra data:**

```ts
{
    code: 200,
    message: "",
    error: false,
    count: 100,
    next: "url_to_next_page",
    previous: "url_to_previous_page",
    data: [
        {
            the_actual_data: "you_want_to_return"
        }
    ],
    extra_data: {
        key: "value"
    }
}
```

## Error Response

This section describes the structure of an error response.

```ts
{
    code: number;
    message: string;
    error: boolean;
    data: any | null;
}
```

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Data type</th>
            <th>Is Mandatory?</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>code</td>
            <td>number</td>
            <td>Yes</td>
            <td>Reflect HTTP status code</td>
        </tr>
        <tr>
            <td>message</td>
            <td>string</td>
            <td>Yes</td>
            <td>Short message about the error</td>
        </tr>
        <tr>
            <td>error</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Always true</td>
        </tr>
        <tr>
            <td>data</td>
            <td>any | null</td>
            <td>Yes</td>
            <td>Additional data about the error, null if there is no data expected</td>
        </tr>
    </tbody>
</table>

**Example:**

```ts
{
    code: 500,
    message: "Internal server error",
    error: true,
    data: null
}
```

**Example error with additional data:**

```ts
{
    code: 400,
    message: "Validation error",
    error: true,
    data: {
        username: "username is required"
    }
}
```
