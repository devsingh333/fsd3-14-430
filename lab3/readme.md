http - Hyper Text Transfer Protocol
html - Hyper Text Markup Language
css - Cascade Style Sheet
npm - node package manager

# status codes:
> 200 - ok
> 201 - created
> 400 - bad request
> 401 - unauthorized
> 403 - forbidden
> 404 - not found
 
# any api can be of 4 types : 
1 get - read
2 post - create
3 put/patch - update
4 delete - delete

api can be response by server with statusCode or jsonData.
Api can be started by /api/version
Eg: /api/v2/products/2169
    /api/v1/product?s=mobile

to post, put/patch, delete we require frontend or 3rd party api tester like postman, thunderclient, echoapi