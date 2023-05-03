const btnHelp = document.querySelector('.btn-help'); // botão help inicial
const btnHelpPassword = document.querySelector('.btn-help-password'); //botão help senha
const conta = document.getElementById('conta'); // login conta
const form = document.getElementById('form'); // formulário login
const screenLoading = document.getElementById('screen-loading'); //Tela de carregamento
const screenLogin = document.getElementById('screen-login'); // tela login
const screenPassword = document.getElementById('screen-password'); //tela senha
const screenPasswordTwo = document.getElementById('screen-password-two'); //tela senha
const screenHome = document.getElementById('screen-home'); // tela home
const screenHomeCard = document.getElementById('screen-home-card');// tela home cartao
const screenHomeCardTwo = document.getElementById('screen-home-card-two'); //tela home cartao 2
const getLoan = document.getElementById('get-loan') // tela  popup valores emprestimo 
const getLoanConfirm = document.getElementById('screen-loan-confirm') // tela popup confirmação de emprestimo
const PayValue = document.getElementById('screen-pay-value') // pop up pagamento valor
const Pixvalue = document.getElementById('screen-pix-value') // pop up pix
const StatementValue = document.getElementById('screen-statement-value') //pop up extrato
const loading = document.querySelector('.loading'); // icone de carregamento
const textName = document.querySelector('.text-name'); // espaço em branco nome senha
const nameLast = document.querySelector('.name-last'); // Nome e sobrenome
let displayPassword = document.getElementById('password');// display senha
let zeroOrOne = document.getElementById('zero-or-one'); // senha 0 a 1 
let twoOrThree = document.getElementById('two-or-three'); // senha 2 a 3 
let fourOrFive = document.getElementById('four-or-five'); // senha 4 a 5 
let sixOrSeven = document.getElementById('six-or-seven'); // senha 6 a 7 
let eightOrNine = document.getElementById('eight-or-nine'); // senha 8 a 9 
let clear = document.getElementById('clear'); // senha limpar
const btnPassword = document.getElementById('btn-password'); // botão senha
const screenBalance = document.getElementById('balance'); // Saldo - home
const p =  document.createElement('p'); // criar um p homebalance
const btnLeft = document.getElementById('btn-left'); // botão esquedo do cartão
const btnRight = document.getElementById('btn-right'); // botão direito do cartão
const loan = document.querySelector('.loan'); // emprestimo
const pay = document.querySelector('.pay'); //  pagamento
const contentGetLoan = document.querySelector('.content-get-loan'); // pop up emprestimo
const contentLoanConfirm = document.querySelector('.content-loan-confirm'); // pop up emprestimo confirmar
const contentPayValue = document.querySelector('.content-pay-value') //pop up pagamento
const pix = document.querySelector('.pix') // pix
const contentPixValue = document.querySelector('.content-pix-value') // pop up pix
const statement = document.querySelector('.statement') // extrato
const contentStatement = document.querySelector('.content-statement-value') //pop up extrato

const userName = [];
let nameN;

let userPassword = [];
let passwordValid = '10202030';

let userBalance = [600];

let cardBalance = [223.15];
let cardBalanceTwo = [495.35];

let loanBalance = [];

let statementBalance = [];  


const date = new Date()

const day = date.getDay();
const months = date.getMonth();
const year = date.getFullYear();

const DateFull = `${day}/${months}/${year}`;


// INICIAL --------

function home(){ // tela home
    screenHomeInline()
    nameHome()
    screenHomeBalance()
}

function nameHome(){ // nome home 
    lastName();
    nameTextHome()
}

function cent(){ // centavos
    for (let i = 0; i < userBalance.length; i++ ){
        userBalance[i] = userBalance[i].toFixed(2)
    }
}
cent()


function submit(){ // formulário login
    form.addEventListener('submit', function(e){
        e.preventDefault();
        checkCC() // login conta
        nameText() // text nome usuário
        lastName() // Primeira e segunda letra do nome
        passwordClick() // Botão senha
    })
}
submit()


function checkCC(){ // login conta
    nameN = document.getElementById('name').value // Nome usuário
    if (conta.value != '123-4' || nameN === ""){
        alert('Usuário e/ou conta inválido')
    } else {
        screenLoginHidden(); // esconder tela login
        screenPasswordInline(); // tela senha ativa
        nameText(); // nome usuário passaword
        lastName(); // nome e sobrenome
        userName.push(nameN) // adicionar nome no array
    } 
}

// TELA CARTÕES --------

