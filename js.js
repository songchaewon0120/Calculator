let plusBtn = document.getElementById('plus-btn'); //작은버튼
let minusBtn = document.getElementById('minus-btn'); //작은버튼
let btnModal = document.getElementById('btn-modal');
let okBtn = document.getElementById('ok-btn');
let div3Element = []
let plusBtnSelect = document.getElementById('plus-btn-select') //선택창
let minusBtnSelect = document.getElementById('minus-btn-select') //선택창

//플러스 마이너스 선택창 클릭이벤트
minusBtn.addEventListener('click', () => {
    btnModal.classList.remove('hidden');
});

plusBtn.addEventListener('click', () => {
    btnModal.classList.remove('hidden');
});

plusBtnSelect.addEventListener('click', () => {
    minusBtn.classList.add('hidden')
    plusBtn.classList.remove('hidden')
    btnModal.classList.add('hidden');
});

minusBtnSelect.addEventListener('click', () => {
    plusBtn.classList.add('hidden')
    minusBtn.classList.remove('hidden')
    btnModal.classList.add('hidden');

})



// ok버튼 눌렀을때
okBtn.addEventListener('click', () => {
    addList();
})

// 아래에 div생성, 값이 아래로 내려감
function addList() {
    let obj = getMemoAndNumber();
    let memo = obj[0];
    let number = obj[1];

    if (memo.value == '' || number.value == '') {
        alert('값을 적어주세요.');
        return;
    }

    //마이너스 버튼일때
    if (plusBtn.classList.contains('hidden')) {
        number.value = -number.value
    } else {
        number.value = number.value
    }

    //div 생성
    let listWrap = document.getElementById('list-wrap');

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'last-of-type:mb-[40px] flex justify-between items-center my-1');

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'w-[41vw] h-[30px] border-y pl-2');
    div2.innerHTML = memo.value;

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'w-[41vw] h-[30px] border-y text-right pr-2');
    div3.innerHTML = number.value;

    div1.appendChild(div2);
    div1.appendChild(div3);
    listWrap.appendChild(div1);

    // 새롭게 생성된 div에 값 넣기
    div3Element.push(Number(number.value))

    //total 값
    let totalElement = document.getElementById('total');

    total = div3Element.reduce((sum, value) => sum + value, 0);

    totalElement.textContent = total;

    deleteValue();

}


function getMemoAndNumber() {
    let memo = document.getElementById('input-memo');
    let number = document.getElementById('input-number');

    return [memo, number]
}


function deleteValue() {
    let memo = document.getElementById('input-memo');
    let number = document.getElementById('input-number');
    memo.value = '';
    number.value = '';
}

//색상 바꾸는 이벤트
let boxShadowStyle = document.getElementById('box-shadow-style')
let totalStyle = document.getElementById('total-style')
let head = document.getElementById('head')
// okBtn
// plus-btn-select
// minus-btn-select
//plus-btn
//minus-btn

//삭제하기
function removeClass () {
    head.classList.remove('bg-[#ddd]')
    boxShadowStyle.classList.remove('shadow-[0px_0px_50px_-12px_rgb(0,0,0,0.25)')
    totalStyle.classList.remove('bg-gray-300')
    okBtn.classList.remove('bg-black')
    plusBtn.classList.remove('bg-black')
    minusBtn.classList.remove('bg-black')
    plusBtnSelect.classList.remove('bg-black')
    minusBtnSelect.classList.remove('bg-black')

    boxShadowStyle.classList.remove('shadow-[0px_0px_50px_-12px_rgb(248,232,238)')
    totalStyle.classList.remove('bg-[#FDCEDF]')
    okBtn.classList.remove('bg-[#FF597B]')
    plusBtn.classList.remove('bg-[#FF597B]')
    minusBtn.classList.remove('bg-[#FF597B]')
    plusBtnSelect.classList.remove('bg-[#FF597B]')
    minusBtnSelect.classList.remove('bg-[#FF597B]')

    boxShadowStyle.classList.remove('shadow-[0px_0px_50px_-12px_rgb(147,191,207)')
    totalStyle.classList.remove('bg-[#BDCDD6]')
    okBtn.classList.remove('bg-[#6096B4]')
    plusBtn.classList.remove('bg-[#6096B4]')
    minusBtn.classList.remove('bg-[#6096B4]')
    plusBtnSelect.classList.remove('bg-[#6096B4]')
    minusBtnSelect.classList.remove('bg-[#6096B4]')
    head.classList.remove('bg-[#FDCEDF]')
    head.classList.remove('bg-[#BDCDD6]')

}

function pink() {
    removeClass();
    //추가
    head.classList.add('bg-[#FDCEDF]')
    boxShadowStyle.classList.add('shadow-[0px_0px_50px_-12px_rgb(248,232,238)')
    totalStyle.classList.add('bg-[#FDCEDF]')
    okBtn.classList.add('bg-[#FF597B]')
    plusBtn.classList.add('bg-[#FF597B]')
    minusBtn.classList.add('bg-[#FF597B]')
    plusBtnSelect.classList.add('bg-[#FF597B]')
    minusBtnSelect.classList.add('bg-[#FF597B]')

}

function gray() {
    removeClass();
    //추가
    head.classList.add('bg-[#ddd]')
    boxShadowStyle.classList.add('shadow-[0px_0px_50px_-12px_rgb(0,0,0,0.25)')
    totalStyle.classList.add('bg-gray-300')
    okBtn.classList.add('bg-black')
    plusBtn.classList.add('bg-black')
    minusBtn.classList.add('bg-black')
    plusBtnSelect.classList.add('bg-black')
    minusBtnSelect.classList.add('bg-black')

}

function blue() {
    removeClass();
    //추가
    head.classList.add('bg-[#BDCDD6]')
    boxShadowStyle.classList.add('shadow-[0px_0px_50px_-12px_rgb(147,191,207)')
    totalStyle.classList.add('bg-[#BDCDD6]')
    okBtn.classList.add('bg-[#6096B4]')
    plusBtn.classList.add('bg-[#6096B4]')
    minusBtn.classList.add('bg-[#6096B4]')
    plusBtnSelect.classList.add('bg-[#6096B4]')
    minusBtnSelect.classList.add('bg-[#6096B4]')

}

let grayBtn = document.getElementById('gray-btn')
let pinkBtn = document.getElementById('pink-btn')
let blueBtn = document.getElementById('blue-btn')

grayBtn.addEventListener('click', () => {
    gray();
})
pinkBtn.addEventListener('click', () => {
    pink();
})
blueBtn.addEventListener('click', () => {
    blue();
})





