function country(name){
    console.log("Hello ${}, welcome to Kenya")
}
function fullName(firstName,lastName,callback){
    let fullName=`${firstName} ${lastName}`;
    callback(fullName);     
    console.log(fullName)
}
fullName("Grace", "Maina",country)


/*The output to the console will be the inner func because it has accessed the 
var self = this then outer func which is accessed globally.The output of the inner func
 self.bar will be same to the outer func this.bar and self.bar  */


 /*this identifier has been used like a nested scope where by  
   the variables available are anywhere in the scope.An example:
     */
function foo(){
    var name ="Grace";
    function age(){
        var age =21;
        function gender(){
            var gender ="female";
            console.log(name,age,gender);
        }
        console.log(name,age);
    }
    console.log(name)
}    
foo()