function directionCardButton(){
    
    let checkedCard = true; // div visível

    btnLeft.addEventListener('click', function(){
        if(checkedCard){
            screenHomeCard.style.display = 'inline';
            screenHomeCardTwo.style.display = 'none';
            checkedCard = false; // div escondida
        } else {
            screenHomeCard.style.display = 'none';
            screenHomeCardTwo.style.display = 'inline';
            checkedCard = true;// div visível
          }
    }) 

    btnRight.addEventListener('click', function(){
        if(checkedCard){
            screenHomeCard.style.display = 'inline';
            screenHomeCardTwo.style.display = 'none';
            checkedCard = false; // div escondida
        } else {
            screenHomeCard.style.display = 'none';
            screenHomeCardTwo.style.display = 'inline';
            checkedCard = true;// div visível
          }
    }) 
}
directionCardButton()

function balanceCard(){
    for (let i = 0; i < cardBalance.length;i++){
        cardBalance[i] = cardBalance[i].toFixed(2);
    }
}
balanceCard()

function balanceCardTwo(){
    for (let i = 0; i < cardBalanceTwo.length;i++){
        cardBalanceTwo[i] = cardBalanceTwo[i].toFixed(2);
    }
}
balanceCardTwo()

function NameCard(){
    const pCard = document.createElement('p');
    const pBalance = document.createElement('p');
    const btnCard = document.createElement('button')
    const nCardLimit = Math.floor(Math.random() * 9999) + 1;
    
    pBalance.style.color = '#FCA84C';
    pBalance.style.fontSize = '1.2em'; 
    pCard.style.fontSize = '1em';
    pCard.style.color = 'white';

    btnCard.style.display= 'flex';
    btnCard.style.background = '#FCA84C';
    btnCard.style.margin = '0 auto';
    btnCard.style.width = '7em';
    btnCard.style.height = '2em';
    btnCard.style.borderRadius = '12px';
    btnCard.style.justifyContent = 'center';
    btnCard.style.alignItems = 'center';
    btnCard.style.border = 'none';
    
    pCard.innerHTML = `BLACKCARD - ${nCardLimit} <br><br> ` ;
    pBalance.innerHTML = `Fatura aberta: <br> R$${cardBalance}`;
    btnCard.innerHTML = `PAGAR`;

    screenHomeCard.style.background = "linear-gradient(179deg, black, red 200%)"

    screenHomeCard.appendChild(pCard);
    screenHomeCard.appendChild(pBalance);
    screenHomeCard.appendChild(btnCard);


    btnCard.addEventListener('click', function(){
        for(let i = 0; i != userBalance.length; i++){
            if (Number(userBalance[i]) <= Number(cardBalance[i])){
                alert('Saldo insuficiente');
                return
            }
        }

        let BalanceFor = [0] 
        for(let i = 0; i != cardBalance.length; i++){
            if(cardBalance[i] <= BalanceFor[i]){
                alert('Fatura em dia'); 
                
                return
            }
        }
        if (userBalance.length >= cardBalance.length){
            let resultcard = Number(userBalance[0]) - Number(cardBalance[0])

            let resultCardBalance = parseFloat(cardBalance[0]).toFixed(2)

            statementBalance.push({Data: DateFull, Descricao: 'Pagamento Cartão', Valor: `R$-${resultCardBalance}`});
            
            userBalance.pop();
            userBalance.push(resultcard);
            cardBalance.pop();
            cardBalance.push(0);

            cent();
            balanceCard();

            statementBalance.push({Data: DateFull, Descricao: 'Saldo conta', Valor: `R$${userBalance[0]}`});
            
            

            p.innerHTML = `Saldo disponível <br> R$ ***`;
            pBalance.innerHTML = `Fatura aberta: <br> R$0.00`;
            screenHomeCard.style.background = "linear-gradient(179deg, black, green 200%)";

            alert ('Pagamento efetuado')
            
             
        } else {
            alert ('Saldo Insuficiente')
        }
    })

}
NameCard()

