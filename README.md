# Products-Directory-Backend

<a href="https://nameless-inlet-35857.herokuapp.com/ ">Live Demo</a>

- **Tech-stack**

---

`Node.js`
`Express.js`
`MongoDb`
`JavaScript`

</br>

- **Implemenation of the REST API**

---

```sh
/products
/getproducts
/editProduct
/deleteProduct
/exportToCSV
```
  <p>
  Deals with the CRUD operation of the data of the inventory items
  </p> 
 
----- 
- **Data Params**

  **Required:**

  `Item Name=[String]`
  `Item Category=[Email]`
  `Item Stock=[integer]`
  `Item Id=[integer]`
  `Item Price=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{sucess: "true", message: "Your Requested has been accepted" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{success: "false", message : "Could not process the request, Try again" }`

</br>
