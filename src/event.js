const menuToggleEvent = (targetEl) => {
    const questionEl = targetEl;

        for (let i = 0; i < questionEl.length; i += 1) {
            targetEl[i].addEventListener('click', () => {
    
            for (let j = 0; j < questionEl.length; j += 1) {
                questionEl[j].classList.remove('is-show');
            }

            let answerNum = 'a-' + questionEl[i].getAttribute('value').split('q-')[1];
            let answerEl = document.querySelectorAll(`.table-box__a[value='${answerNum}']`)[0];
    
            if (answerEl.classList.contains('is-show')) {
                return answerEl.classList.remove('is-show');
            }
    
            return answerEl.classList.add('is-show');
        });
    }
}

const scrollEventCheck = targetTop => targetTop <= window.innerHeight;
const mobildMediaQuery = window.matchMedia("(max-width: 767px)");

const mobileScrollEvent = (mediaValue, targetEl) => {
    if (!mediaValue.matches || !targetEl) {
        return false;
    }
    
    for (let i = 0; i < targetEl.length; i += 1) {
        let targetTop = targetEl[i].getBoundingClientRect().top;

        if(!scrollEventCheck(targetTop)){
            targetEl[i].classList.add('is-scroll-animation');
        }
    }
    
    window.addEventListener("scroll", () => {
        for (let i = 0; i < targetEl.length; i += 1) {
            let targetTop = targetEl[i].getBoundingClientRect().top;

            if (scrollEventCheck(targetTop)) {
                targetEl[i].classList.add('is-scroll-animation-show');

            } else {
                targetEl[i].classList.remove('is-scroll-animation-show');
            }
        }
    });

    return true;
};

document.addEventListener('DOMContentLoaded', () => {

    // document.getElementById('profileMoreBtn').addEventListener('click', (v) => {
    //     if (document.getElementById('profileEl').classList.contains('is-5-lines-only')) {

    //         document.getElementById('profileEl').classList.remove('is-5-lines-only');
    //         document.getElementById('profileMoreBtn').innerText = 'hide';

    //     } else {
    //         document.getElementById('profileEl').classList.add('is-5-lines-only');
    //         document.getElementById('profileMoreBtn').innerText = 'more';
    //     }
    // });

    if( document.getElementsByClassName('table-box__q')) { 
        menuToggleEvent(document.getElementsByClassName('table-box__q'));
    }
    
    if (document.querySelectorAll('.side-project-list > li')) {
        for (let i = 0; i < document.querySelectorAll('.side-project-list > li').length; i += 1) {
            document.querySelectorAll('.side-project-list > li')[i].addEventListener('click', () => {
                for (let j = 0; j < document.querySelectorAll('.side-project-list > li').length; j += 1) {
                    document.querySelectorAll('.side-project-list > li')[j].classList.remove('is-active');
                }
        
                document.querySelectorAll('.side-project-list > li')[i].classList.add('is-active');
            });
        }
    }
    
    if (document.getElementById('sideProjectLinkText')) {
        document.getElementById('sideProjectLinkText').addEventListener('click', () => {
            document.querySelectorAll('.side-project-list > li')[0].click();
        });
    }

    mobileScrollEvent(mobildMediaQuery, document.querySelectorAll('li'));
});