function NameCardTwo(){
    const pCardTwo = document.createElement('p');
    const pBalanceTwo = document.createElement('p');
    const btnCardTwo = document.createElement('button')
    const nCardLimitTwo = Math.floor(Math.random() * 9999) + 1;
    
    pBalanceTwo.style.color = '#FCA84C';
    pBalanceTwo.style.fontSize = '1.2em'; 
    pCardTwo.style.fontSize = '1em';
    pCardTwo.style.color = 'white';

    btnCardTwo.style.display= 'flex';
    btnCardTwo.style.background = '#FCA84C';
    btnCardTwo.style.margin = '0 auto';
    btnCardTwo.style.width = '7em';
    btnCardTwo.style.height = '2em';
    btnCardTwo.style.borderRadius = '12px';
    btnCardTwo.style.justifyContent = 'center';
    btnCardTwo.style.alignItems = 'center';
    btnCardTwo.style.border = 'none';
    
    pCardTwo.innerHTML = `BLACKCARD INT- ${nCardLimitTwo} <br><br> ` ;
    pBalanceTwo.innerHTML = `Fatura aberta: <br> R$${cardBalanceTwo}`;
    btnCardTwo.innerHTML = `PAGAR`;

    screenHomeCardTwo.style.background = "linear-gradient(179deg, black, red 200%)"

    screenHomeCardTwo.appendChild(pCardTwo);
    screenHomeCardTwo.appendChild(pBalanceTwo);
    screenHomeCardTwo.appendChild(btnCardTwo);


    btnCardTwo.addEventListener('click', function(){
        for(let i = 0; i != cardBalanceTwo.length; i++){
            if (Number(userBalance[i]) <= Number(cardBalanceTwo[i])){
                alert('Saldo insuficiente');
                return
            }
        }

        let BalanceForTwo = [0] 
        for(let i = 0; i != cardBalanceTwo.length; i++){
            if(cardBalanceTwo[i] <= BalanceForTwo[i]){
                alert('Fatura em dia'); 
                return
            }
        }
        if (userBalance.length >= cardBalanceTwo.length){
            let resultcardTwo = Number(userBalance[0]) - Number(cardBalanceTwo[0])

            let resultCardTwoBalance = parseFloat(cardBalanceTwo[0]).toFixed(2)

            statementBalance.push({Data: DateFull, Descricao: 'Pagamento Cartão', Valor: `R$-${resultCardTwoBalance}`});

            userBalance.pop();
            userBalance.push(resultcardTwo);
            cardBalanceTwo.pop();
            cardBalanceTwo.push(0);

            cent();
            balanceCardTwo();

            statementBalance.push({ Data: DateFull, Descricao: 'Saldo conta', Valor: `R$${userBalance[0]}`});


            p.innerHTML = `Saldo disponível <br> R$ ***`;
            pBalanceTwo.innerHTML = `Fatura aberta: <br> R$0.00`;
            screenHomeCardTwo.style.background = "linear-gradient(179deg, black, green 200%)";
            alert ('Pagamento efetuado')
            
             
        } else {
            alert ('Saldo Insuficiente')
        }
    })

}
NameCardTwo()

function screenHomeBalance(){ // tela saldo disponivel
    let ative = false; // botão como falso 
    const buttonEye = document.createElement('button'); // criar um botão
    const eye = document.createElement("img"); // criar uma imagem

    p.style.color = 'white'; // fonte  em branco
    p.innerHTML = `Saldo disponível <br> R$ ***`; // valor p escondido 


    buttonEye.addEventListener('click', function(){ 
        if (ative) {
            eye.src = './assets/img/eye-02.png';
            p.innerHTML = `Saldo disponível <br> R$ ***`;
            ative = false
        } else {
            eye.src = './assets/img/eye-01.png';
            p.innerHTML = `Saldo disponível <br> R$ ${userBalance}`;
            ative = true
        }

    })

    eye.src = './assets/img/eye-02.png';
    eye.width = 20;
    eye.height = 20;
    buttonEye.style.background = 'none';
    buttonEye.style.border = 'none'; 
    screenBalance.appendChild(p);  
    buttonEye.appendChild(eye);
    screenBalance.appendChild(buttonEye);

};

// EMPRESTIMO  --------

