//check whether textbox is empty or not
function check()
{
  var textValue=document.getElementById("mov").value;
  if(textValue.trim()=="")
  {
      alert("Enter some text");
      return false;
  }
  return true;
}

//to store and initiate the session variables.
function count0()
{
 sessionStorage.setItem("flag", 0);
 sessionStorage.setItem("op", 0);
 sessionStorage.setItem("count", 1);
}

count0();         