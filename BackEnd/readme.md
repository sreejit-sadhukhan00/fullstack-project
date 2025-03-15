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

# /maps/get-coordinates Endpoint Documentation

## Description
Fetches the coordinates (latitude and longitude) for a given address.  
On success, it returns a 200 status code along with the coordinates.

## Request Method
GET

## Endpoint
/maps/get-coordinates

## Required Data Format
The request should include the address as a query parameter:
```
/maps/get-coordinates?address=string
```

## Status Codes
- **200**: Coordinates fetched successfully.
- **400**: Validation errors or missing/invalid address.
- **500**: Internal server error.

## Notes
- The endpoint requires authentication via a valid access token.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": 200,
    "data": {
        "lat": "NUMBER",
        "lng": "NUMBER"
    },
    "message": "coordinate fetched"
}
```

# /maps/get-distance-time Endpoint Documentation

## Description
Fetches the distance and estimated travel time between two locations.  
On success, it returns a 200 status code along with the distance and time.

## Request Method
GET

## Endpoint
/maps/get-distance-time

## Required Data Format
The request should include the origin and destination as query parameters:
```
/maps/get-distance-time?origin=string&destination=string
```

## Status Codes
- **200**: Distance and time fetched successfully.
- **400**: Validation errors or missing/invalid origin or destination.
- **500**: Internal server error.

## Notes
- The endpoint requires authentication via a valid access token.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": 200,
    "data": {
        "distance": {
            "text": "STRING",
            "value": "NUMBER"
        },
        "duration": {
            "text": "STRING",
            "value": "NUMBER"
        }
    },
    "message": "fetched"
}
```

# /maps/get-suggestions Endpoint Documentation

## Description
Fetches autocomplete suggestions for a given input string.  
On success, it returns a 200 status code along with the suggestions.

## Request Method
GET

## Endpoint
/maps/get-suggestions

## Required Data Format
The request should include the input string as a query parameter:
```
/maps/get-suggestions?input=string
```

## Status Codes
- **200**: Suggestions fetched successfully.
- **400**: Validation errors or missing/invalid input.
- **500**: Internal server error.

## Notes
- The endpoint requires authentication via a valid access token.

## Example Response

On success, the endpoint returns a JSON response similar to:

