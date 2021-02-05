var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pname",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_price",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_quantity",
				"type": "int256"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_cname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_daddress",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_pid",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_quantity",
				"type": "int256"
			}
		],
		"name": "placeOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "reginsterProducer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_oid",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			}
		],
		"name": "updateOrderStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_pid",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_newPrice",
				"type": "int256"
			}
		],
		"name": "updatePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_oid",
				"type": "int256"
			}
		],
		"name": "fetchNextOrderId",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "int256",
				"name": "_pid",
				"type": "int256"
			}
		],
		"name": "getNextProduct",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_oid",
				"type": "int256"
			}
		],
		"name": "getOrderDetailsById",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_pid",
				"type": "int256"
			}
		],
		"name": "getProductById",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalOrder",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalProduct",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getTotalProductByProducer",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "isRegistered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "orders",
		"outputs": [
			{
				"internalType": "int256",
				"name": "id",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "product_id",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "customer_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "delivery_address",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "customer_address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "producers",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "int256",
				"name": "id",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "quantity",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "product_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "producer_address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalOrder",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalProduct",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var address = "0x31805224bE2e25c02Cc9E8C3333FA0FD8Cf0eD37";

web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);
console.log("blockchain connected")

$(document).ready(function () {

	web3.eth.getAccounts().then(function (accounts) {
		var account = accounts[0];
		contract.methods.isRegistered(account).call().then(function (flag) {
			console.log("isRegistered : " + flag);
			if (flag) {
				$("#_regdiv").hide();
			}
		});
	});

	web3.eth.getAccounts().then(function (accounts) {
		var account = accounts[0];
		contract.methods.getTotalProductByProducer(account).call().then(function (totalProduct) {
			console.log("totalProduct : " + totalProduct);
			$("#_totalproduct").html(totalProduct);

			// contract.methods.getNextProduct(account,1).call().then(function (pid) {
			// 	console.log(pid)
			// });
			// const pids = [];
			var index = 1
			for (index = 1; index <= totalProduct; index++) {
				contract.methods.getNextProduct(account, index).call().then(function (productDetails) {
					index = productDetails + 1;
					console.log(productDetails);
					var row = "<tr><th>" + productDetails[0] + "</th><td>" + productDetails[3] + "</td><td>" + productDetails[1] + "</td><td>" + productDetails[2] + "</td><td><button type=\"button\" class=\"btn btn-secondary btn-sm\" onclick=\"priceUpdate(" + productDetails[0] + ")\">Change price</button></td></tr>";
					$("#_myproduct_table").find('tbody').append(row);
				});
			}

		});
	});

	$("#_regbutton").click(function () {
		web3.eth.getAccounts().then(function (accounts) {
			var account = accounts[0];
			var name = $("#_regname").val();

			return contract.methods.reginsterProducer(name).send({ from: account });
		}).then(function (trx) {
			console.log(trx);
			if (trx.status) {
				$("#_regdiv").hide();
			}
		});
	});


	$("#_addbtn").click(function () {
		web3.eth.getAccounts().then(function (accounts) {
			var account = accounts[0];
			var pname = $("#_pname").val();
			var pprice = $("#_price").val();
			var pquantity = $("#_pquantity").val();
			console.log(pname + pprice + pquantity);

			return contract.methods.addProduct(pname, pprice, pquantity).send({ from: account });
		}).then(function (trx) {
			console.log(trx);
			if (trx.status) {
				alert("Product added!");
				$("#_pname").val("");
				$("#_price").val("");
				$("#_pquantity").val("");
			}
		});
	});

	$("#_updatebtn").click(function () {
		web3.eth.getAccounts().then(function (accounts) {
			var account = accounts[0];
			var pid = $("#_pname").val();
			var pprice = $("#_price").val();
			console.log("update button click " + pid + pprice);

			return contract.methods.updatePrice(pid, pprice).send({ from: account });
		}).then(function (trx) {
			console.log(trx);
			if (trx.status) {
				alert("Price updated!");
				$("#_nameidlabel").html("Name");
				$("#_pricelabel").html("Price");
				$("#_quantitylabel").show();
				$("#_addbtn").show();
			}
		});
	});


});


function priceUpdate(productId) {
	console.log("order click : " + productId);
	// alert(productId);
	$("#_nameidlabel").html("Product ID");
	$("#_pricelabel").html("New price");
	$("#_quantitylabel").hide();
	$("#_addbtn").hide();
	$("#_pname").val(productId);
}