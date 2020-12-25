# Standalone-Backend
This is a Standalone Backend created by modifing my previous MERN skelaton. It supports all CRUD operations with AUTHorization and AUTHentication for user.
## Install dependencies
`yarn`
## RUN in development mode
`yarn development`
> open localhost:3000 in browser
## Check all API endpoints using postman
### Create
>Post request to /api/users with name, email and password in the body in json format 
### Read
#### All users
>Get request to /api/users
## Operations that need Authorization and Authentication 
#### Specific user
>Get request to /api/users/:userId with header Authorization : Bearer Auth token (Auth token required for this operation get it by signing in)
### Update
>Put request to /api/users/:userId with header Authorization : Bearer Auth token (Auth token required for this operation get it by signing in)
### Delete
>Delete request to /api/users/:userId with header Authorization : Bearer Auth token (Auth token required for this operation get it by signing in)
##### Sign In
>Post request to /auth/signin with email and password in the body in json format
>You will get the Auth token in the response
