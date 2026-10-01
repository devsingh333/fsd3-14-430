# Frontend - Backend

1. Create frontend
2. create frontend, backend folder within project folder
3. open terminal and split it into two
4. open frontend into the left side terminal
5. open backend into right side terminal
6. in backend:
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend, update `type to module` and script
7. in frontend:
    a. npm create vite@latest
    b. enter . as project name
    c. select framework as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend    

## Components:
1. Simple js functions return html directly
2. it must start with capital letter 
3. it should be treated as html tag   
4. it must be closed 


## Object destructure :

    ```
    const {bname, price, quantity, rating, picUrl} = props.book;

    ```
    Does not depend on order, if property is not availabe then it initializes with null.
    Any components include styles : 
        1. external css - create class in index.css and use in component
        2. internal css - create property as object like :
        ```
          const qtyStyle = {
            fontSize: "1rem",
            textAlign:"center",
            backgroundColor:"yellow",
            padding: "10px",
        };

        ```

        3. inline css - in this, we use 2 curly brackets with style atrribute and all the css property mus be single word(it should be textAlign ... not text-align)


