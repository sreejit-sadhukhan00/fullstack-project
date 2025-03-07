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

# /users/logout Endpoint Documentation

## Description
Logs out the authenticated user by invalidating their access token.  
On success, it returns a 200 status code and clears the access token cookie.

## Request Method
GET

## Endpoint
/users/logout

## Required Data Format
No request body is required. The request must include a valid access token in the cookies.

## Status Codes
- **200**: User logged out successfully.
- **401**: Unauthorized access or missing/invalid token.

## Notes
- The endpoint requires authentication via a valid access token.
- The access token is added to a blacklist to prevent further use.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "message": "User logged out successfully"
}
```

# /captain/register Endpoint Documentation

## Description
Registers a new captain by accepting captain details and creating an account.  
On success, it returns a 200 status code along with a captain object and an access token.

## Request Method
POST

## Endpoint
/captain/register

## Required Data Format
The request body should be sent as JSON with the following structure:
```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string (optional, min 3 characters if provided)"
  },
  "email": "string (valid email format)",
  "password": "string (min 8 characters)",
  "vehicle": {
    "color": "string (min 3 characters)",
    "plate": "string (min 7 characters)",
    "capacity": "number (min 1)",
    "vehicleType": "string (one of 'car', 'motorcycle', 'auto')"
  }
}
```

## Status Codes
- **200**: Captain created successfully.
- **400**: Validation errors or captain already exists.
- **401**: Missing required fields.

## Notes
- The endpoint validates the presence of `firstname`, `email`, `password`, and vehicle details.
- Passwords are hashed before storing in the database.
- An HTTP-only cookie named `accesstoken` is set on success.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": {
        "createdcaptain": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "vehicle": {
                "color": "STRING",
                "plate": "STRING",
                "capacity": "NUMBER",
                "vehicleType": "STRING"
            },
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        },
        "token": "STRING"
    },
    "message": "captain register successfully"
}
```

# /captain/login Endpoint Documentation

## Description
Logs in an existing captain by validating their credentials.  
On success, it returns a 200 status code along with a captain object and an access token.

## Request Method
POST

## Endpoint
/captain/login

## Required Data Format
The request body should be sent as JSON with the following structure:
```json
{
  "email": "string (valid email format)",
  "password": "string (min 8 characters)"
}
```

## Status Codes
- **200**: Captain logged in successfully.
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
        "loggedInUser": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "vehicle": {
                "color": "STRING",
                "plate": "STRING",
                "capacity": "NUMBER",
                "vehicleType": "STRING"
            },
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        },
        "token": "STRING"
    },
    "message": "captain logged in successfully"
}
```

# /captain/profile Endpoint Documentation

## Description
Fetches the profile information of the authenticated captain.  
On success, it returns a 200 status code along with the captain object.

## Request Method
GET

## Endpoint
/captain/profile

## Required Data Format
No request body is required. The request must include a valid access token in the cookies.

## Status Codes
- **200**: Captain profile fetched successfully.
- **401**: Unauthorized access or missing/invalid token.

## Notes
- The endpoint requires authentication via a valid access token.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": {
        "captain": {
            "fullname": {
                "firstname": "STRING",
                "lastname": "STRING"
            },
            "_id": "STRING",
            "email": "STRING",
            "vehicle": {
                "color": "STRING",
                "plate": "STRING",
                "capacity": "NUMBER",
                "vehicleType": "STRING"
            },
            "createdAt": "STRING",
            "updatedAt": "STRING",
            "__v": number
        }
    },
    "message": "Captain's data fetched successfully"
}
```

# /captain/logout Endpoint Documentation

## Description
Logs out the authenticated captain by invalidating their access token.  
On success, it returns a 200 status code and clears the access token cookie.

## Request Method
GET

## Endpoint
/captain/logout

## Required Data Format
No request body is required. The request must include a valid access token in the cookies.

## Status Codes
- **200**: Captain logged out successfully.
- **401**: Unauthorized access or missing/invalid token.

## Notes
- The endpoint requires authentication via a valid access token.
- The access token is added to a blacklist to prevent further use.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "message": "captain logged out successfully"
}
```
