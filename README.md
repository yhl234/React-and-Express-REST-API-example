# React and Express REST API example

### API Documentation

### **Show Orders**

Returns json data about all orders.

- **URL**

  /api/orders

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `[ { "_id": "5ee59cd7d49994e43ebd009b", "name": "Louis", "phone": "312543", "time": "2020-06-14T03:43:05.487Z", "numOfPeople": 2, "email": "test@test.com"},]`

- **Error Response:**

  - **Code:** 400 <br />

- **Sample Call:**

  ```javascript
  fetch(`api/orders`).then((res) => res.json());
  ```

---

### **Show An Order by ID**

Returns json data about an order associate with an ID.

- **URL**

  /api/orders/:\_id

- **Method:**

  `GET`

- **URL Params**

  **Required:** `_id=[string]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{ "_id": "5ee59cd7d49994e43ebd009b", "name": "Louis", "phone": "312543", "time": "2020-06-14T03:43:05.487Z", "numOfPeople": 2, "email": "test@test.com"}`

* **Error Response:**

  - **Code:** 400 <br />

* **Sample Call:**

  ```javascript
  fetch(`api/orders/123`).then((res) => {
  	return res.json();
  });
  ```

---

### **Search Orders**

Returns json data about orders associated with a phone number.

- **URL**

  /api/orders/search/:phone

- **Method:**

  `GET`

- **URL Params**

  **Required:** `phone=[string]`

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{ "_id": "5ee59cd7d49994e43ebd009b", "name": "Louis", "phone": "312543", "time": "2020-06-14T03:43:05.487Z", "numOfPeople": 2, "email": "test@test.com"}`

* **Error Response:**

  - **Code:** 400 <br />

* **Sample Call:**

  ```javascript
  fetch(`api/orders/search/123`).then((res) => res.json());
  ```

---

### **Add New Orders**

Create a new order

- **URL**

  /api/orders/add

- **Method:**

  `POST`

- **URL Params**

  None

* **Data Params**

  `{ name:[string], phone:[string], email:[string], time:[Date], numOfPeople:[Number] }`

* **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    `{ message: 'Order created successfully!', order: result,}`

* **Error Response:**

  - **Code:** 400 <br />

* **Sample Call:**

  ```javascript
  fetch(`api/orders/add/`, {
  	method: "POST",
  	headers: {
  		"Content-Type": "application/json",
  	},
  	body: JSON.stringify({
  		name,
  		phone,
  		email,
  		time,
  		numOfPeople,
  	}),
  }).then((res) => {
  	if (res.status !== 200 && res.status !== 201) {
  		throw new Error("Create failed!");
  	}
  	res.json();
  });
  ```

---

### **Delete an order**

Delete an order

- **URL**

  /api/delete/:\_id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:** `_id=[string]`

* **Data Params**

  None

- **Success Response:**

  - **Code:** 501 <br />

- **Error Response:**

  - **Code:** 204 <br />

- **Sample Call:**

  ```javascript
  fetch(`api/orders/delete/${_id}`, {
  	method: "DELETE",
  }).then((response) => {
  	response.json();
  });
  ```

---

### **Delete an order**

Delete an order

- **URL**

  api/orders/update/:\_id

- **Method:**

  `PUT`

- **URL Params**

  **Required:** `_id=[string]`

* **Data Params**

  `{ name:[string], phone:[string], email:[string], time:[Date], numOfPeople:[Number] }`

- **Success Response:**

  - **Code:** 501 <br />

- **Error Response:**

  - **Code:** 202 <br />

- **Sample Call:**

  ```javascript
  fetch(`api/orders/delete/${_id}`, {
  	method: "DELETE",
  }).then((response) => {
  	response.json();
  });
  ```
