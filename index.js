document.getElementById('profileMoreBtn').addEventListener('click', function() {
    if (document.getElementById('profileEl').classList.contains('is-5-lines-only')) {
        
        // 숨김처리에서 -> 모두 보이게 하기
        document.getElementById('profileEl').classList.remove('is-5-lines-only');
        document.getElementById('profileMoreBtn').innerText = 'hide';

    } else {

        // 모두 보이기 -> 숨김처리
        document.getElementById('profileEl').classList.add('is-5-lines-only');
        document.getElementById('profileMoreBtn').innerText = 'more';
    }
});


for(let i = 0; i < document.getElementsByClassName('table-box__q').length; i += 1) {
    document.getElementsByClassName('table-box__q')[i].addEventListener('click', function() {

        // 모두 닫기
        for(let j = 0; j < document.getElementsByClassName('table-box__q').length; j += 1) {
            document.querySelectorAll(`.table-box__q`)[j].classList.remove('is-show');
        }


        let targetNum = 'a-' + document.getElementsByClassName('table-box__q')[i].getAttribute('value').split('q-')[1];
        console.log(`targetNum : ${targetNum}`);
        console.log(document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0]);

        if (document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0].classList.contains('is-show')) {
            // document.getElementsByClassName('table-box__q')[i].classList.remove('is-show');
            return document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0].classList.remove('is-show');
            // return document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0].style.display = "block";
        }

        // document.getElementsByClassName('table-box__q')[i].classList.add('is-show');
        return document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0].classList.add('is-show');
        // return document.querySelectorAll(`.table-box__a[value='${targetNum}']`)[0].style.display = "none";
        
        
    });
}

for (let i = 0; i < document.querySelectorAll('.side-project-list > li').length; i += 1) {
    document.querySelectorAll('.side-project-list > li')[i].addEventListener('click', function() {
        for (let j = 0; j < document.querySelectorAll('.side-project-list > li').length; j += 1) {
            document.querySelectorAll('.side-project-list > li')[j].classList.remove('is-active');
        }

        document.querySelectorAll('.side-project-list > li')[i].classList.add('is-active');

    });
}

document.getElementById('sideProjectLinkText').addEventListener('click', function() {
    document.querySelectorAll('.side-project-list > li')[0].click();
});