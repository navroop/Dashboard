angular.module('myApp').factory('userService',function(){

	var factoryObj = {};
	var databinder = (function () {
		var databinder = [
    {
        "id": "AM",
        "list": "Lorem ipsum ipsum lorem ipsum ipsu"
        
    },
    {
        "id": "AR",
        "list": "ipsum ipsuorem ipsum ipsum lorem dsdsdsd "
        
    },
    {
        "id": "AY",
        "list": "Lorem ipsum ipsum lorem ipsum ipsu"
        
    },
    {
        "id": "AT",
        "list": "ipsum ipsuorem ipsum ipsum lorem ddsds csdsds "
        
    },
    {
        "id": "AQ",
        "list": "Lorem ipsum ipsum lorem ipsum ipsu"
        
    },
    {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem "
       
    },
       {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem cdsdsds ddsdsds "
       
    },
       {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem "
       
    },
       {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem "
       
    },
           {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem "
       
    },
           {
        "id": "AW",
        "list": "ipsum ipsuorem ipsum ipsum lorem "
       
    }

];
		return databinder;
	})(); 		
	
	var gridbinder = (function () {
		var gridbinder = [
    {
        "From": "Moroni",
        "Contact": "John",
        "Amount": 67000
    },
    {
        "From": "Moroni",
        "Contact": "Mac",
        "Amount": 2300000
    },
    {
        "From": "Moroni",
        "Contact": "Steve",
        "Amount": 230999900
    },
    {
        "From": "Moroni",
        "Contact": "Gate",
        "Amount": 4403300
    },
    {
        "From": "Moroni",
        "Contact": "Lorem",
        "Amount": 3000
    },
    {
        "From": "Moroni",
        "Contact": "Ipsum",
        "Amount": 2000
    },
    {
        "From": "Moroni",
        "Contact": "john",
        "Amount": 55000
    }
]
;
		
		return gridbinder;
	})(); 				
	
		
	var userbinder = (function () {
		var userbinder = [
    {
        "id": "AM",
        "name": "Users",
        "process":60,
        "value":1340
    },
    {
        "id": "AR",
        "name": "Site Visits",
        "process":30,
        "value":144
    },
    {
        "id": "AY",
        "name": "Orders",
        "process":20,
        "value":333
    },
    {
        "id": "AT",
        "name": "Revenue",
        "process":50,
        "value":666
    },
    {
        "id": "AQ",
        "name": "Sales",
        "process":70,
        "value":777
    },
    {
        "id": "AW",
        "name": "Sales",
        "process":90,
        "value":5555
    }

];
		
		return userbinder;
	})(); 
	var navbinder = (function () {
		var navbinder = [
    {
        "id": "ff",
        "name": "Dashboard"
       
    },
    {
        "id": "ww",
        "name": "Page Layouts"
    },
    {
        "id": "tt",
        "name": "Ui Features"
    },
    {
        "id": "yy",
        "name": "Form Stuff"
    }
    
]
;
		
		return navbinder;
	})(); 
	factoryObj.getList = function(){
		return databinder;
	};
	factoryObj.getGrid = function(){
		return gridbinder;
	};
	factoryObj.getTab = function(){
		return userbinder;
	};
	factoryObj.getNav = function(){
		return navbinder;
	};
	
	return factoryObj;
});