```json
{
    "statusCode": true,
    "data": [
        {
            "description": "Super Residency, Shaikpet Road, Al-Hamra Colony, AP Animal Husbandry Employees Colony, Shaikpet, Hyderabad, Telangana, India",
            "matched_substrings": [
                {
                    "length": 15,
                    "offset": 0
                }
            ],
            "place_id": "ChIJQXqxyruWyzsRbmlgvM01VEM",
            "reference": "ChIJQXqxyruWyzsRbmlgvM01VEM",
            "structured_formatting": {
                "main_text": "Super Residency",
                "main_text_matched_substrings": [
                    {
                        "length": 15,
                        "offset": 0
                    }
                ],
                "secondary_text": "Shaikpet Road, Al-Hamra Colony, AP Animal Husbandry Employees Colony, Shaikpet, Hyderabad, Telangana, India"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "Super Residency"
                },
                {
                    "offset": 17,
                    "value": "Shaikpet Road"
                },
                {
                    "offset": 32,
                    "value": "Al-Hamra Colony"
                },
                {
                    "offset": 49,
                    "value": "AP Animal Husbandry Employees Colony"
                },
                {
                    "offset": 87,
                    "value": "Shaikpet"
                },
                {
                    "offset": 97,
                    "value": "Hyderabad"
                },
                {
                    "offset": 108,
                    "value": "Telangana"
                },
                {
                    "offset": 119,
                    "value": "India"
                }
            ],
            "types": [
                "premise",
                "geocode"
            ]
        },
        {
            "description": "Super residency, Basanta Lal Saha Road, Mahabirtala, Ajoy Nagar, Buroshibtalla, Tollygunge, Kolkata, West Bengal, India",
            "matched_substrings": [
                {
                    "length": 15,
                    "offset": 0
                }
            ],
            "place_id": "ChIJw7_ySIVxAjoRfWDvVf9jGec",
            "reference": "ChIJw7_ySIVxAjoRfWDvVf9jGec",
            "structured_formatting": {
                "main_text": "Super residency",
                "main_text_matched_substrings": [
                    {
                        "length": 15,
                        "offset": 0
                    }
                ],
                "secondary_text": "Basanta Lal Saha Road, Mahabirtala, Ajoy Nagar, Buroshibtalla, Tollygunge, Kolkata, West Bengal, India"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "Super residency"
                },
                {
                    "offset": 17,
                    "value": "Basanta Lal Saha Road"
                },
                {
                    "offset": 40,
                    "value": "Mahabirtala"
                },
                {
                    "offset": 53,
                    "value": "Ajoy Nagar"
                },
                {
                    "offset": 65,
                    "value": "Buroshibtalla"
                },
                {
                    "offset": 80,
                    "value": "Tollygunge"
                },
                {
                    "offset": 92,
                    "value": "Kolkata"
                },
                {
                    "offset": 101,
                    "value": "West Bengal"
                },
                {
                    "offset": 114,
                    "value": "India"
                }
            ],
            "types": [
                "establishment",
                "point_of_interest"
            ]
        },
        {
            "description": "The Super Residency, Nizamuddin, Block D, Nizamuddin West, New Delhi, Delhi, India",
            "matched_substrings": [
                {
                    "length": 15,
                    "offset": 4
                }
            ],
            "place_id": "ChIJGWKFoQPjDDkR_lns549bvM8",
            "reference": "ChIJGWKFoQPjDDkR_lns549bvM8",
            "structured_formatting": {
                "main_text": "The Super Residency",
                "main_text_matched_substrings": [
                    {
                        "length": 15,
                        "offset": 4
                    }
                ],
                "secondary_text": "Nizamuddin, Block D, Nizamuddin West, New Delhi, Delhi, India"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "The Super Residency"
                },
                {
                    "offset": 21,
                    "value": "Nizamuddin"
                },
                {
                    "offset": 33,
                    "value": "Block D"
                },
                {
                    "offset": 42,
                    "value": "Nizamuddin West"
                },
                {
                    "offset": 59,
                    "value": "New Delhi"
                },
                {
                    "offset": 70,
                    "value": "Delhi"
                },
                {
                    "offset": 77,
                    "value": "India"
                }
            ],
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ]
        },
        {
            "description": "Super Residency, 40 Feet Road, Lakshmi Nagar, Porur, Chennai, Tamil Nadu, India",
            "matched_substrings": [
                {
                    "length": 15,
                    "offset": 0
                }
            ],
            "place_id": "ChIJv74dZh9hUjoR3D4zy_mBfAQ",
            "reference": "ChIJv74dZh9hUjoR3D4zy_mBfAQ",
            "structured_formatting": {
                "main_text": "Super Residency",
                "main_text_matched_substrings": [
                    {
                        "length": 15,
                        "offset": 0
                    }
                ],
                "secondary_text": "40 Feet Road, Lakshmi Nagar, Porur, Chennai, Tamil Nadu, India"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "Super Residency"
                },
                {
                    "offset": 17,
                    "value": "40 Feet Road"
                },
                {
                    "offset": 31,
                    "value": "Lakshmi Nagar"
                },
                {
                    "offset": 46,
                    "value": "Porur"
                },
                {
                    "offset": 53,
                    "value": "Chennai"
                },
                {
                    "offset": 62,
                    "value": "Tamil Nadu"
                },
                {
                    "offset": 74,
                    "value": "India"
                }
            ],
            "types": [
                "point_of_interest",
                "establishment"
            ]
        },
        {
            "description": "Super Residency 3, Muscat, Oman",
            "matched_substrings": [
                {
                    "length": 15,
                    "offset": 0
                }
            ],
            "place_id": "ChIJ_wxyURcAjj4RKpq1a4tWtiE",
            "reference": "ChIJ_wxyURcAjj4RKpq1a4tWtiE",
            "structured_formatting": {
                "main_text": "Super Residency 3",
                "main_text_matched_substrings": [
                    {
                        "length": 15,
                        "offset": 0
                    }
                ],
                "secondary_text": "Muscat, Oman"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "Super Residency 3"
                },
                {
                    "offset": 19,
                    "value": "Muscat"
                },
                {
                    "offset": 27,
                    "value": "Oman"
                }
            ],
            "types": [
                "point_of_interest",
                "establishment"
            ]
        }
    ],
    "message": "fetched"
}
```
