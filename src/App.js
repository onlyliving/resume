import React, { Component } from 'react';
import TopInfo from './components/TopInfo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoLink : [
                {type: 'email', link: 'mailto:greensohee88@naver.com', desc: 'greensohee88@naver.com', display: 'on'},
                {type: 'github', link: 'https://github.com/onlyliving/Side-Projects', desc: 'https://github.com/onlyliving', display: 'on'},
                {type: 'notion', link: 'https://www.notion.so/14ef995b935e471abc9b3ab5be30196e', desc: '개발 블로그', display: 'on'},
                {type: 'insta', link: 'https://www.instagram.com/soheegreen', desc: '인스타그램', display: 'on'},
                {type: 'tistory', link: 'http://green-webdesigner.tistory.com/', desc: '티스토리', display: 'off'},
            ],
            profile : `웹 프론트엔드 개발자 김소희입니다.
            <br/>개발자로 일을 시작하기 전부터 웹사이트 디자인에 관심이 많았습니다. 기획과 디자인 의도대로 구현하는 것이 재미있고, 보람됩니다. 그리고 기획단에서 생각하지 못한 디테일을 체크하고, 같이 의견을 맞대어 더 나은 결과물로 발전될 때 더욱 보람을 느낍니다.
            <br/><br/>저는 스타트업에서 웹 프론트 개발 및 유지보수를 하였습니다. 바닐라 자바스크립트를 썼고, 웹팩으로 최적화하였습니다.
            이전 회사에서 JS 라이브러리나 프레임워크를 다루지 않았던 것은 ‘나중에 필요하면 도입’하는 것으로 개발팀 내에서 협의가 이뤄진 사항이었습니다. 그 이유는 제가 자바스크립트를 더 잘 다뤘으면 하는 바람이었을 것입니다.
            <br/><br/>스타트업에 들어오면서 기존에 다뤘던 제이쿼리는 모두 자바스크립트로 교체하였습니다. 그리고 처음에는 무조건 동작이 되게끔 하는 것이 목표였지만, 나중에는 실행되는 것을 넘어서 최적화하는 작업에 집중할 수 있게 되었습니다. 그렇게 개발 단계를 거치면서 잘 짜인 코드의 중요성과 필요성을 몸소 깨닫게 되었습니다.
            <br/><br/>그래서 저는 개발을 ‘잘’ 하는 개발자가 되고 싶습니다.
            <br/>지금은 구직활동을 하면서 <a id="sideProjectLinkText" href="#sideProjectHead" className="point-link">사이드 프로젝트</a>를 진행해보았고, 리엑트의 필요성을 알기 위해서 리엑트 공부를 하고 있습니다.`,
            work: [
                {
                    company: '(주)휴마트컴퍼니',
                    position: '개발팀 - 프론트엔드 개발자',
                    period: '2018.6.5 ~ 2019.12',
                    link : 'https://trost.co.kr/',
                    skill : ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'Zeplin', 'GitLab', 'Trello', 'SourceTree', 'Postman', 'InteliJ', 'Visual Studio Code'],
                    workDetail : [
                        {head: 'PC 웹페이지 서비스 개발', content: ['- 입사 당시 모바일 서비스만 있고, PC 웹사이트를 개발해야 하는 단계에 있었음', '- 기획에 따라 웹페이지 개선 및 구축. (html 마크업 및 퍼블리싱, RESTful API 연결 등 기능 구현)', '- 깃랩으로 이슈 관리 (기획, 마케팅 등과 협의 시에는 트렐로로 관리)']},
                        {head: '앱 내의 웹페이지 서비스 개발', content: ['- 개발팀 협의로 앱 내에 웹페이지 개발로 필요한 부분은 웹 포지션으로 개발 (개발 변경이 잦은 서비스 페이지 등)']},
                        {effect: '데이터를 다루는 것을 알게 되었습니다. (서버 개발자와 API 요청과 응답에 대한 규칙 정하기, 언제 어떤 데이터를 불러와야 하는지 등) 웹앱에서 앱과의 통신하는 협업 과정도 기억에 크게 남습니다.'}
                    ]
                },
                {
                    company: '(주)룸앤스페이스',
                    position: '개발팀 - 웹퍼블리셔',
                    period: '2016.9 ~ 2018.5',
                    link : 'https://roomnspace.co.kr/',
                    skill : ['HTML5', 'CSS3', 'jQuery', 'Javascript', 'Adobe photoshop', 'Adobe Illustrator'],
                    workDetail : [
                        {head: '웹사이트와 모바일웹 구축을 위한 디자인 및 퍼블리싱 작업', content: ['- 입사 당시 서버 구축만 되어있는 상태에서 처음부터 같이 개발을 시작하였음', '- 웹 작업 비율(%) = 웹 디자인 작업 70% + 퍼블리싱 30%', '- 웹 디자인과 퍼블리싱 작업을 병행하여, 비교적 디자인 작업을 많이 함']},
                        {effect: '웹디자인(UI, UX)에 대한 감각을 키웠습니다. 서버 개발자와 협업하면서 작업관리 시스템의 필요성을 느꼈습니다. (겨우 두명이지만 같이 코드를 공유하면서 업데이트 되어야 할 코드가 지워지는 등 코드 관리 문제가 있었습니다.) 웹 퍼블리셔로 일하면서 개발에 대한 갈증이 더욱 생겼습니다.'}
                    ]
                },
                {
                    company: '조경설계 이화원',
                    position: '설계팀 - 디자이너',
                    period: '2011.3 ~ 2015.10',
                    link : 'http://www.ehwawon.kr/2016_ehwawon.pdf',
                    skill : ['AutoCAD', 'SketchUp', 'Adobe photoshop', 'Adobe Illustrator'],
                    workDetail : [
                        {content: ['계획설계/기본설계/실시설계']},
                        {effect: '세상을 보는 시야가 넓어졌습니다. 길을 걷다가도 바닥 포장재와 패턴, 배수 형태, 어떤 조경수를 심었는지, 옥외 계단 구조물 등 설계가 눈에 보이고, 잘 꾸며진 공간일수록 그 디테일이 더 눈에 들어옵니다.'}
                    ]
                },
            ],
            TechnologyStack : ['HTML5 (4)', 'CSS3 (4)', 'JavaScript (3)', 'React.js (1.5)', 'Webpack (2)'],
            SideProject : [
                {
                    head : '개인 사이드 프로젝트',
                    period : '2020.03',
                    shortText: '오픈 API를 이용한 배경이미지 검색 구현',
                    linkList: [
                        {title: '사이드프로젝트 오픈소스(github)', link: 'https://github.com/onlyliving/Side-Projects'}
                    ],
                    desc: '오픈 API를 이용한 단기 프로젝트로 의미 있는 서비스가 무엇이 있을까 고민하였습니다. 그러다가 제가 웹디자이너로 일할 때 배경 이미지를 고르는 대에 시간을 많이 소비했던 기억이 떠올랐습니다. 웹 디자이너와 마케팅 업무에 도움이 될 것으로 예상합니다.'
                },
                {
                    head : '프론트엔드 개발 노트',
                    period : '2019.01 ~',
                    linkList: [
                        {title: '개발 노트(notion)', link: 'https://www.notion.so/14ef995b935e471abc9b3ab5be30196e'},
                    ],
                    desc: '그동안 개발 작업을 하면서 필요한 내용을 정리해 둔 개발 노트입니다. 경험한 것을 기록하고, 알아야 하는 모든 것을 기록하려고 합니다.'
                },
                {
                    head : '스터디 프로젝트\n(도서관리 시스템 만들기)',
                    period : '2018.06',
                    linkList: [
                        {title: '도서관리 시스템 웹 디자인(zeplin)', link: 'https://zpl.io/scene/a3oRmkY'},
                    ],
                    desc: '스터디 프로젝트 (도서 관리 시스템 만들기) : 개발 스터디에서 같이 프로젝트를 시작해서 어떠한 성과를 만들어보고 싶었습니다. 어떤 니즈가 있을까 얘기하다가 도서 관리 시스템을 만들어보자는 의견이 나와서 시작하게 되었습니다. 제가 디자인을 할 줄 알아서 제가 디자인을 담당했고 모두의 의견을 받아서 디자인 진행을 하였습니다. 프론트 개발은 다른 개발자분과 같이 하기로 했습니다. 비록 개발 진행 중에 멈춰버렸지만, 의미 있는 작업이었습니다.'
                },
                {
                    head : '가상선택자를 이용하여 간단한 UI 오픈소스 제공',
                    period : '2018.01',
                    linkList: [
                        {title: 'CSS 가상요소로 버튼 만들기(codepen)', link: 'https://codepen.io/greensohee/pen/qpVVOb'},
                        {title: 'CSS 가상요소로 글머리 모양 만들기(codepen)', link: 'https://codepen.io/greensohee/pen/aEYvXo'},
                    ],
                    desc: '개발 스터디 다니면서 여러 직군의 개발자와 소통하며 코드 리뷰를 했었습니다. 제가 코드 리뷰하는 중에 간단한 도형이나 화살표를 이미지를 쓰지 않고 가상선택자로 구현하는 것을 보고 관심 있어 하는 분들이 계셔서, 자주 쓰는 UI 관련 코드를 오픈소스로 제공하였습니다.'
                },
            ],
            qna : [
                {question : '업무상 강점은 무엇인가요?', answer: `웹디자인 경험이 있어서 기획, 디자인팀과 업무 커뮤니케이션이 원만합니다. 필요하면 간단한 디자인은 제가 하기도 합니다.<br/>일에 대한 책임감과 욕심이 있습니다.<br/>일은 제 삶의 중요한 원동력이기 때문에 더 잘하려고 노력하고, 같이 성장하려고 합니다.`},
                {question : '웹 개발에서 버그 이슈가 생겼을 경우 어떻게 대처하나요?', answer: `개발팀에서 일하면서 같이 공유하고 진행했던 대처 방안 흐름입니다.<br/><br/>1. 버그를 감지했을 때, 무조건 개발팀에 버그에 대한 문제 현상을 공유합니다.<br/>2. 사용자가 불편함을 느낄 수 있는 크리티컬한 문제일 경우, CS팀에도 내용을 공지해서 빠른 대응을 할 수 있도록 합니다.<br/>3. 크리티컬한 이슈면 일단 서비스가 정상적으로 진행될 수 있도록 조처를 합니다.<br/>4. 버그의 근본적인 원인을 찾아서, 바로 문제를 해결할 수 있는지 오래 걸리는지 체크합니다.<br/>5. 바로 수정이 가능한 부분은 최대한 빠르게 검토하여 테스트한 후에 배포하고 내용을 알립니다.<br/>6. 오래 걸리는 이슈는 CS팀에도 양해를 구하고 개발팀 내부에서 합심하여 문제를 해결하여 대처합니다.<br/>7. 버그 이슈가 해결되면 깃랩 이슈 보드에 기록하고, 개발팀 내에서 회고하는 시간을 갖습니다. (문제가 왜 발생했고, 어떻게 대응했으며 앞으로 이 이슈가 발생하지 않으려면 어떻게 조치하는 것이 좋을지에 대해서 솔직하게 얘기합니다.)<br/>8. 이후에 센트리(sentry)를 도입하여, 고객이 문의하기 전에 개발팀에서 먼저 감지하고 빠르게 대응할 수 있도록 조치하였습니다.`},
                {question : '어떤 회사를 원하나요?', answer: `제가 원하는 회사는 회사와 개인이 같이 성장할 수 있는 곳입니다.<br/>세상을 더 이롭게 하는 서비스인지, 그 회사는 무엇을 중요하게 여기는지 중요합니다.<br/>그리고 회사에서 일이 아닌 사람 때문에 에너지를 소모하고 싶지 않습니다. 건강한 문화를 가진 회사는 조직 간에 싸울 일이 없었습니다. 제 경험상 그렇습니다. 그저 본인의 일만 잘하면 될 뿐입니다. 대신에 성과에 대한 평가는 엄격할 수밖에 없습니다. 물론, 어떤 실수를 한다고 해서 바로 내치진 않을 것입니다. 분명하게 문제를 드러내고 어떻게 해결할지 같이 의견을 나눠서 해결하면 됩니다.<br/>애사심을 생기게 만드는 회사와 같이하고 싶습니다.`},
                {question : '일에 대한 가치는 어떤가요?', answer: `일은 삶에서 많은 시간을 차지하기에 중요하고, 사회에서 가치를 실현할 수 있는 좋은 도구라고 생각합니다.<br/>일에 몰입하는 것을 좋아하고, 일과 함께 저도 같이 잘 성장해나가고 싶습니다.<br/>그래서 제가 좀 더 잘 할 수 있는, 재미있는, 좋은 서비스를 가진, 발전 가능성이 있는 일을 하고 싶습니다.`},
                {question : '원하는 회사 위치는 어디인가요?', answer: `1. 판교 2. 서울(강남)`},
                {question : '최종학력은 어떻게 되나요?', answer: `청주대학교 환경조경학과(4년제)를 졸업했습니다.`},
                {question : '조경설계에서 IT업종(웹 개발)으로 넘어오게 된 계기가 무엇인가요?', answer: `조경설계도 보람되고 가치 있는 직업이었습니다. 한 회사에서 사원에서 과장까지 달았습니다. 하지만 계속 이 일을 할 수 있겠냐는 스스로 질문을 던졌을 때 자신이 없었습니다. 이 일을 오래 하고 나중에는 '내'가 설계를 잘 이끌어갈 수 있을까, 지금도 잦은 야근에 몸이 너무 힘든데 앞으로도 버틸 수 있을까에 대한 의문이 들었습니다.제 위의 상사를 보더라도 크게 다르지 않았습니다. 아니 더욱 힘들어 보였습니다.<br/><br/>그래서 좀 더 저에게 맞는 직업을 다시 찾고자 하였고, 디자인을 계속 다뤄왔으니 디자인과 관련된 일을 찾고 싶었습니다.<br/>웹 사이트는 친숙하고 매일 접합니다. 그래서 평소에도 웹사이트 디자인에 관심이 있었습니다. 웹사이트를 만드는 것이 재미있어 보여서 시작하게 되었습니다.`},
                {question : '퍼블리셔에서 프론트엔드 개발자가 된 계기는 무엇인가요?', answer: `웹 퍼블리셔로 웹을 다루기 시작하다가 디자인 작업보다 프론트단 개발하는 것에 욕심이 생겼습니다. 웹 디자인, HTML 마크업, CSS까지는 완전히 저의 담당이었고, JS 동적인 부분은 데이터 연결 전까지 할 수 있는 작업을 모두 해서 넘기는 식이었습니다. 그러다가 자바스크립트 영역을 더 많이, 잘 다루고 싶어졌고, 개발 관련하여 여러 스터디를 다니다가 좋은 인연을 만나서 스타트업 개발팀에서 프론트엔드 개발자로 일을 하게 되었습니다`},
                {question : '희망연봉이 있나요?', answer: `희망연봉은 3600만원 입니다.<br/>연봉협상 가능합니다.`},
                {question : '좋아하는 것, 취미활동은?', answer: `자연과 운동을 좋아합니다.<br/>좋아하는 것을 나열하면 초록, 자연, 공원, 클라이밍 등이 있습니다.<br/>운동은 예전에 수영과 자전거 타기를 했었는데 3년 전부터는 계속 클라이밍만 했습니다.<br/>클라이밍도 나이가 들어서도 꾸준히 할 수 있는 운동이라서 매력적인 운동이라 생각되어 접하게 되었습니다.<br/><a className="point-link" href="https://www.instagram.com/soheegreen" target="_blank" rel="noopener noreferrer">instagram</a>`},
            ]
        }
    }



    render() {
        console.log(`==> App render`);
        return (
            <div>
                <h1 className="hide-text">김소희의 이력서입니다.</h1> 

                <main>
                    <div className="fixed-box">
                        <div className="fixed-box__scroll-box">
                            <TopInfo data={this.state.infoLink}></TopInfo>
                            <article className="content-box content-box--skills">
                                <h2 className="content-box__head"><span>Technology Stack</span></h2>
                                <ul className="content-box__skill-list">
                                    <li>
                                        <span>HTML5</span>
                                        <div className="is-graph is-graph-5"></div>
                                    </li>
                                    <li>
                                        <span>CSS3</span>
                                        <div className="is-graph is-graph-5"></div>
                                    
                                    </li>
                                    <li>
                                        <span>JavaScript</span>
                                        <div className="is-graph is-graph-4"></div>
                                    
                                    </li>
                                    <li>
                                        <span>React.js</span>
                                        <div className="is-graph is-graph-2"></div>
                                    
                                    </li>
                                    <li>
                                        <span>Webpack</span>
                                        <div className="is-graph is-graph-3"></div>
                                    
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                    <section className="contents-wrap">
                        <article id="profileEl" className="content-box content-box--profile is-5-lines-only">
                            <h2 className="content-box__head"><span>Profile</span></h2>
                            <div className="content-box__profile-txt">
                                웹 프론트엔드 개발자 김소희입니다.
                                <br/>개발자로 일을 시작하기 전부터 웹사이트 디자인에 관심이 많았습니다. 기획과 디자인 의도대로 구현하는 것이 재미있고, 보람됩니다. 그리고 기획단에서 생각하지 못한 디테일을 체크하고, 같이 의견을 맞대어 더 나은 결과물로 발전될 때 더욱 보람을 느낍니다.
                                <br/><br/>저는 스타트업에서 웹 프론트 개발 및 유지보수를 하였습니다. 바닐라 자바스크립트를 썼고, 웹팩으로 최적화하였습니다.
                                이전 회사에서 JS 라이브러리나 프레임워크를 다루지 않았던 것은 ‘나중에 필요하면 도입’하는 것으로 개발팀 내에서 협의가 이뤄진 사항이었습니다. 그 이유는 제가 자바스크립트를 더 잘 다뤘으면 하는 바람이었을 것입니다.
                                <br/><br/>스타트업에 들어오면서 기존에 다뤘던 제이쿼리는 모두 자바스크립트로 교체하였습니다. 그리고 처음에는 무조건 동작이 되게끔 하는 것이 목표였지만, 나중에는 실행되는 것을 넘어서 최적화하는 작업에 집중할 수 있게 되었습니다. 그렇게 개발 단계를 거치면서 잘 짜인 코드의 중요성과 필요성을 몸소 깨닫게 되었습니다.
                                <br/><br/>그래서 저는 개발을 ‘잘’ 하는 개발자가 되고 싶습니다.
                                <br/>지금은 구직활동을 하면서 <a id="sideProjectLinkText" href="#sideProjectHead" className="point-link">사이드 프로젝트</a>를 진행해보았고, 리엑트의 필요성을 알기 위해서 리엑트 공부를 하고 있습니다.
                            </div>
                            <button type="button" id="profileMoreBtn" className="content-box__profile-more-btn">more</button>
                        </article>

                        <article className="content-box content-box--experience">
                            <h2 className="content-box__head"><span>Work Experience</span></h2>
                            <ul className="experience-list">
                                <li>
                                    <div className="experience-list__name"><span>개발팀 - 프론트엔드 개발자</span><a className="point-link" href="https://trost.co.kr/" target="_blank" rel="noopener noreferrer">(주)휴마트컴퍼니</a></div>
                                    <ul>
                                        <li className="experience-list__date">2018.6.5 ~ 2019.12</li>
                                        <li className="experience-list__item-box experience-box">
                                            <ul className="experience-box__item-list">
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>JavaScript</li>
                                                <li>Webpack</li>
                                                <li>Zeplin</li>
                                                <li>GitLab</li>
                                                <li>Trello</li>
                                                <li>SourceTree</li>
                                                <li>Postman</li>
                                                <li>InteliJ</li>
                                                <li>Visual Studio Code</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__txt experience-box">
                                            <span className="experience-box__head">PC 웹페이지 서비스 개발</span>
                                            <ul>
                                                <li>- 입사 당시 모바일 서비스만 있고, PC 웹사이트를 개발해야 하는 단계에 있었음</li>
                                                <li>- 기획에 따라 웹페이지 개선 및 구축. (html 마크업 및 퍼블리싱, RESTful API 연결 등 기능 구현)</li>
                                                <li>- 깃랩으로 이슈 관리 (기획, 마케팅 등과 협의 시에는 트렐로로 관리)</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__txt experience-box">
                                            <span className="experience-box__head">앱 내의 웹페이지 서비스 개발</span>
                                            <ul>
                                                <li>- 개발팀 협의로 앱 내에 웹페이지 개발로 필요한 부분은 웹 포지션으로 개발 (개발 변경이 잦은 서비스 페이지 등)</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__inner-box">데이터를 다루는 것을 알게 되었습니다. (서버 개발자와 API 요청과 응답에 대한 규칙 정하기, 언제 어떤 데이터를 불러와야 하는지 등) 웹앱에서 앱과의 통신하는 협업 과정도 기억에 크게 남습니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="experience-list__name"><span>개발팀 - 웹퍼블리셔</span><a className="point-link" href="https://roomnspace.co.kr/" target="_blank" rel="noopener noreferrer">(주)룸앤스페이스</a></div>
                                    <ul>
                                        <li className="experience-list__date">2016.9 ~ 2018.5</li>
                                        <li className="experience-list__item-box experience-box">
                                            <ul className="experience-box__item-list">
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>jQuery</li>
                                                <li>Javascript</li>
                                                <li>Adobe photoshop</li>
                                                <li>Adobe Illustrator</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__txt experience-box">
                                            <span className="experience-box__head">웹사이트와 모바일웹 구축을 위한 디자인 및 퍼블리싱 작업</span>
                                            <ul>
                                                <li>- 입사 당시 서버 구축만 되어있는 상태에서 처음부터 같이 개발을 시작하였음</li>
                                                <li>- 웹 작업 비율(%) = 웹 디자인 작업 70% + 퍼블리싱 30%</li>
                                                <li>- 웹 디자인과 퍼블리싱 작업을 병행하여, 비교적 디자인 작업을 많이 함</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__inner-box">웹디자인(UI, UX)에 대한 감각을 키웠습니다. 서버 개발자와 협업하면서 작업관리 시스템의 필요성을 느꼈습니다. (겨우 두명이지만 같이 코드를 공유하면서 업데이트 되어야 할 코드가 지워지는 등 코드 관리 문제가 있었습니다.) 웹 퍼블리셔로 일하면서 개발에 대한 갈증이 더욱 생겼습니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="experience-list__name"><span>설계팀 - 디자이너</span><a className="point-link" href="http://www.ehwawon.kr/2016_ehwawon.pdf" target="_blank" rel="noopener noreferrer">조경설계 이화원</a></div>
                                    <ul>
                                        <li className="experience-list__date">2011.3 ~ 2015.10</li>
                                        <li className="experience-list__item-box experience-box">
                                            <ul className="experience-box__item-list">
                                                <li>AutoCAD</li>
                                                <li>SketchUp</li>
                                                <li>Adobe photoshop</li>
                                                <li>Adobe Illustrator</li>
                                            </ul>
                                        </li>
                                        <li className="experience-list__txt experience-box">계획설계/기본설계/실시설계</li>
                                        <li className="experience-list__inner-box">세상을 보는 시야가 넓어졌습니다. 길을 걷다가도 바닥 포장재와 패턴, 배수 형태, 어떤 조경수를 심었는지, 옥외 계단 구조물 등 설계가 눈에 보이고, 잘 꾸며진 공간일수록 그 디테일이 더 눈에 들어옵니다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </article>

                        

                        <article className="content-box content-box--side-project">
                            <h2 id="sideProjectHead" className="content-box__head"><span>Side Project</span></h2>
                            <ul className="side-project-list">
                                <li>
                                    <h3 className="side-project-list__head">개인 사이드 프로젝트</h3>
                                    <ul>
                                        <li className="side-project-list__date">2020.03</li>
                                        <li className="side-project-list__txt">오픈 API를 이용한 배경이미지 검색 구현</li>
                                        <li className="side-project-list__link-box">
                                            <span className="hide-text">관련 링크</span>
                                            <ul className="link-list">
                                                <li><a href="https://github.com/onlyliving/Side-Projects" target="_blank" rel="noopener noreferrer">사이드프로젝트 오픈소스(github)</a></li>
                                            </ul>
                                        </li>
                                        <li>오픈 API를 이용한 단기 프로젝트로 의미 있는 서비스가 무엇이 있을까 고민하였습니다. 그러다가 제가 웹디자이너로 일할 때 배경 이미지를 고르는 대에 시간을 많이 소비했던 기억이 떠올랐습니다.
                                            웹 디자이너와 마케팅 업무에 도움이 될 것으로 예상합니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 className="side-project-list__head">프론트엔드 개발 노트</h3>
                                    <ul>
                                        <li className="side-project-list__date">2019.01 ~</li>
                                        <li>
                                            <span className="hide-text">관련 링크</span>
                                            <ul className="link-list">
                                                <li><a href="https://www.notion.so/14ef995b935e471abc9b3ab5be30196e" target="_blank" rel="noopener noreferrer">개발 노트(notion)</a></li>
                                            </ul>
                                        </li>
                                        <li>그동안 개발 작업을 하면서 필요한 내용을 정리해 둔 개발 노트입니다. 경험한 것을 기록하고, 알아야 하는 모든 것을 기록하려고 합니다. </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 className="side-project-list__head">스터디 프로젝트<br/>(도서관리 시스템 만들기)</h3>
                                    <ul>
                                        <li className="side-project-list__date">2018.06</li>
                                        <li>
                                            <span className="hide-text">관련 링크</span>
                                            <ul className="link-list">
                                                <li><a href="https://zpl.io/scene/a3oRmkY" target="_blank" rel="noopener noreferrer">도서관리 시스템 웹 디자인(zeplin)</a></li>
                                            </ul>
                                        </li>
                                        <li>스터디 프로젝트 (도서 관리 시스템 만들기) : 개발 스터디에서 같이 프로젝트를 시작해서 어떠한 성과를 만들어보고 싶었습니다. 어떤 니즈가 있을까 얘기하다가 도서 관리 시스템을 만들어보자는 의견이 나와서 시작하게 되었습니다. 제가 디자인을 할 줄 알아서 제가 디자인을 담당했고 모두의 의견을 받아서 디자인 진행을 하였습니다. 프론트 개발은 다른 개발자분과 같이 하기로 했습니다. 비록 개발 진행 중에 멈춰버렸지만, 의미 있는 작업이었습니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 className="side-project-list__head">가상선택자를 이용하여 간단한 UI 오픈소스 제공</h3>
                                    <ul>
                                        <li className="side-project-list__date">2018.01</li>
                                        <li>
                                            <span className="hide-text">관련 링크</span>
                                            <ul className="link-list">
                                                <li><a href="https://codepen.io/greensohee/pen/qpVVOb" target="_blank" rel="noopener noreferrer">CSS 가상요소로 버튼 만들기(codepen)</a></li>
                                                <li><a href="https://codepen.io/greensohee/pen/aEYvXo" target="_blank" rel="noopener noreferrer">CSS 가상요소로 글머리 모양 만들기(codepen)</a></li>
                                            </ul>
                                        </li>
                                        <li>개발 스터디 다니면서 여러 직군의 개발자와 소통하며 코드 리뷰를 했었습니다. 제가 코드 리뷰하는 중에 간단한 도형이나 화살표를 이미지를 쓰지 않고 가상선택자로 구현하는 것을 보고 관심 있어 하는 분들이 계셔서, 자주 쓰는 UI 관련 코드를 오픈소스로 제공하였습니다. </li>
                                    </ul>
                                </li>
                            </ul>
                        </article>

                        <article className="content-box content-box-qna">
                            <h2 className="content-box__head"><span>Q&A</span></h2>
                            <dl className="table-box">
                                <dt className="table-box__q" value="q-1">업무상 강점은 무엇인가요?</dt>
                                <dd className="table-box__a" value="a-1">
                                    웹디자인 경험이 있어서 기획, 디자인팀과 업무 커뮤니케이션이 원만합니다. 필요하면 간단한 디자인은 제가 하기도 합니다.
                                    <br/>일에 대한 책임감과 욕심이 있습니다.
                                    <br/>일은 제 삶의 중요한 원동력이기 때문에 더 잘하려고 노력하고, 같이 일하는 사람들과 같이 성장하고 싶습니다.
                                </dd>
                                <dt className="table-box__q" value="q-3">웹 개발에서 버그 이슈가 생겼을 경우 어떻게 대처하나요?</dt>
                                <dd className="table-box__a" value="a-3">
                                    개발팀에서 일하면서 같이 공유하고 진행했던 대처 방안 흐름입니다.<br/>
                                    <br/>1. 버그를 감지했을 때, 무조건 개발팀에 버그에 대한 문제 현상을 공유합니다.
                                    <br/>2. 사용자가 불편함을 느낄 수 있는 크리티컬한 문제일 경우, CS팀에도 내용을 공지해서 빠른 대응을 할 수 있도록 합니다.
                                    <br/>3. 크리티컬한 이슈면 일단 서비스가 정상적으로 진행될 수 있도록 조처를 합니다.
                                    <br/>4. 버그의 근본적인 원인을 찾아서, 바로 문제를 해결할 수 있는지 오래 걸리는지 체크합니다.
                                    <br/>5. 바로 수정이 가능한 부분은 최대한 빠르게 검토하여 테스트한 후에 배포하고 내용을 알립니다.
                                    <br/>6. 오래 걸리는 이슈는 CS팀에도 양해를 구하고 개발팀 내부에서 합심하여 문제를 해결하여 대처합니다.
                                    <br/>7. 버그 이슈가 해결되면 깃랩 이슈 보드에 기록하고, 개발팀 내에서 회고하는 시간을 갖습니다. (문제가 왜 발생했고, 어떻게 대응했으며 앞으로 이 이슈가 발생하지 않으려면 어떻게 조치하는 것이 좋을지에 대해서 솔직하게 얘기합니다.)
                                    <br/>8. 이후에 센트리(sentry)를 도입하여, 고객이 문의하기 전에 개발팀에서 먼저 감지하고 빠르게 대응할 수 있도록 조치하였습니다.
                                </dd>
                                {/* <dt className="table-box__q" value="q-4">어떤 회사를 원하나요?</dt>
                                <dd className="table-box__a" value="a-4">
                                    제가 원하는 회사는 회사와 개인이 같이 성장할 수 있는 곳입니다.
                                    <br/>세상을 더 이롭게 하는 서비스인지, 그 회사는 무엇을 중요하게 여기는지 중요합니다.
                                    <br/>그리고 회사에서 일이 아닌 사람 때문에 에너지를 소모하고 싶지 않습니다. 건강한 문화를 가진 회사는 조직 간에 싸울 일이 없었습니다. 제 경험상 그렇습니다. 그저 본인의 일만 잘하면 될 뿐입니다. 대신에 성과에 대한 평가는 엄격할 수밖에 없습니다. 물론, 어떤 실수를 한다고 해서 바로 내치진 않을 것입니다. 분명하게 문제를 드러내고 어떻게 해결할지 같이 의견을 나눠서 해결하면 됩니다.
                                    <br/>애사심을 생기게 만드는 회사와 같이하고 싶습니다.
                                    
                                </dd> */}
                                <dt className="table-box__q" value="q-5">일에 대한 가치는 어떤가요?</dt>
                                <dd className="table-box__a" value="a-5">
                                    
                                    일은 삶에서 많은 시간을 차지하기에 중요하고, 사회에서 가치를 실현할 수 있는 좋은 도구라고 생각합니다.
                                    <br/>일에 몰입하는 것을 좋아하고, 일과 함께 저도 같이 잘 성장해나가고 싶습니다.
                                    <br/>그래서 제가 좀 더 잘 할 수 있는, 재미있는, 좋은 서비스를 가진, 발전 가능성이 있는 일을 하고 싶습니다.
                                </dd>
                                <dt className="table-box__q" value="q-6">원하는 회사 위치는 어디인가요?</dt>
                                <dd className="table-box__a" value="a-6">1. 판교 2. 서울(강남)</dd>
                                <dt className="table-box__q" value="q-7">최종학력은 어떻게 되나요?</dt>
                                <dd className="table-box__a" value="a-7">청주대학교 환경조경학과(4년제)를 졸업했습니다.</dd>
                                
                                <dt className="table-box__q" value="q-9">조경설계에서 IT업종(웹 개발)으로 넘어오게 된 계기가 무엇인가요?</dt>
                                <dd className="table-box__a" value="a-9">
                                    조경설계도 보람되고 가치 있는 직업이었습니다. 한 회사에서 사원에서 과장까지 달았습니다. 하지만 계속 이 일을 할 수 있겠냐는 스스로 질문을 던졌을 때 자신이 없었습니다. 
                                    이 일을 오래 하고 나중에는 '내'가 설계를 잘 이끌어갈 수 있을까, 지금도 잦은 야근에 몸이 너무 힘든데 앞으로도 버틸 수 있을까에 대한 의문이 들었습니다.
                                    제 위의 상사를 보더라도 크게 다르지 않았습니다. 아니 더욱 힘들어 보였습니다.
                                    <br/><br/>그래서 좀 더 저에게 맞는 직업을 다시 찾고자 하였고, 디자인을 계속 다뤄왔으니 디자인과 관련된 일을 찾고 싶었습니다.
                                    <br/>웹 사이트는 친숙하고 매일 접합니다. 그래서 평소에도 웹사이트 디자인에 관심이 있었습니다. 웹사이트를 만드는 것이 재미있어 보여서 시작하게 되었습니다.
                                </dd>
                                <dt className="table-box__q" value="q-10">퍼블리셔에서 프론트엔드 개발자가 된 계기는 무엇인가요?</dt>
                                <dd className="table-box__a" value="a-10">
                                    웹 퍼블리셔로 웹을 다루기 시작하다가 디자인 작업보다 프론트단 개발하는 것에 욕심이 생겼습니다. 웹 디자인, HTML 마크업, CSS까지는 완전히 저의 담당이었고, JS 동적인 부분은 데이터 연결 전까지 할 수 있는 작업을 모두 해서 넘기는 식이었습니다. 그러다가 자바스크립트 영역을 더 많이, 잘 다루고 싶어졌고, 개발 관련하여 여러 스터디를 다니다가 좋은 인연을 만나서 스타트업 개발팀에서 프론트엔드 개발자로 일을 하게 되었습니다
                                </dd>
                                {/* <dt className="table-box__q" value="q-2">희망연봉이 있나요?</dt>
                                <dd className="table-box__a" value="a-2">
                                    희망연봉은 3600만원 입니다.<br/>
                                    연봉협상 가능합니다.
                                </dd> */}
                                <dt className="table-box__q" value="q-8">좋아하는 것, 취미활동은?</dt>
                                <dd className="table-box__a" value="a-8">
                                    자연과 운동을 좋아합니다.
                                    <br/>좋아하는 것을 나열하면 초록, 자연, 공원, 클라이밍 등이 있습니다.
                                    <br/>운동은 예전에 수영과 자전거 타기를 했었는데 3년 전부터는 계속 클라이밍만 했습니다.
                                    <br/>클라이밍도 나이가 들어서도 꾸준히 할 수 있는 운동이라서 매력적인 운동이라 생각되어 접하게 되었습니다.
                                    <br/><a className="point-link" href="https://www.instagram.com/soheegreen" target="_blank" rel="noopener noreferrer">instagram</a>
                                </dd>
                            </dl>
                        </article>
                        <p className="copyright">ⓒ sofie FE Resume</p>

                    </section>

                    
                    
                </main>
            </div>
        )

    }

}

export default App;



document.addEventListener('DOMContentLoaded', () => {
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
});

