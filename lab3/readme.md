http - Hyper Text Transfer Protocol
html - Hyper Text Markup Language
css - Cascade Style Sheet
npm - node package manager

# status codes:
> 200 - ok
> 201 - created
> 202 - acepted
> 204 - no content
> 400 - bad request
> 401 - unauthorized
> 403 - forbidden
> 404 - not found
> 500 - internal server error
> 503 - service unavailable
 
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


## server can send data
1. html content
2. html files
3. json
4. plain text
5. css
6. jss
7. files



## server can set header to send data
1. res.writeHeader()
2. res.setHeader()

## server can set status code
1. res.statusCode()
2. res.writeHeader()


## request methods
1. get
2. post
3. put/patch
4. delete