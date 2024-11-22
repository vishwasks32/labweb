# Lab: Creating Product Service for Ecommerce App

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

  ![](./images/image2-1.png)

### Task 2: Open the project in intelliJ
* Convert `application.properties` to `application.yaml` 
* Set `server.port` to `8080`

### Task 3: Creating Product Service

* Create – endpoints as in spring boot app as you created earlier
* Product Resource has the fields as below
  * productId
  * productName
  * price
  * quantity
  * category
* Also add an endpoint
  
![](./images/image2-2.png) 

### Task 4: Add product Service as Eureka Client

![](./images/image2-3.png)

test the product service and service registry

## Output

![](./images/image2-4.png)
