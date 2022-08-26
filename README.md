```bash
npx sequelize-cli model:generate --name customer --attributes name:string,phone:string

npx sequelize-cli model:generate --name transaction --attributes product_Id:integer,totalPrice:integer,customer_Id:integer

npx sequelize-cli model:generate --name product --attributes name:string,description:string,brand_Id:integer,image:string,size:integer,price:integer,stock:integer

npx sequelize-cli model:generate --name brand --attributes name:string,category_Id:integer

npx sequelize-cli model:generate --name category --attributes name:string
```

resto_to_driver
