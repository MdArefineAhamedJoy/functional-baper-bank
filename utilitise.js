function getInputFilealudVeById(inputId){
  const inputFiled=document.getElementById(inputId)
  const inputValueString=inputFiled.value ;
  const inputFildeNewAmount=parseFloat(inputValueString);
  inputFiled.value=''
  return inputFildeNewAmount;
} 


function getElementValue(elementValue){
   const element =document.getElementById(elementValue);
   const elementValueString=element.innerText;
   const elementAmount =parseFloat(elementValueString)
   return elementAmount;
}
function setElementValueById(elementId, value){
  const textElement = document.getElementById(elementId)
   textElement.innerText = value ;
}