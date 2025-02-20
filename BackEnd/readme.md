# /users/register Endpoint Documentation

## Description
Registers a new user by accepting user details and creating an account.  
On success, it returns a 200 status code along with a user object and an access token.  

## Request Method
POST

## Endpoint
/users/register

## Required Data Format
The request body should be sent as JSON with the following structure:
```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string (optional, min 3 characters if provided)"
  },
  "email": "string (valid email format)"
}
```

## Status Codes
- **200**: User created successfully.
- **400**: Validation errors or user already exists.
- **401**: Missing required fields.

## Notes
- The endpoint validates the presence of `firstname`, `email`, and `password`.
- Passwords are hashed before storing in the database.
- An HTTP-only cookie named `accesstoken` is set on success.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": {
        "createdUser": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        },
        "token": "STRING"
    },
    "message": "STRING"
}
```

# /users/login Endpoint Documentation

## Description
Logs in an existing user by validating their credentials.  
On success, it returns a 200 status code along with a user object and an access token.

## Request Method
POST

## Endpoint
/users/login

## Required Data Format
The request body should be sent as JSON with the following structure:
```json
{
  "email": "string (valid email format)",
  "password": "string (min 8 characters)"
}
```

## Status Codes
- **200**: User logged in successfully.
- **400**: Validation errors or incorrect credentials.
- **401**: Missing required fields.

## Notes
- The endpoint validates the presence of `email` and `password`.
- An HTTP-only cookie named `accesstoken` is set on success.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": {
        "user": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        },
        "token": "STRING"
    },
    "message": "STRING"
}
```

# /users/profile Endpoint Documentation

## Description
Fetches the profile information of the authenticated user.  
On success, it returns a 200 status code along with the user object.

## Request Method
GET

## Endpoint
/users/profile

## Required Data Format
No request body is required. The request must include a valid access token in the cookies.

## Status Codes
- **200**: User profile fetched successfully.
- **401**: Unauthorized access or missing/invalid token.

## Notes
- The endpoint requires authentication via a valid access token.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": {
        "user": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        }
    },
    "message": "STRING"
}
```
````
