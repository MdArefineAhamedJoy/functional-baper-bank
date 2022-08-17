document.getElementById('btn-windraw').addEventListener('click',function(){

 const windrawAmountInputFilde =getInputFilealudVeById('Windraw-filed');
 
 const previousTotalWindraw = getElementValue('windra-towtal ');

 const totalWindraw =  previousTotalWindraw + windrawAmountInputFilde;
 setElementValueById('windra-towtal ',totalWindraw)

 const previousBalance =getElementValue('balance-total')
 const windrawAfterBalance=previousBalance - windrawAmountInputFilde;
 setElementValueById('balance-total',windrawAfterBalance)
})