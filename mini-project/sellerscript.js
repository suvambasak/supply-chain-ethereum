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

var address = "0x80EBca90c0c7028c9679A71357e4c3C163c21bd0";

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

			return contract.methods.addProduct(pname,pprice,pquantity).send({ from: account });
		}).then(function(trx){
			console.log(trx);
			if (trx.status) {
				alert("Product added!");
				$("#_pname").val("");
				$("#_price").val("");
				$("#_pquantity").val("");
			}
		});
	});

	
});