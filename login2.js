function validate()
{
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
if(username=="admin" && password=="pass")
    {
        alert("Login is Sucessful");
        return false;
    }
else
    {
        alert("Login Failed");
    }
}