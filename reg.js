let data={
  name:"",
  email:"",
  pass:""
};
if (localStorage.getItem("login")!=null) {
  window.location.href="welcome.html";

}
let arrData= [];
let signupbtn = document.getElementById("reg_btn");
signupbtn.addEventListener("click",()=>{
  // alert("after clicking");
  let Name = document.getElementById("disabledTextInput").value;
  let Email = document.getElementById("exampleInputEmail1").value;
  let Pass = document.getElementById("inputPassword5").value;
  data.name = Name;
  data.email = Email;
  data.pass = Pass;
  arrData.push(data);
  localStorage.setItem("users", JSON.stringify(arrData));
  
  console.log(arrData);
  
});


