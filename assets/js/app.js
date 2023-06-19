
const luhnCheck = (card) => {
    let checksum = 0;
    const cardnumbers = card.split('').map(Number);
    
    for (const [index, num] of cardnumbers.entries()) {
      if (index % 2 === 0) {
        let buffer = num * 2;
        buffer > 9 ? checksum += buffer - 9 : checksum += buffer;
      }
      else {
        checksum += num;
      }
    }
    return checksum % 10 === 0 ? true : false;
  }
  



  let actionBtn = document.querySelector('button');

  actionBtn.addEventListener('click', async function(){

  let inputs = document.querySelectorAll('input');

  for(let item of inputs){

    if(item.checkValidity){
        item.classList.remove('is-invalid');
        item.classList.add('is-valid');
    } else {
        item.classList.remove('is-valid');
        item.classList.add('is-invalid');
    }

  }



  let bankCardNumberInput = document.getElementById('userCard');

        

  if(bankCardNumberInput.checkValidity() && luhnCheck(bankCardNumberInput.value) ){

    bankCardNumberInput.classList.remove('is-invalid');
    bankCardNumberInput.classList.add('is-valid');

    check.innerHTML = 'Данные введены верно';

    let paymentName = document.getElementById('payment');


    let url = `https://api.bincodes.com/bin/json/c501c132bdea7f55ef9b2be9383d2ff6/${bankCardNumberInput.value.substring(0, 6)}/`;

        let cardInfo = await fetch(url);
            cardInfo = await cardInfo.json();

        console.log(bankCardNumberInput.value.substring(0, 6));   
        console.log(cardInfo);
        
        payment.innerHTML = cardInfo.card;

    } else {
        bankCardNumberInput.classList.remove('is-valid');
        bankCardNumberInput.classList.add('is-invalid');

        check.innerHTML = 'Данные введены неверно';
    }

    });


