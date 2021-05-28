class Contacts {
    constructor(firstName, lastName, address, city, state, zipCode, phoneNum, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNum = phoneNum;
        this.email = email;
    }

    toString() {
        return "{   First Name: "+ this.firstName + ",  Last Name: " + this.lastName + ",   Address: " + this.address + ",  City: " + this.city + ",    State: " + this.state + ",  Zip Code: " + this.zipCode + ",     Phone Number: " + this.phoneNum + ",    Email ID: " + this.email + "\n}";
    }
}

contact1 = new Contacts("Vyshnavi", "Babbur", "Alwal", "Hyderabad", "Telangana", 500010, 9900000099, "vyshugoud11@gmail.com");
contact2 = new Contacts("Sundeep", "Babbur", "Sri Ram Nagar", "Hyderabad", "Telangana", 500015, 9988998899, "sundeep@gmail.com");

console.log(contact1.toString());
console.log(contact2.toString());