function loanHome(){
    let activeLoan = true; // ativar emprestimo.

    const pLoan = document.createElement('p');
    const pLoanText = document.createElement('p');
    const loanInput = document.createElement('input');
    const loanBtn = document.createElement('button');

    pLoan.style.fontSize = '1em'
    pLoan.style.color = 'white';

    pLoanText.style.color = '#FCA84C';
    pLoanText.style.fontSize = '1.2em';

    loanBtn.style.display= 'flex';
    loanBtn.style.background = '#FCA84C';
    loanBtn.style.margin = '0 auto';
    loanBtn.style.width = '7em';
    loanBtn.style.height = '2em';
    loanBtn.style.borderRadius = '12px';
    loanBtn.style.justifyContent = 'center';
    loanBtn.style.alignItems = 'center';
    loanBtn.style.border = 'none';

    pLoan.innerHTML = `EMPRÉSTIMO <br><br>`;
    pLoanText.innerHTML = `Informe o valor <br>`;
    loanBtn.innerHTML = `CONTINUAR`;

    loanInput.setAttribute('type', 'number');
    loanInput.setAttribute('id', 'loanInput');
    loanInput.setAttribute('placeholder', 'R$ 000.00');

    loanBtn.addEventListener('click', function(){
        if (loanInput.value <= 0){
           alert(`${nameN}, por favor, informe qual é o valor desejado para o empréstimo.`);
           return;
        }

        if(loanInput.value >= 5000){
            alert(`${nameN}, após a análise de crédito, informamos que o valor do empréstimo foi recusado. Você pode tentar outro valor para uma nova análise.`)
            return;
        }

        if(activeLoan === false){
            alert(`${nameN}, no momento não temos propostas de empréstimo disponíveis.`)
            return;
        }

        getLoan.style.display = 'flex';
        screenHome.style.filter = 'blur(0.3em)';


        const btnPopCloser = document.createElement('button');
        const pGetLoan = document.createElement('p');

        pGetLoan.style.color = 'white';

        btnPopCloser.setAttribute('class', 'btnPopCloser');
        btnPopCloser.innerHTML = 'X'

        pGetLoan.innerHTML = `Olá, ${nameN}. <br> Você está prestes a fazer um empréstimo no valor de R$${loanInput.value}. Siga nossas condições.<br><br>`
        
        contentGetLoan.appendChild(btnPopCloser);
        contentGetLoan.appendChild(pGetLoan);

      


        const fees = [ 
            {mes: 01, juros: 1.83},
            {mes: 02, juros: 2.83},
            {mes: 03, juros: 3.83},
            {mes: 04, juros: 4.83},
            {mes: 05, juros: 5.83},
            {mes: 06, juros: 6.83},
            {mes: 07, juros: 7.83},
            {mes: 08, juros: 8.83},
            {mes: 09, juros: 9.83},
            {mes: 10, juros: 10.83},
            {mes: 11, juros: 11.83},
            {mes: 12, juros: 12.83},
        ]

        for (let i = 0; i < fees.length; i++){

            
            btnPopCloser.addEventListener('click', function(){
                pGetLoan.innerHTML = '';
                getLoan.style.display = 'none';
                btnparcel.style.display = 'none';
                screenHome.style.filter = 'blur(0.0em)';

    
            })

            const feesValue = fees[i];
            const feesDivide = (feesValue.juros / 100) * 1 ; // taxa de juros
            const feesAccumulator =  loanInput.value * feesDivide * feesValue.mes; //emprestimo x juros x mes
            const feesTotal = Number(feesAccumulator) + Number(loanInput.value); // emprestimo total;
            const parcel = feesTotal / feesValue.mes //parcela
            const btnparcel = document.createElement('button'); //botão parcela

            btnparcel.setAttribute('class', 'btnparcel');
            
            btnparcel.innerHTML = `${feesValue.mes}x de R$${parcel.toFixed(2)} com ${feesValue.juros}% ao mês`;


            btnparcel.addEventListener('click', function(){
                getLoanConfirm.style.display = 'flex';
                getLoan.style.display = 'none';
                screenHome.style.filter = 'blur(0.3em)';



                const pLoanConfirm = document.createElement('p');                
                const btnLoanConfirm = document.createElement('button');
                const btnLoanNegative = document.createElement('button');

                btnLoanConfirm.setAttribute('class', 'btnLoanConfirm');
                btnLoanNegative.setAttribute('class', 'btnLoanNegative');

                pLoanConfirm.innerHTML = `${nameN}, <br> Deseja confirmar empréstimo de R$${loanInput.value}, com parcelamento de ${feesValue.mes}x de R$${parcel.toFixed(2)} com ${feesValue.juros}% ao mês ?`
                
                btnLoanConfirm.innerHTML = 'Confirmar';
                btnLoanNegative.innerHTML = 'Cancelar';

                contentLoanConfirm.appendChild(pLoanConfirm);
                contentLoanConfirm.appendChild(btnLoanConfirm);
                contentLoanConfirm.appendChild(btnLoanNegative);

                btnLoanNegative.addEventListener('click', function(){
                    getLoanConfirm.style.display = 'none';
                    getLoan.style.display = 'flex';
                    pLoanConfirm.innerHTML= '';
                    btnparcel.style.color = 'red';
                    screenHome.style.filter = 'blur(0.0em)';
                    loanInput.value = '';
                })

                btnLoanConfirm.addEventListener('click', function(){
                    screenHome.style.filter = 'blur(0.0em)';

                    let statementLoan = parseFloat(loanInput.value).toFixed(2)

                    statementBalance.push({Data: DateFull, Descricao: 'Empréstimo', Valor: `R$+${statementLoan}` })

                    loanBalance.pop();
                    loanBalance.push(loanInput.value);

                    const newBalance = Number(loanBalance[0]) + Number(userBalance[0]);

                    p.innerHTML = `Saldo disponível <br> R$ ***`;

                    userBalance.pop();
                    userBalance.push(newBalance);
                    cent();
                    

                    statementBalance.push({Data: DateFull, Descricao: 'Saldo conta', Valor: `R$${userBalance[0]}`});


                    getLoanConfirm.style.display = 'none';
                    getLoan.style.display = 'none';

                    alert('Empréstimo realizado com sucesso!')

                    loanInput.value = '';
                    activeLoan = false;
                  
                })
            })

            contentGetLoan.appendChild(btnparcel);
        }
    })

    loan.appendChild(pLoan);
    loan.appendChild(pLoanText);
    loan.appendChild(loanInput);
    loan.appendChild(loanBtn);

}
loanHome()

