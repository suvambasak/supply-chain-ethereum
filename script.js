var abi = [
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_id",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "_marks",
                "type": "int256"
            }
        ],
        "name": "addBonusMarks",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_firstname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastname",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "_marks",
                "type": "int256"
            }
        ],
        "name": "addNewRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_id",
                "type": "int256"
            }
        ],
        "name": "getFirstNameById",
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
                "name": "_id",
                "type": "int256"
            }
        ],
        "name": "getLastNameById",
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
                "name": "_id",
                "type": "int256"
            }
        ],
        "name": "getMarksById",
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
        "name": "studentCount",
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
                "name": "",
                "type": "int256"
            }
        ],
        "name": "studentRecords",
        "outputs": [
            {
                "internalType": "int256",
                "name": "_id",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "_firstname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastname",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "marks",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

var address = "0xf2aeef4bbf406fe22a3dad09f3ea9f86fe9d7e47";

web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);

$(document).ready(function () {
    $("#_add").hide();
    $("#_addbonus").hide();
    $("#_show").hide();

    $("#_bmarks").hide();
    $("#bmarks_label").hide();

    $("#_id").click(function () {
        $("#_show").show();
        $("#_add").hide();
    });

    $("#_bmarks").click(function () {
        $("#_addbonus").show();
    });

    $("#_fname").click(function () {
        $("#_show").hide();
        $("#_bmarks").hide();
        $("#bmarks_label").hide();
        $("#_addbonus").hide();

        $("#_add").show();
    });



    $("#_show").click(function () {
        $("#_bmarks").show();
        $("#bmarks_label").show();

        var student_id = parseInt($("#_id").val());

        contract.methods.getFirstNameById(student_id).call().then(function (name) {
            $("#_fname").val(name);
        });

        contract.methods.getLastNameById(student_id).call().then(function (name) {
            $("#_lname").val(name);
        });

        contract.methods.getMarksById(student_id).call().then(function (name) {
            $("#_marks").val(name);
        });
    });


    $("#_addbonus").click(function () {
        web3.eth.getAccounts().then(function (accounts) {
            var account = accounts[0];
            var student_id = parseInt($("#_id").val());
            var bonus = parseInt($("#_bmarks").val());

            return contract.methods.addBonusMarks(student_id, bonus).send({ from: account });
        }).then(function (trx) {
            console.log(trx);
            alert("Marks updated");
        });
    });
    

    $("#_add").click(function () {
        web3.eth.getAccounts().then(function (accounts) {
            var account = accounts[0];

            var fname = $("#_fname").val();
            var lname = $("#_lname").val();
            var marks = $("#_marks").val();

            return contract.methods.addNewRecord(fname, lname, marks).send({ from: account });
        }).then(function (trx) {
            console.log(trx);
            alert("Student details added");
        });
    });

});
