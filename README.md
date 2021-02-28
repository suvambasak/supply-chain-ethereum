# Supply Chain Management using Ethereum-Blockchain

# Functionalities

- The producer can register him as a producer
- After registration he can add products, the attributes of a product are
    - Product ID
    - Product name
    - Price
    - Quantity
- The producer should be able to change the price if he wants.
- Customer can view the products
- Customer can order the products (no need of sending money, only COD)
- Customer can track the product using the order ID
- The status of the order are
    - Placed
    - Rejected
    - Delivered
- The producer has the authority to change the status of the product (when the customer places an order, the status will be “Placed”).


# Want to run on your machine?

## Install metamask wallet
Install metamask wallet using this [Link](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search). Just collect some ether and you are good to go.

## Setup a local server
Install Node.js and npm
```bash
$ sudo apt install nodejs npm
$ sudo npm install http-server -g
```
## Run
Clone the repository and start http-server.
Install Node.js and npm
```bash
$ git clone https://github.com/suvambasak/supply-chain-ethereum
$ cd supply-chain-ethereum/
$ http-server
```
Goto : http://localhost:8080/



# Screenshots

## Register as a producer
![1](https://user-images.githubusercontent.com/24780767/109427399-3b710b00-7a18-11eb-9cec-7a99a1e61b65.jpeg)

![image](https://user-images.githubusercontent.com/24780767/109427569-031dfc80-7a19-11eb-86f2-e00be298b455.png)


## Adding products
![image](https://user-images.githubusercontent.com/24780767/109427624-3cef0300-7a19-11eb-8b4e-dd8299733b47.png)

![image](https://user-images.githubusercontent.com/24780767/109427659-67d95700-7a19-11eb-954f-07810ba415f1.png)

## Change price of any product
![image](https://user-images.githubusercontent.com/24780767/109427687-8b040680-7a19-11eb-875a-8b49f2b0370c.png)

![image](https://user-images.githubusercontent.com/24780767/109427701-9b1be600-7a19-11eb-8540-10cc8cb6710f.png)

## View the products
![image](https://user-images.githubusercontent.com/24780767/109427717-af5fe300-7a19-11eb-8046-f020d4d67ec0.png)

## Order products
![image](https://user-images.githubusercontent.com/24780767/109427737-c43c7680-7a19-11eb-8a4f-ce8ad3975e94.png)

![image](https://user-images.githubusercontent.com/24780767/109427752-d1596580-7a19-11eb-87a2-312b70dec73f.png)

## Customer can track the product by order ID
![image](https://user-images.githubusercontent.com/24780767/109427771-ea621680-7a19-11eb-890a-d82ef5f368b1.png)

## View of orders
![image](https://user-images.githubusercontent.com/24780767/109427806-1aa9b500-7a1a-11eb-8b02-62b22d8c245c.png)

## Status change
![image](https://user-images.githubusercontent.com/24780767/109427868-53e22500-7a1a-11eb-9356-5c4cfb71811e.png)

![image](https://user-images.githubusercontent.com/24780767/109427874-5d6b8d00-7a1a-11eb-8b83-3d79a5cec258.png)

![image](https://user-images.githubusercontent.com/24780767/109427883-6e1c0300-7a1a-11eb-866c-f076733b6d2a.png)
