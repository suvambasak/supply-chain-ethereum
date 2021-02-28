web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);
console.log("blockchain connected")

$(document).ready(function () {

	contract.methods.getTotalProduct().call().then(function (totalProduct) {
		console.log("totalProduct : " + totalProduct);
		$("#_products_table").html(totalProduct);

		for (var i = 1; i <= totalProduct; i++) {
			contract.methods.getProductById(i).call().then(function (productDetails) {
				console.log(productDetails);
				var row = "<tr><th>" + productDetails[0] + "</th><td>" + productDetails[3] + "</td><td>" + productDetails[1] + "</td><td>" + productDetails[2] + "</td><td><button type=\"button\" class=\"btn btn-secondary btn-sm\" onclick=\"productOrderClick(" + productDetails[0] + ")\">Order</button></td></tr>";
				$("#_product_table").find('tbody').append(row);
			});
		}
	});


	web3.eth.getAccounts().then(function (accounts) {
		var account = accounts[0];

		// Fetching total number of order.
		contract.methods.getTotalOrder(account).call().then(function (totalOrder) {
			console.log("totalOrder : " + totalOrder);
			$("#_track").html(totalOrder);
		});

		// Fetching all products.
		contract.methods.getTotalOrder().call().then(function (totalOrder) {
			console.log("totalOrder (global) : " + totalOrder);

			for (var index = 1; index <= totalOrder; index++) {
				contract.methods.fetchNextOrderById(account, index).call().then(function (orderDetails) {
					console.log(orderDetails);
					if (orderDetails[6]) {
						var row = "<tr><th scope=\"row\">" + orderDetails[0] + "</th><td>" + orderDetails[5] + "</td><td>" + orderDetails[4] + "</td></tr>";
						$("#_order_table").find('tbody').append(row);
					}
				});
			}
		});


	});

	// Placing order.
	$("#_orderbtn").click(function () {
		web3.eth.getAccounts().then(function (accounts) {
			var account = accounts[0];
			var pid = $("#_pid").val();
			var quantity = $("#_quantity").val();
			var cname = $("#_cname").val();
			var caddress = $("#_caddress").val();
			console.log("place order : " + pid + quantity + cname + caddress);

			return contract.methods.placeOrder(cname, caddress, pid, quantity).send({ from: account });
		}).then(function (trx) {
			console.log(trx);
			if (trx.status) {
				alert("Order is placed!");
				$("#_pid").val("");
				$("#_quantity").val("");
				$("#_cname").val("");
				$("#_caddress").val("");
				location.reload();
			}

		});
	});


});

// Order button action.
function productOrderClick(productId) {
	console.log("order click : " + productId);
	$("#_pid").val(productId);
}