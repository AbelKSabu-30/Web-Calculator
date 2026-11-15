function btn_click(val){
  document.getElementById("screen").value+=val
}
function clr(){
  document.getElementById("screen").value=""
}
function eql_click(){
  try{
  var text=document.getElementById("screen").value
  var output=eval(text)
  document.getElementById("screen").value=output
  }
  catch(err){
    alert("Error!")
  }
}
function del(){
  document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
}
