
function form() {
   
  let a = document.getElementById("n1").value;
  let b = document.getElementById("n2").value;
  let c = document.getElementById("n3").value;
  let d = document.getElementById("n4").value;
  let e = document.getElementById("n5").value;
  
  if (a =="" || b =="" || c =="" || d =="" || e =="")
  {
    alert("All Feild Are Mandatory !");
    return false;
  }
  else if (isNaN(c))
  {
    alert("Only Numbers are allowed ! Please Enter Valid Number");
    return false;
  }
  else if (c.length < 11 || c.length > 11)
  {
    alert("Only 11 Digits Are Allowed ! Please Enter Valid Number");
    return false;
  }
  else if (d != e)
  {
    alert("Please Enter Same Password !");
    return false;
  }
  else
  {
    return true;
  }

}