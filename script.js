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
        if(selectMaterial == 'Молочний акрил'){
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
        if (typeDot == 'Без отворів') {
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
            ["Повнокольоровий прямий друк 4+0", 280],
            ["Повнокольоровий прямий друк (x2 Насиченість) 2CMYK", 390],
            ["Повноколірний прямий друк з білим CMYK+W", 510],
            ["Друк на прозорій плівці та ламінація його на акрил 4+0", 410],
            ["Друк на прозорій плівці та ламінація його на акрил 2CMYK", 530]
        ]);

        //$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function (result) {
        //    console.log(result[1].sale);
        //    eur = result[32].rate + 0.4;
        //});

        let materialPrice = new Map([
            ["Прозорий акрил2мм", 100.47*38.5],
            ["Прозорий акрил3мм", 149.17*38.5],
            ["Прозорий акрил4мм", 200.83*38.5],
            ["Молочний акрил2мм", 117.88*38.5],
            ["Молочний акрил3мм", 176.74*38.5],
            ["Молочний акрил4мм", 235.55*38.5],
            ["Oracal", 1.58*38.5],
        ]);

        let priceCutType = new Map([
            ["Прямокутна", 10],
            ["Згідно вектору макету", 15]
        ]);

        let metersPrint = (Number(heightVal.value)/1000)*(Number(weightVal.value)/1000);
        let cutPrice = new Map();
        let priceOnePos = 0;

        if(typeCut == 'Прямокутна' & selectMaterial == 'Прозорий акрил' || typeCut == 'Згідно вектору макету' & selectMaterial == 'Прозорий акрил'){
            cutPrice.set("2мм", 16.0752*38.5)
                    .set("3мм", 23.8672*38.5)
                    .set("4мм", 32.1328*38.5);
        } else {
            cutPrice.set("2мм", 18.8608*38.5)
                    .set("3мм", 28.2784*38.5);
        };
        let dots = (dotCount=='По кутах') ? 10:
                    (dotCount=='З кроком 300мм') ? (((Number(weightVal.value)/1000)*2)/0.3)*4:
                    (dotCount=='З кроком 500мм') ? (((Number(weightVal.value)/1000)*2)/0.5)*4:
                    0;

        priceOnePos = (materialPrice.get(selectMaterial+thinMaterial)/6.25)*metersPrint
                        +(printPrice.get(typePrint)*metersPrint)
                        +dots
                        +priceCutType.get(typeCut)*((Number(heightVal.value)/1000)*2
                        +(Number(weightVal.value)/1000)*2);
        (typePrint == 'Друк на прозорій плівці та ламінація його на акрил 4+0' || typePrint == 'Друк на прозорій плівці та ламінація його на акрил 2CMYK' ) ? priceOnePos = priceOnePos + materialPrice.get('Oracal')*metersPrint : console.log('without');
        
        let pricesFull = priceOnePos * Number(countVal.value);
		(pricesFull < 250) ? (priceOnePos = 250 / Number(countVal.value)) : (console.log('>250'));
		(pricesFull < 250) ? (pricesFull = 250) : (console.log('>250'));
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Кількість отворів:</strong> '+dotCount+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Наявність отворів:</strong> '+typeDot+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Тип форми:</strong> '+typeCut+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Сторона друку:</strong> '+typeFace+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Тип друку:</strong> '+typePrint+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Товщина:</strong> '+thinMaterial+'</div>');
        fieldRess.insertAdjacentHTML('afterBegin', '<div class="text_res_order"><strong>Матеріал:</strong> '+selectMaterial+'</div>');
        
        //blockMathPrice
        fieldPrice.insertAdjacentHTML('afterbegin', '<div class="numberPrice2 upd" id="priceTag2"><span>Ціна 1шт = '+priceOnePos.toFixed(2)+'грн.</span></div>');
        fieldPrice.insertAdjacentHTML('afterbegin', '<div class="numberPrice2 upd" id="priceTag3"><span>м.кв друку сумарно = '+totalMprint.toFixed(2)+'</span></div>');
        fieldPrice.insertAdjacentHTML('afterBegin', '<div class="numberPrice upd" id="priceTag"><span><strong>'+pricesFull.toFixed(2)+' грн.</strong></span></div>');
        fieldPrice.insertAdjacentHTML('afterBegin', '<div class="namePrice upd"><span>ВСЬОГО:</span></div>');
        

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
