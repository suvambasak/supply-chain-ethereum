pragma solidity >=0.7.0 <0.8.0;

contract MyContract{
    
    struct Student{
        int _id;
        string _firstname;
        string _lastname;
        int marks;
    }
    
    int public studentCount=0;
    mapping(int=>Student) public studentRecords;
    
    address owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner(){
        require(owner == msg.sender);
        _;
    }
    
    function getFirstNameById(int _id) view public returns(string memory){
        return studentRecords[_id]._firstname;
    }
    
    function getLastNameById(int _id) view public returns(string memory){
        return studentRecords[_id]._lastname;
    }
    
    function getMarksById(int _id) view public returns(int){
        return studentRecords[_id].marks;
    }
    
    function addBonusMarks(int _id) public onlyOwner{
        studentRecords[_id].marks= studentRecords[_id].marks+5;
    }
    
    function addNewRecord(string memory _firstname, string memory _lastname, int _marks) public onlyOwner {
        studentCount+=1;
        studentRecords[studentCount] = Student(studentCount, _firstname, _lastname, _marks);
    }
}