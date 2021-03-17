
           
function myfunc()
{
var nam = document.getElementById("name").value;
var mname = document.getElementById("midname").value;
var lname = document.getElementById("lname").value;
var sug =document.getElementById("sug").value;

if(mname.trim()=="")
{
var n = nam.trim()+' '+lname.trim();
}
else
{
var n= nam.trim()+'    '+mname.trim()+'   '+lname.trim();
}

if(nam == "")
{
    alert("ENTER YOUR FIRST NAME!!");
}
else if(lname == "")
{
    alert("ENTER YOUR LAST NAME!!");
}
else if(sug == "")
{
    alert("PLEASE ENTER YOUR SUGGESTION!!");
}


else{
    var result = document.getElementById("a").innerText ;
    
    var gender = document.querySelector('input[name=gender]:checked').value;
 
  result = result + gender;
    result = result+ n +"     "+"Says : "+ '\n'+ sug + '\n'+ Date();
    
    var x =document.createElement("p");
    x.innerText = result;
    document.getElementById("t").appendChild(x);
    

    
}

}
function resetf()
{
document.getElementById("name").value = "";
document.getElementById("midname").value = "";
document.getElementById("lname").value = "";
document.getElementById("sug").value = " ";
document.querySelector('input[name = gender]:checked').checked = false ;

}
