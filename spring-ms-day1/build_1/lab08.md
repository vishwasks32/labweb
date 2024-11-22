# Lab: Adding Payment service to Ecommerce App

## Tasks
### Task 1: Generating Template from spring initializer

* visit the [spring initializer](https://start.spring.io)
* Add the dependencies
  * Spring Web
  * Eureka Client
  * Lombok
  * Data JPA
  * Mysql
  * Cloud Bootstrap
  * zipkin

  ![](./images/image2-1.png)

### Task 2: Open the project in intelliJ
* Convert `application.properties` to `application.yaml` 
* Set `server.port` to `8083`

### Task 3: Create Payment Service


![](./images/image7-1.png)

* TransactionDetails Entity
  
![](./images/image7-2.png)

* PaymentMode
  
![](./images/image7-3.png)

* With methods doPayment 

![](./images/image7-4.png)

* Get Payment details by order id

![](./images/image7-5.png)

