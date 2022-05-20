let loginObject= {
    name:"",
    email:"",
    pass:""
}
if ( localStorage.getItem("login")!==null ) {
    window.location.href="welcome.html";

}
function comparison(obj1, obj2) {
    if(obj1.email===obj2.email){
        if (obj1.pass === obj2.pass) {
            console.log("Welcome to our page");
            obj2.state = true;
           const loginData= JSON.stringify(obj2);
           console.log(loginData);
           localStorage.setItem("login",loginData);
           window.location.href = "welcome.html";
            return true;
        }
        
    }
    else{
            console.log("Check credential");
            return false;
        }
        return false;
}
let loginbtn = document.getElementById("lgn_btn");
loginbtn.addEventListener("click",()=>{
    let LName = document.getElementById("disabledTextInput").value;
    let lEmail = document.getElementById("exampleInputEmail1").value;
    let lPass = document.getElementById("inputPassword5").value;
    let x = localStorage.getItem("users");
    loginObject.name = LName;
    loginObject.email = lEmail;
    loginObject.pass = lPass;
    let JSONcvrt = JSON.parse(x);
    
    for (let i = 0; i < JSONcvrt.length; i++) {
       console.log(JSONcvrt[i]);
       if(comparison(JSONcvrt[i],loginObject)){
           
       }
       }
    
    
});











let arr2 = [];
        let x = [];
        let y = [];
        let l_data = document.getElementById("lgn_btn");
        
        l_data.addEventListener("click", () => {
            
            arr2.push(name, email, pass);
            y = localStorage.setItem("login",JSON.stringify(arr2));
            // for (let i = 0; i < arr2.length; i++) {
                
                
            //     localStorage.clear();
                
            // }
            
            // console.log(arr2);
            
            x = localStorage.getItem("reg");
            console.log(x);
            if (y==x) {
                console.log("You're succesfully logged in");
            }
        });