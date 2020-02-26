#graphql-examplo

$ npm install

run com  GraphiQL
$ npm run dev

run com static html
$ npm start


exemplo: 

{
        prodcate(category: "A") {
            id
            name
            
        }
    }
    ou 
    
    {
      products{
       { id
         category
         name
         preco
         limit
      }
    }