// PAGAMENTO -------

function payment(){
    const pPay = document.createElement('p');
    const pPayText = document.createElement('p');
    const pPayTextValue = document.createElement('p');
    const inputPay = document.createElement('input');
    const inputPayValue = document.createElement('input');
    const btnPay = document.createElement('button');

    pPay.innerHTML = 'PAGAMENTO<br><br>';
    pPayText.innerHTML= 'Informar código de barras:';

    pPay.style.color = 'white';
    pPayText.style.color = '#FCA84C';
    pPayText.style.fontSize = '1.2em';

    btnPay.setAttribute('class', 'btn-pay')
    btnPay.innerHTML = 'CONTINUAR'

    pPayTextValue.innerHTML = 'Informar valor:';
    pPayTextValue.style.color = '#FCA84C';
    pPayTextValue.style.fontSize = '1.2em';
    pPayTextValue.style.marginTop = '1em';

    inputPay.setAttribute('type', 'number');
    inputPay.setAttribute('class', 'payInput');

    inputPayValue.setAttribute('type', 'number');
    inputPayValue.setAttribute('class', 'payInput');
    inputPayValue.setAttribute('placeholder', 'R$ 000.00');

    pay.appendChild(pPay);
    pay.appendChild(pPayText);
    pay.appendChild(inputPay);
    pay.appendChild(pPayTextValue);
    pay.appendChild(inputPayValue);
    pay.appendChild(btnPay);

    btnPay.addEventListener('click', function(){
        if(inputPay.value <= 0 || inputPayValue.value <= 0 ){
            alert(`${nameN}, Gentileza informar o código de barras ou o valor para pagamento.`)
            return
        } 

        if(inputPayValue.value > Number(userBalance[0])){
            alert('Saldo insuficiente para transação!')
            
            return
        };
     
        PayValue.style.display = 'flex';
        screenHome.style.filter = 'blur(0.3em)';

        const pPayValue = document.createElement('p');                
        const btnPayConfirm = document.createElement('button');
        const btnPayNegative = document.createElement('button');

        btnPayConfirm.setAttribute('class', 'btnPayConfirm');
        btnPayNegative.setAttribute('class', 'btnPayNegative');
        pPayValue.innerHTML = `${nameN}, <br> O código ${inputPay.value} foi registrado com sucesso com o valor de R$${inputPayValue.value}. <br> Deseja confirmar o pagamento? `;

        btnPayConfirm.innerHTML = 'SIM';
        btnPayNegative.innerHTML = 'NÃO';
        
        contentPayValue.appendChild(pPayValue);
        contentPayValue.appendChild(btnPayConfirm);
        contentPayValue.appendChild(btnPayNegative);

        btnPayNegative.addEventListener('click', function(){
            pPayValue.innerHTML = '';
            PayValue.style.display = 'none';
            screenHome.style.filter = 'blur(0.0em)';
            inputPay.value = '';
            inputPayValue.value = '';

        })

        btnPayConfirm.addEventListener('click', function(){
            pPayValue.innerHTML = '';
            PayValue.style.display = 'none';
            screenHome.style.filter = 'blur(0.0em)';
            
            const payNow = Number(userBalance[0]) - inputPayValue.value;

            let statementPay = parseFloat(inputPayValue.value).toFixed(2)

            statementBalance.push({Data: DateFull, Descricao: 'Pagamento', Valor: `R$-${statementPay}`});


            userBalance.pop();
            userBalance.push(payNow);

            cent();

            statementBalance.push({Data: DateFull, Descricao: 'Saldo conta', Valor: `R$${userBalance[0]}`});


            inputPay.value = '';
            inputPayValue.value = '';
            p.innerHTML = `Saldo disponível <br> R$ ***`;

            alert('Pagamento efetuado!')

        })

    })

}
payment()

// PIX -------

