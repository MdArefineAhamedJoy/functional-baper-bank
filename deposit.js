
document.getElementById('btn-diposit').addEventListener('click',function(){
  // new diposit value
  const newDepositAmount =getInputFilealudVeById('deposit-filed');
  // previous deposit vlaue
 
  const previousDepositAmount =getElementValue('deposit-total')

// new deposit total 
  const depositTotalNew =previousDepositAmount + newDepositAmount ;
// show diposit total
 setElementValueById('deposit-total', depositTotalNew)

const previousBalanceTotal =getElementValue('balance-total');
const prasentBalanceTotal = previousBalanceTotal + newDepositAmount;
 setElementValueById('balance-total',  prasentBalanceTotal)


})