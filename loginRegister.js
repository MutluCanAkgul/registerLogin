function kayitOl(){
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var passwordSuccess = document.getElementById("passwordSuccess").value;



if(password == passwordSuccess){
localStorage.setItem("name1",name)
localStorage.setItem("surname1",surname)
localStorage.setItem("email1",email)
localStorage.setItem("password1",password)
localStorage.setItem("passwordSuccess1",passwordSuccess)

document.getElementById("name").value = "";
document.getElementById("surname").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("passwordSuccess").value = "";
alert("Başarılı Kayıt");
}
else
{
    alert("Kayıt Başarısız !! Şifreler Uyuşmuyor ");
}

}

function girisYap(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

   var email1 = localStorage.getItem("email1");
   var password1 = localStorage.getItem("password1");

   if(email1 == email.value && password1 == password.value){
    localStorage.setItem("kayitDurumu","kayitli");
    window.location.href = "https://www.testotaylan.com"
   }
   else{
    alert("Email ya da şifreniz hatalı");
   }
}