function transferPix(){
    const pPix = document.createElement('p');
    const pPixKey = document.createElement('p');
    let inputPix = document.createElement('input');
    const pPixValue = document.createElement('p');
    const inputPixValue = document.createElement('input');
    const btnPix = document.createElement('button');
 
    const selectPixKey = document.createElement('select');
    selectPixKey.setAttribute('class', 'selectPixKey')
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');
 
    option1.text = 'ALEATÓRIO';
    option2.text = 'CPF';
    option3.text = 'E-MAIL';
    option4.text = 'TELEFONE';
 
    option1.value = 'ALEATÓRIO';
    option2.value = 'CPF';
    option3.value = 'E-MAIL';
    option4.value = 'TELEFONE';
 
    pPix.innerHTML = 'PIX';
    pPix.style.color = 'white';
 
    pPixKey.innerHTML = 'Chave:<br>';
    pPixKey.style.paddingTop = '1em';
    pPixKey.style.color = '#FCA84C';
    pPixKey.style.fontSize = '1.2em';
 
    inputPix.setAttribute('class', 'inputPix');
    inputPix.style.paddingLeft = '0.5em';
    inputPix.setAttribute('type', 'text');
    inputPix.setAttribute('placeholder', 'Selecionar a chave');

 
    function cpf(){
 
        const regexCPF = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
      
         if(inputPix.value.length === 3 ){
             inputPix.value = `${inputPix.value}.`;
         } else if (inputPix.value.length === 7) {
             inputPix.value = `${inputPix.value}.`;
         } else if(inputPix.value.length === 11 ){
             inputPix.value =`${inputPix.value}-`;
         } else if(inputPix.value.length >= 14){
             if(!regexCPF.test(inputPix.value)){ 
                 alert('CPF inválido'); 
                 inputPix.value = '';
             } 
         }
     
         inputPix.addEventListener('keydown', function(event){
             if(event.key ==='Backspace') {
                 if(inputPix.value.endsWith('-')){
                     inputPix.value = inputPix.value.slice(0, -1);
                 } else if (inputPix.value.endsWith('-')){
                     inputPix.value = inputPix.value.slice(0, -1);
                 } if(inputPix.value.endsWith('.')){
                     inputPix.value = inputPix.value.slice(0, -1);
                 };
             };
         });
    };
 
    function fone(){
        
         const regexFone = /^\([0-9]{2}\)[0-9]{5}\-[0-9]{4}$/
         
         if(inputPix.value.length === 1){
             inputPix.value = `(${inputPix.value}`;
         } else if(inputPix.value.length === 3){
             inputPix.value = `${inputPix.value})`;
         } else if(inputPix.value.length === 9){
             inputPix.value = `${inputPix.value}-`;
         } else if(inputPix.value.length >= 14){
             if(!regexFone.test(inputPix.value)){
                 alert('Telefone inválido');
                 inputPix.value = ''
                };
            };
 
         inputPix.addEventListener('keydown', function(event){
             if(event.key === 'Backspace'){
                
                if(inputPix.value.endsWith('-')){
                    inputPix.value = inputPix.value.slice(0, -1);
                } else if(inputPix.value.endsWith(')')){
                    inputPix.value = inputPix.value.slice(0, -1);
                } else if(inputPix.value.length <= 2){
                    inputPix.value = inputPix.value.slice(0, -2);
                }
            } 
        })
 
    }
    
 
    selectPixKey.addEventListener('change', function(){
        inputPix.removeEventListener('input', cpf)
        inputPix.removeEventListener('input', fone)
 
        if (selectPixKey.value === 'ALEATÓRIO'){
            inputPix.setAttribute('placeholder', 'EX:561234597');
            inputPix.value = ''
        };
 
        if (selectPixKey.value === 'CPF'){
            inputPix.setAttribute('placeholder', 'EX:123-456-789.10');
            inputPix.value = ''
            inputPix.addEventListener('input', cpf)
        };
 
        if (selectPixKey.value === 'E-MAIL'){
            inputPix.setAttribute('placeholder', 'EX: 123@GMAIL.COM');
            inputPix.value = ''
 
            btnPix.addEventListener('click', function(){
                if(!inputPix.value.includes('@') || !inputPix.value.includes('.com')){
                    alert('E-mail Inválido')
                    inputPix.value = ''
                    return
                };
            });            
        };
     
        if (selectPixKey.value === 'TELEFONE'){
            inputPix.setAttribute('placeholder', 'EX:(31) 99999-9999');
            inputPix.value = '';
            inputPix.addEventListener('input', fone);
        };
    })
 
  
    pPixValue.innerHTML = 'Informar valor:';
    pPixValue.style.color = '#FCA84C';
    pPixValue.style.fontSize = '1.2em';
    pPixValue.style.marginTop = '2.5em';
 
 
    inputPixValue.setAttribute('type', 'number');
    inputPixValue.setAttribute('class', 'payInput');
    inputPixValue.setAttribute('placeholder', 'R$ 000.00');
 
    btnPix.setAttribute('class', 'btn-pay');
    btnPix.innerHTML = 'CONTINUAR';
 
 
    pix.appendChild(pPix);
    pix.appendChild(pPixKey);
    pix.appendChild(selectPixKey);
    selectPixKey.appendChild(option1);
    selectPixKey.appendChild(option2);
    selectPixKey.appendChild(option3);
    selectPixKey.appendChild(option4);
    pix.appendChild(inputPix);
    pix.appendChild(pPixValue);
    pix.appendChild(inputPixValue);
    pix.appendChild(btnPix);
 
    btnPix.addEventListener('click', function(){
     if (inputPix.value === '' || inputPix.value < 1 || inputPixValue.value === '' || inputPixValue.value < 1){
         alert('Informar a chave ou o valor');
         inputPix.value = '';
         inputPixValue.value = '';
         return 
        }
 
     if(inputPixValue.value > Number(userBalance[0])){
         alert('Saldo insuficiente para transação!');
         inputPix.value = '';
         inputPixValue.value = '';
         return
        };
 
     screenHome.style.filter = 'blur(0.3em)';
 
 
     Pixvalue.style.display = 'flex';
 
     const pPixValuePopUP = document.createElement('p')
     pPixValuePopUP.color = 'white;'
 
     const btnPixConfirm = document.createElement('button');
     const btnPixNegative = document.createElement('button');
 
     btnPixConfirm.setAttribute('class', 'btnPixConfirm');
     btnPixNegative.setAttribute('class', 'btnPixNegative');
 
     btnPixConfirm.innerHTML = 'SIM'
     btnPixNegative.innerHTML = 'NÃO';
 
     pPixValuePopUP.innerHTML = `${nameN}, <br> A chave ${inputPix.value} foi registrada com sucesso com o valor de R$${inputPixValue.value}. <br> Deseja confirmar a transferência? `;
     
     contentPixValue.appendChild(pPixValuePopUP);
     contentPixValue.appendChild(btnPixConfirm);
     contentPixValue.appendChild(btnPixNegative);
 
     btnPixNegative.addEventListener('click', function(){
         screenHome.style.filter = 'none';
         inputPix.value = '';
         inputPixValue.value = '';
         pPixValuePopUP.innerHTML = '';
         Pixvalue.style.display = 'none';
     });
 
     btnPixConfirm.addEventListener('click', function(){
         screenHome.style.filter = 'none';
         Pixvalue.style.display = 'none';
 
         const newBalancePix = Number(userBalance[0]) - inputPixValue.value;

         let statementPix = parseFloat(inputPixValue.value).toFixed(2)

         statementBalance.push({Data: DateFull, Descricao: 'PIX', Valor: `R$-${statementPix}`});
 
         userBalance.pop()
         userBalance.push(newBalancePix)

         cent();

         statementBalance.push({Data: DateFull, Descricao: 'Saldo conta', Valor: `R$${userBalance[0]}`});

 
         inputPix.value = '';
         inputPixValue.value = '';
         pPixValuePopUP.innerHTML = '';

 
         p.innerHTML = `Saldo disponível <br> R$ ***`;
 
         alert('PIX realizado!')
        
        });
    });
};
transferPix()

