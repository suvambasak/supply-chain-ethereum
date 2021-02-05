pragma solidity >=0.7.0 <0.8.0;

contract MyContract{
    // Producer list [address and name].
    mapping(address=>string) public producers;
    
    // Products details.
    int public totalProduct=0;
    struct product{
        int id;
        int price;
        int quantity;
        string product_name;
        address producer_address;
    }
    mapping(int=>product) public products;
    
    // Order details
    int public totalOrder=0;
    struct order{
        int id;
        int product_id;
        int quantity;
        string customer_name;
        string status;
        string delivery_address;
        address customer_address;
    }
    mapping(int=>order) public orders;
    
    // register producer authentication.
    modifier reginsterProducerAuth(){
        require(bytes(producers[msg.sender]).length == 0);
        _;
    }
    
    // Add product authentication.
    modifier addProductAuth(){
        require(bytes(producers[msg.sender]).length > 0);
        _;
    }
    
    
    
    // Seller
    
    function isRegistered(address _addr) view public returns(bool){
        if(bytes(producers[_addr]).length == 0){
            return (false);
        }else{
            return (true);
        }
    }
    
    function reginsterProducer(string memory _name) public reginsterProducerAuth{
        producers[msg.sender] = _name;
    }
    
    function addProduct(string memory _pname, int _price, int _quantity) public addProductAuth{
        totalProduct += 1;
        products[totalProduct] = product(totalProduct, _price, _quantity, _pname, msg.sender);
    }
    
    function getTotalProductByProducer(address _addr) view public returns(int){
        int counter=0;
        for(int i=1; i<=totalProduct;i++){
            if(products[i].producer_address == _addr){
                counter++;
            }
        }
        return (counter);
    }
    
    function getNextProduct(address _addr, int _pid) view public returns(int, int, int, string memory){
        require(_pid<=totalProduct);
        for(int i=_pid;i<=totalProduct;i++){
            if(products[i].producer_address==_addr){
                return (products[i].id, products[i].price, products[i].quantity, products[i].product_name);
            }
        }
        return (0,0, 0, "");
    }
    
    function updatePrice(int _pid, int _newPrice) public{
        require(products[_pid].producer_address == msg.sender);
        products[_pid].price = _newPrice;
    }
    
    function getMyTotalOrder(address _addr) view public returns(int){
        int counter=0;
        for(int i=1;i<=totalOrder;i++){
            if(products[orders[i].product_id].producer_address==_addr){
                counter++;
            }
        }
        return (counter);
    }
    
    function getMyNextOrderById(address _addr,int _oid) view public returns(int,int,int,string memory,string memory,string memory){
         require(_oid<=totalOrder);
         for(int i=_oid; i<=totalOrder; i++){
             if(products[orders[i].product_id].producer_address==_addr){
                 return (orders[i].id, orders[i].product_id, orders[i].quantity, orders[i].customer_name, orders[i].status, orders[i].delivery_address);
             }
         }
         return (0,0,0,"","","");
    }
    
    function updateOrderStatus(int _oid, string memory _status) public{
        require(products[orders[_oid].product_id].producer_address == msg.sender);
        orders[_oid].status = _status;
    }
    
    
    
    
    // customer
    
    
    function getTotalProduct() view public returns(int){
        return totalProduct;
    }
    
    function getProductById(int _pid) view public returns(int, int, string memory){
        require(_pid<=totalProduct);
        return (products[_pid].price,products[_pid].quantity,products[_pid].product_name);
    }
    
    function placeOrder(string memory _cname, string memory _daddress, int _pid, int _quantity) public{
        require(products[_pid].quantity >= _quantity);
        
        totalOrder += 1;
        orders[totalOrder] = order(totalOrder,_pid,_quantity,_cname,"Placed",_daddress,msg.sender);
        products[_pid].quantity -= _quantity;
    }
    
    function getTotalOrder(address _addr) view public returns(int){
        int counter=0;
        for(int i=1;i<=totalOrder;i++){
            if(_addr==orders[i].customer_address){
                counter++;
            }
        }
        return (counter);
    }
    
    function fetchNextOrderById(address _addr, int _oid) view public returns(int,int,int,string memory,string memory,string memory){
        require(_oid<=totalOrder);
        for(int i=_oid; i<=totalOrder; i++){
            if(_addr==orders[i].customer_address){
                return (orders[i].id, orders[i].product_id, orders[i].quantity, orders[i].customer_name, orders[i].status, orders[i].delivery_address);
            }
        }
        return (0,0,0,"","","");
    }

}