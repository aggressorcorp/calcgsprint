window.onload = function() {
    let heightVal = undefined;
    let weightVal = undefined;
    let countVal = undefined;
    const alertmsg = document.getElementById("alertVal");
    const startBtn = document.getElementById("start");
    const stepOne = document.getElementById("step1");
    const stepTwo = document.getElementById("step2");
    const stepThree = document.getElementById("step3");
    const stepFour = document.getElementById("step4");
    const stepFive = document.getElementById("step5");
    const stepSix = document.getElementById("step6");
    const stepSeven = document.getElementById("step7");

    const btnResult = document.getElementById("result");
    var totalPrice = 0;
    var totalMprint = 0;
    const radios1 = document.querySelectorAll('input[type=radio][name="origin"]');
    const radios2 = document.querySelectorAll('input[type=radio][name="thin"]');
    const radios3 = document.querySelectorAll('input[type=radio][name="print"]');
    const radios4 = document.querySelectorAll('input[type=radio][name="printType"]');
    const radios5 = document.querySelectorAll('input[type=radio][name="cutType"]');
    const radios6 = document.querySelectorAll('input[type=radio][name="dot"]');
    const radios7 = document.querySelectorAll('input[type=radio][name="dot_count"]');
    var selectMaterial = '';
    var thinMaterial = '';
    var typePrint = '';
    var typeFace = '';
    var typeCut = '';
    var typeDot = '';
    var dotCount = '';

  

    startBtn.addEventListener("click", function(){
        //console.log(1);
        let aa = document.querySelectorAll('.text_res_order');
        let bb = document.querySelectorAll('.upd');
        if(aa != null || bb != null){
            btnResult.classList.add('hide');
            aa.forEach(a => a.remove());
            bb.forEach(b => b.remove());
            document.getElementById('resultForm').classList.add('hiden');
        }
        heightVal = document.getElementById("hVal");
        weightVal = document.getElementById("wVal");
        countVal = document.getElementById("countVal");
        if (Number(heightVal.value) > 1250 && Number(weightVal.value) > 2500) {
            alertmsg.classList.remove('hiden');
        }
        stepOne.classList.remove('hiden');
        totalMprint = ((Number(heightVal.value)/1000)*(Number(weightVal.value)/1000))*Number(countVal.value);
        console.log(totalMprint);
    });
    radios1.forEach(radio => radio.addEventListener("click", () => {
        selectMaterial = radio.value;
        console.log(selectMaterial);
        if(selectMaterial == '???????????????? ??????????'){
            document.getElementById("optional1").classList.add('hiden');
        } else {
            document.getElementById("optional1").classList.remove('hiden');
        }
        stepTwo.classList.remove('hiden');
        stepTwo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));
    radios2.forEach(radio1 => radio1.addEventListener("click", () => {
        thinMaterial = radio1.value;
        console.log(thinMaterial);
        stepThree.classList.remove('hiden');
        stepThree.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));
    radios3.forEach(radio2 => radio2.addEventListener("click", () => {
        typePrint = radio2.value;
        console.log(typePrint);
        stepFour.classList.remove('hiden');
        stepFour.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));
    radios4.forEach(radio3 => radio3.addEventListener("click", () => {
        typeFace = radio3.value;
        console.log(typeFace);
        stepFive.classList.remove('hiden');
        stepFive.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));
    radios5.forEach(radio4 => radio4.addEventListener("click", () => {
        typeCut = radio4.value;
        console.log(typeCut);
        stepSix.classList.remove('hiden');
        stepSix.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));
    radios6.forEach(radio5 => radio5.addEventListener("click", () => {
        typeDot = radio5.value;
        console.log(typeDot);
        if (typeDot == '?????? ??????????????') {
            btnResult.classList.remove('hide');
            btnResult.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            stepSeven.classList.remove('hiden');
            stepSeven.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })};
    }));
    radios7.forEach(radio6 => radio6.addEventListener("click", () => {
        dotCount = radio6.value;
        console.log(typeDot);
        btnResult.classList.remove('hide');
        stepSeven.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }));




    btnResult.addEventListener("click", () => {
        const fieldRess = document.getElementById("block_property");
        const fieldPrice = document.getElementById("block_price");

        let eur = 0;
        let printPrice = new Map([
            ["?????????????????????????????? ???????????? ???????? 4+0", 280],
            ["?????????????????????????????? ???????????? ???????? (x2 ??????????????????????) 2CMYK", 390],
            ["?????????????????????????? ???????????? ???????? ?? ?????????? CMYK+W", 510],
            ["???????? ???? ???????????????? ???????????? ???? ?????????????????? ???????? ???? ?????????? 4+0", 410],
            ["???????? ???? ???????????????? ???????????? ???? ?????????????????? ???????? ???? ?????????? 2CMYK", 530]
        ]);

        //$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function (result) {
        //    console.log(result[1].sale);
        //    eur = result[32].rate + 0.4;
        //});

        let materialPrice = new Map([
            ["???????????????? ??????????2????", 100.47*38.5],
            ["???????????????? ??????????3????", 149.17*38.5],
            ["???????????????? ??????????4????", 200.83*38.5],
            ["???????????????? ??????????2????", 117.88*38.5],
            ["???????????????? ??????????3????", 176.74*38.5],
            ["???????????????? ??????????4????", 235.55*38.5],
            ["Oracal", 1.58*38.5],
        ]);

        let priceCutType = new Map([
            ["????????????????????", 10],
            ["???????????? ?????????????? ????????????", 15]
        ]);

        let metersPrint = (Number(heightVal.value)/1000)*(Number(weightVal.value)/1000);
        let cutPrice = new Map();
        let priceOnePos = 0;

        if(typeCut == '????????????????????' & selectMaterial == '???????????????? ??????????' || typeCut == '???????????? ?????????????? ????????????' & selectMaterial == '???????????????? ??????????'){
            cutPrice.set("2????", 16.0752*38.5)
                    .set("3????", 23.8672*38.5)
                    .set("4????", 32.1328*38.5);
        } else {
            cutPrice.set("2????", 18.8608*38.5)
                    .set("3????", 28.2784*38.5);
        };
        let dots = (dotCount=='???? ??????????') ? 10:
                    (dotCount=='?? ???????????? 300????') ? (((Number(weightVal.value)/1000)*2)/0.3)*4:
                    (dotCount=='?? ???????????? 500????') ? (((Number(weightVal.value)/1000)*2)/0.5)*4:
                    0;

        priceOnePos = (materialPrice.get(selectMaterial+thinMaterial)/6.25)*metersPrint
                        +(printPrice.get(typePrint)*metersPrint)
                        +dots
                        +priceCutType.get(typeCut)*((Number(heightVal.value)/1000)*2
                        +(Number(weightVal.value)/1000)*2);
        (typePrint == '???????? ???? ???????????????? ???????????? ???? ?????????????????? ???????? ???? ?????????? 4+0' || typePrint == '???????? ???? ???????????????? ???????????? ???? ?????????????????? ???????? ???? ?????????? 2CMYK' ) ? priceOnePos = priceOnePos + materialPrice.get('Oracal')*metersPrint : console.log('without');
        
        let pricesFull = priceOnePos * Number(countVal.value);
		(pricesFull < 250) ? (priceOnePos = 250 / Number(countVal.value)) : (console.log('>250'));
		(pricesFull < 250) ? (pricesFull = 250) : (console.log('>250'));
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>?????????????????? ??????????????:</strong> '+dotCount+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>?????????????????? ??????????????:</strong> '+typeDot+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>?????? ??????????:</strong> '+typeCut+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>?????????????? ??????????:</strong> '+typeFace+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>?????? ??????????:</strong> '+typePrint+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>??????????????:</strong> '+thinMaterial+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>????????????????:</strong> '+selectMaterial+'</div>');
        
        //blockMathPrice
        fieldPrice.insertAdjacentHTML('afterbegin', '<div class="numberPrice2 upd" id="priceTag2"><span>???????? 1???? = '+priceOnePos.toFixed(2)+'??????.</span></div>');
        fieldPrice.insertAdjacentHTML('afterbegin', '<div class="numberPrice2 upd" id="priceTag3"><span>??.???? ?????????? ?????????????? = '+totalMprint.toFixed(2)+'</span></div>');
        fieldPrice.insertAdjacentHTML('afterBegin', '<div class="numberPrice upd" id="priceTag"><span><strong>'+pricesFull.toFixed(2)+' ??????.</strong></span></div>');
        fieldPrice.insertAdjacentHTML('afterBegin', '<div class="namePrice upd"><span>????????????:</span></div>');
        

        stepSeven.classList.add('hiden');
        stepSix.classList.add('hiden');
        stepFive.classList.add('hiden');
        stepFour.classList.add('hiden');
        stepThree.classList.add('hiden');
        stepTwo.classList.add('hiden');
        stepOne.classList.add('hiden');
        document.getElementById('resultForm').classList.remove('hiden');
        fieldRess.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        btnResult.classList.add('hide');
    });
 };