// EXTRATO ----------

function bankStatement(){
    const btnStatement = document.createElement('button');
    const btnStatementCloser = document.createElement('button')

    btnStatement.setAttribute('class', 'btn-pay');
    btnStatement.innerHTML = 'EXTRATO';

    statement.appendChild(btnStatement);

    btnStatement.addEventListener('click', function(){
        screenHome.style.filter = 'blur(0.3em)';

        btnStatementCloser.setAttribute('class', 'btnStatementCloser');
        btnStatementCloser.innerHTML = 'X'

        StatementValue.style.display = 'flex';

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        
        table.setAttribute('class', 'table')

        const date = document.createElement('th')
        const description = document.createElement('th');
        const balanceTh = document.createElement('th');


        date.innerHTML = 'Data';
        description.innerHTML = 'Descrição';
        balanceTh.innerHTML = 'Valor';

        btnStatementCloser.addEventListener('click', function(){
            StatementValue.style.display = 'none';
            screenHome.style.filter = 'blur(0.0em)';

        });

        statementBalance.forEach(function(item){  
            const tr = document.createElement('tr');

            tr.style.fontSize = '0.8em';

            if(item.Descricao === 'Pagamento Cartão' || item.Descricao === 'Pagamento' || item.Descricao === 'PIX'){
                tr.style.color = 'red';
            };

            if(item.Descricao === 'Empréstimo'){
                tr.style.color = '#258a60';
            };

            tr.innerHTML = `
            <td>${item.Data}</td>
            <td>${item.Descricao}</td>
            <td>${item.Valor}</td>`;

            table.appendChild(tr)
            thead.appendChild(date);
            thead.appendChild(description);
            thead.appendChild(balanceTh);
            table.appendChild(thead);

            btnStatementCloser.addEventListener('click', function(){
                StatementValue.style.display = 'none';
                tr.innerHTML = '';
                date.innerHTML = '';
                description.innerHTML = '';
                balanceTh.innerHTML = '';
            });

           
        })

        const divHeight = 20; // altura fixa da div
        const tableHeight = table.offsetHeight;
        if (tableHeight > divHeight) {
            contentStatement.style.overflowY = 'scroll';
        } else {
            contentStatement.style.overflowY = 'auto';
        }

        contentStatement.appendChild(btnStatementCloser);
        contentStatement.appendChild(table);

    })

}
bankStatement();

// TELA CARREGAMENTO --------

function load(){ // tela de carregamento
    loading.style.display = 'inline';
    screenLoading.style.display = 'flex';
    loading.style.position = 'absolute';
    loading.style.top = '45%';
    loading.style.left = '40%';
    setTimeout(function(){
        loading.style.display = 'none';
        screenLoading.style.display = 'none';
    },1000)
}

// NOME --------

function nameText(){ // text nome usuário senha
    textName.innerHTML = `<p style="padding-left:5px;"> <br>Olá, ${userName}</p>`;
}

function nameTextHome(){ // text nome usuário home
    textName.innerHTML = `<p style="padding-left:5px;"> <br>${userName} - CC 123-4</p>`;
}
  
function lastName(){
    if (userName.length > 0){
        const letter = userName[0].charAt(0).toUpperCase();
        const twoLetter = userName[0].charAt(1).toUpperCase();
        nameLast.innerHTML = `<p style="text-align: center; padding-top:7px; font-size:30px;">${letter + twoLetter}</p>`;
    }
}

// HELP --------

function HelpPGOne(){ // botão help inicial
    btnHelp.addEventListener('click', function(){
        alert('Olá! Para iniciar, insira o seu nome. Conta de teste: 123-4')
    });
 
}
HelpPGOne() 

function HelpPGPassword(){
    btnHelpPassword.addEventListener('click', function(){
        alert(`Olá ${userName}, para iniciar, digite a senha de teste '1234'.`)
    });
}
HelpPGPassword()

// TELAS --------

function screenHomeInline(){
    load();
    setTimeout(function(){
        screenHome.style.display = 'flex'
    },1000)
}

function screenLoginHidden(){ // tela senha login
    screenLogin.style.display = 'none';
}

function screenPasswordHidden(){ // tela senha inativo
    screenPassword.style.display = 'none';
    screenPasswordTwo.style.display = 'none';
    screenHome.style.display = 'none';
    getLoan.style.display = 'none';
    getLoanConfirm.style.display = 'none';
    PayValue.style.display = 'none';
    Pixvalue.style.display = 'none'
    StatementValue.style.display = 'none';
}
screenPasswordHidden()

function screenPasswordInline(){ // tela senha ativa
    load() //tela de carregamento
    setTimeout(function(){
        screenPasswordTwo.style.display ='flex';
        screenPassword.style.display = 'flex';
        screenPassword.style.color = 'white';
    },1000)   
}   

function screenLoadHidden(){ // tela carregamento inativo
    screenLoading.style.display = 'none';
    loading.style.display = 'none';
}
screenLoadHidden()

// SENHA --------

function passwordValidate(){

    btnPassword.addEventListener('click', function(e){
        e.preventDefault()
        let passwordinformed = userPassword.join('')
        if (passwordValid === passwordinformed ){ 
            screenPasswordTwo.style.display ='none';
            home(); // tela home
        } else {
            alert('Senha inválida')
        }
        console.log(passwordinformed)
    })
   
}
passwordValidate() // senha   

function passwordClick(){

    zeroOrOne.addEventListener('click', function(e){
        e.preventDefault();
        displayPassword.value += 'A';
        userPassword.push(10)
        
    })
    twoOrThree.addEventListener('click', function(e){
        e.preventDefault();
        displayPassword.value += 'B';
        userPassword.push(20)
        
    })
    fourOrFive.addEventListener('click', function(e){
        e.preventDefault();
        displayPassword.value += 'C';
        userPassword.push(30)
        
    })
    sixOrSeven.addEventListener('click', function(e){
        e.preventDefault();
        displayPassword.value += 'D';
        userPassword.push(40)
        
    })
    eightOrNine.addEventListener('click', function(e){
        e.preventDefault();
        displayPassword.value += 'E';
        userPassword.push(50)
        
    })
    clear.addEventListener('click', function(e){
        e.preventDefault();
        userPassword.pop()
        displayPassword.value = displayPassword.value.substring(0, displayPassword.value.length -1 )
    })

}
