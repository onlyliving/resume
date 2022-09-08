import React, { Component } from "react";
import TopInfo from "./components/TopInfo";
import Experiences from "./components/Experiences";
import OtherExperiences from "./components/OtherExperiences";
import TechnologyStack from "./components/TechnologyStack";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";
import Qna from "./components/Qna";

const path = require("path");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoLink: [
                {
                    type: "email",
                    link: "mailto:greensohee88@naver.com",
                    desc: "greensohee88@naver.com",
                    display: "on",
                },
                {
                    type: "github",
                    link: "https://github.com/onlyliving/Side-Projects",
                    desc: "Side Project",
                    display: "off",
                },
                {
                    type: "github",
                    link: "https://github.com/onlyliving",
                    desc: "https://github.com/onlyliving",
                    display: "on",
                },
                {
                    type: "insta",
                    link: "https://www.instagram.com/soheegreen",
                    desc: "인스타그램",
                    display: "off",
                },
                {
                    type: "tistory",
                    link: "http://green-webdesigner.tistory.com/",
                    desc: "티스토리",
                    display: "off",
                },
            ],
            profile: [
                {
                    title: "어쩌다 개발자?!!!",
                    content:
                        "(strong)let 김소희 = 조경설계 + 웹디자이너 + 웹퍼블리싱 + 웹 프론트엔드 개발 + 웹 개발 확장 중;(@)저는 자신 있는 아이템을 교집합 삼아 여기까지 왔습니다.(@)조경설계에서 웹퍼블리셔로 직군을 변경할 때는 '디자인'이 자신 있어서 할 수 있었고, 웹퍼블리셔에서 웹 프론트엔드 개발로 전환할 때는 '웹 퍼블리싱'을 기반으로 발전할 수 있게 되었습니다.",
                },
                {
                    title: "웹 프론트엔드 개발자로서의 만족도는?",
                    content:
                        "기획과 디자인 의도대로 구현하는 것이 재미있습니다. 그리고 기획단에서 생각하지 못한 디테일을 체크해서, 같이 의견을 맞대어 더 나은 결과물로 발전될 때 더욱 보람을 느낍니다. 노력하는 만큼, 코드와 성과물로 드러나기 때문에 더욱 잘 해내고 싶습니다. (note : 아래에 경험에 대한 건 좀 더 구체적으로 쓰기)",
                },
            ],
            work: [
                {
                    company: "(주)서르, (주)사맛디",
                    position: "개발팀 - 프론트엔드 개발자",
                    period: {
                        start: "2021-01",
                        finish: "2022-07",
                    },
                    link: "",
                    skill: ["HTML5", "SCSS", "JavaScript", "TypeScript", "React", "Webpack", "Gitlab", "Visual Studio Code"],
                    workDetail: [
                        {
                            head: "인테리어 플랫폼 웹페이지 개발",
                            content: ["회원가입, 로그인, 게시물 작성, 상세페이지, 서비스 목록, 검색 등 40여 페이지를 개발하였습니다. React, TypeScript를 적용하였습니다."],
                        },
                        {
                            head: "사맛디 에디터 데모 웹 프론트 개발",
                            content: ["이미지만 업로드하면 쇼핑몰 상세페이지를 자동으로 업로드하는 기능에 필요한 데모페이지를 만들었습니다. 이미지와 캔버스(canvas)를 많이 다뤘습니다."],
                        },
                        {
                            head: "사맛디 패션 AI 데모 웹 프론트 개발",
                            content: [
                                "사맛디 패션 AI 데모 페이지를 만들었습니다. 싱글페이지이며, 이미지를 업로드하면 캔버스에 데이터를 잘 표현하는 것이 주요 업무 였습니다. 이 때, 팀원의 도움으로 Docker와 Gitlab CI/CD(배포 자동화)를 공부해보는 시간을 가졌습니다.",
                            ],
                        },
                        {
                            head: "데이터 검수 데모 웹 프론트 개발",
                            content: ["이미지를 업로드해서 필요한 정보를 입력하고 검수 관리할 수 있는 페이지를 만들었습니다."],
                        },
                    ],
                    effect: "쇼핑몰 상세페이지 에디터 툴 개발을 위해 입사하였습니다. 오픈소스를 이용하였고, 이 경험이 캔버스를 다루는 데 많은 도움이 되었습니다. Docker와 Gitlab CI/CD에 대하여 공부할 수 있는 시간을 가졌습니다. 웹 서버 구축에 대한 개념을 알아갈 수 있었습니다. [인테리어 플랫폼 웹페이지 개발] 프로젝트에서 TypeScript를 처음 도입하면서 개발하는데 많은 도움을 받았습니다. 코드관리가 훨씬 수월해져서 TypeScript에 대한 필요성에 대해 알게 되었습니다.",
                },
                {
                    company: "(주)인라이플",
                    position: "AI 상용 연구팀 - 프론트엔드 개발자",
                    period: {
                        start: "2020-08",
                        finish: "2020-12",
                    },
                    link: "",
                    skill: ["Python", "HTML5", "CSS3", "JavaScript", "GitHub", "Pycharm", "Visual Studio Code"],
                    workDetail: [
                        {
                            content: ["AI 모델 데모페이지 웹 프론트 개발 (데이터 시각화)"],
                        },
                    ],
                    effect: "연구 개발한 결과물에 대하여 의도한 방향대로 시연하기 위한 프론트단 작업을 주로 하였습니다. 연구 팀원들과 데이터를 구축하고, 연구에 대한 실험하는 과정을 함께 하면서 모든 것이 새롭고 좋은 경험이었습니다. 가상환경에 대한 필요성을 알게되었고, 플라스크(flask)를 통해서 백엔드 단을 다루었습니다.",
                },
                {
                    company: "(주)휴마트컴퍼니",
                    position: "개발팀 - 프론트엔드 개발자",
                    period: {
                        start: "2018-06",
                        finish: "2019-12",
                    },
                    link: "https://trost.co.kr/",
                    skill: ["HTML5", "CSS3", "JavaScript", "Webpack", "Zeplin", "GitLab", "Trello", "SourceTree", "Postman", "InteliJ", "Visual Studio Code"],
                    workDetail: [
                        {
                            head: "PC 웹페이지 프론트 개발",
                            content: [
                                "입사 후 개발 시작 단계 : PC 웹사이트에 서비스를 도입하는 초기 단계 (모바일앱 서비스만 존재)",
                                "기획에 따라 웹페이지 기능 개선 및 구축 (HTML 마크업 및 퍼블리싱, RESTful API 연결 등 기능 구현)",
                                "깃랩(GitLab)으로 이슈 관리 (기획, 마케팅 등과 협의 시에는 트렐로(Trello)로 관리)",
                            ],
                        },
                        {
                            head: "앱 내의 웹페이지 프론트 개발",
                            content: ["개발팀 협의로 앱 내에 웹페이지 개발이 필요한 부분은 웹 포지션으로 개발 (개발 변경이 잦은 서비스 페이지 등)"],
                        },
                    ],
                    effect: "데이터를 다루는 것을 알게 되었습니다. (서버 개발자와 API 요청과 응답에 대한 규칙 정하기, 언제 어떤 데이터를 불러와야 하는지 등) 웹앱에서 앱과의 통신하는 협업 과정도 기억에 크게 남습니다.",
                },
            ],
            otherWork: [
                {
                    company: "(주)룸앤스페이스",
                    position: "개발팀 - 웹퍼블리셔",
                    period: {
                        start: "2016-09",
                        finish: "2018-05",
                    },
                    link: "https://roomnspace.co.kr/",
                    skill: ["HTML5", "CSS3", "jQuery", "Javascript", "Adobe photoshop", "Adobe Illustrator"],
                    workDetail: [
                        {
                            head: "웹사이트와 모바일웹 구축을 위한 디자인 및 퍼블리싱 작업",
                            content: ["입사 후 개발 시작 단계 : 서버 세팅만 되어있는 상태에서 처음부터 개발을 시작하는 단계", "웹 작업 비율(%) = 웹 디자인 작업 70% + 퍼블리싱 30%"],
                        },
                    ],
                    effect: "웹디자인(UI, UX)에 대한 감각을 키웠습니다. 서버 개발자와 협업하면서 작업관리 시스템의 필요성을 느꼈습니다. (겨우 두 명이지만 같이 코드를 공유하면서 업데이트되어야 할 코드가 지워지는 등 코드 관리 문제가 있었습니다.) 웹 퍼블리셔로 일하면서 개발에 대한 갈증이 더욱 생겼습니다.",
                },
                {
                    company: "조경설계 이화원",
                    position: "설계팀 - 디자이너",
                    period: {
                        start: "2011-03",
                        finish: "2015-10",
                    },
                    link: "http://ehwawon.kr/",
                    skill: ["AutoCAD", "SketchUp", "Adobe photoshop", "Adobe Illustrator"],
                    workDetail: [{ content: ["계획설계/기본설계/실시설계"] }],
                    effect: "세상을 보는 시야가 넓어졌습니다. 길을 걷다가도 바닥 포장재와 패턴, 배수 형태, 어떤 조경수를 심었는지, 옥외 계단 구조물 등 설계가 머릿 속에 대략 그려집니다. 공간과 구조물, 시설물의 디테일을 보면 그 공간에 얼마나 노력이 들어갔는지 알 수 있습니다.",
                },
            ],
            TechnologyStack: ["HTML5", "CSS3/SCSS", "JavaScript", "React.js", "TypeScript", "Webpack", "Python"],
            SideProject: [
                {
                    head: "개인 사이드 프로젝트",
                    period: "2020.03",
                    shortText: "오픈 API를 이용한 배경이미지 검색 구현",
                    linkList: [
                        {
                            title: "사이드프로젝트 오픈소스(github)",
                            link: "https://github.com/onlyliving/Side-Projects",
                        },
                    ],
                    desc: "오픈 API를 이용한 단기 프로젝트로 의미 있는 서비스가 무엇이 있을까 고민하였습니다. 그러다가 제가 웹디자이너로 일할 때 배경 이미지를 고르는 대에 시간을 많이 소비했던 기억이 떠올랐습니다. 웹 디자이너와 마케팅 업무에 도움이 될 것으로 예상합니다.",
                },
                {
                    head: "프론트엔드 개발 노트",
                    period: "2019.01 ~",
                    linkList: [
                        {
                            title: "개발 노트(notion)",
                            link: "https://www.notion.so/1f9b426c024d4490a00ac4956732519c",
                        },
                    ],
                    desc: "그동안 개발 작업을 하면서 필요한 내용을 정리해 둔 개발 노트입니다. 경험한 것을 기록하고, 알아야 하는 모든 것을 기록하려고 합니다.",
                },
                {
                    head: "스터디 프로젝트\n(도서관리 시스템 만들기)",
                    period: "2018.06",
                    linkList: [
                        {
                            title: "도서관리 시스템 웹 디자인(zeplin)",
                            link: "https://zpl.io/scene/a3oRmkY",
                        },
                    ],
                    desc: "스터디 프로젝트 (도서 관리 시스템 만들기) : 개발 스터디에서 같이 프로젝트를 시작해서 어떠한 성과를 만들어보고 싶었습니다. 어떤 니즈가 있을까 얘기하다가 도서 관리 시스템을 만들어보자는 의견이 나와서 시작하게 되었습니다. 제가 디자인을 할 줄 알아서 제가 디자인을 담당했고 모두의 의견을 받아서 디자인 진행을 하였습니다. 프론트 개발은 다른 개발자분과 같이 하기로 했습니다. 비록 개발 진행 중에 멈춰버렸지만, 의미 있는 작업이었습니다.",
                },
                {
                    head: "코드펜(codepen)에 오픈소스 제공",
                    period: "2018.01 ~",
                    linkList: [
                        {
                            title: "(CSS 가상선택자) 버튼 모양 만들기",
                            link: "https://codepen.io/greensohee/pen/qpVVOb",
                        },
                        {
                            title: "(CSS 가상선택자) 글머리 모양 만들기",
                            link: "https://codepen.io/greensohee/pen/aEYvXo",
                        },
                        {
                            title: "이미지 레이지 로딩 구현",
                            link: "https://codepen.io/greensohee/pen/LYGBrPo",
                        },
                    ],
                    desc: "스터디 모임을 했을 때, 간단한 도형이나 화살표를 이미지를 쓰지 않고 가상선택자로 구현하는 것을 보고 관심 있어 하는 분들이 계셔서, 자주 쓰는 UI 관련 코드를 오픈소스로 제공하였습니다. 최근에는 이미지 레이지 로딩 관련하여 공부한 자료를 올렸습니다.",
                },
            ],
            qna: [
                {
                    question: "업무상 강점은 무엇인가요?",
                    answer: "UI/UX 디자인을 작업했던 경험이 있기 때문에, UI/UX에 대한 감각이 있습니다. 그래서 기획/디자인팀과 업무 커뮤니케이션이 원만합니다. 필요하면 간단한 디자인은 제가 할 수도 있습니다.<br/>웹페이지 퍼블리싱 작업의 구현 속도가 빠릅니다.<br/>일에 대한 책임감이 있습니다. 정해진 시간 내에 맡은 업무를 잘 수행하기 위해 노력하고, 갑작스런 버그나 이슈가 생기면 적극적으로 나섭니다.",
                },
                {
                    question: "웹 개발에서 버그 이슈가 생겼을 경우 어떻게 대처하나요?",
                    answer: `개발팀에서 일하면서 같이 공유하고 진행했던 대처 방안 흐름입니다.<br/><br/>1. 버그를 감지했을 때, 무조건 개발팀에 버그에 대한 문제 현상을 공유합니다.<br/>2. 사용자가 불편함을 느낄 수 있는 크리티컬한 문제일 경우, CS팀에도 내용을 공지해서 빠른 대응을 할 수 있도록 합니다.<br/>3. 크리티컬한 이슈면 일단 서비스가 정상적으로 진행될 수 있도록 조처를 합니다.<br/>4. 버그의 근본적인 원인을 찾아서, 바로 문제를 해결할 수 있는지 오래 걸리는지 체크합니다.<br/>5. 바로 수정이 가능한 부분은 최대한 빠르게 검토하여 테스트한 후에 배포하고 내용을 알립니다.<br/>6. 오래 걸리는 이슈는 CS팀에도 양해를 구하고 개발팀 내부에서 합심하여 문제를 해결하여 대처합니다.<br/>7. 버그 이슈가 해결되면 깃랩 이슈 보드에 기록하고, 개발팀 내에서 회고하는 시간을 갖습니다. (문제가 왜 발생했고, 어떻게 대응했으며 앞으로 이 이슈가 발생하지 않으려면 어떻게 조치하는 것이 좋을지에 대해서 솔직하게 얘기합니다.)<br/>8. 이후에 센트리(sentry)를 도입하여, 고객이 문의하기 전에 개발팀에서 먼저 감지하고 빠르게 대응할 수 있도록 조치하였습니다.`,
                },
                // {
                //     question : '어떤 회사를 원하나요?',
                //     answer: `제가 원하는 회사는 회사와 개인이 같이 성장할 수 있는 곳입니다.<br/>세상을 더 이롭게 하는 서비스인지, 그 회사는 무엇을 중요하게 여기는지 중요합니다.<br/>그리고 회사에서 일이 아닌 사람 때문에 에너지를 소모하고 싶지 않습니다. 건강한 문화를 가진 회사는 조직 간에 싸울 일이 없었습니다. 제 경험상 그렇습니다. 그저 본인의 일만 잘하면 될 뿐입니다. 대신에 성과에 대한 평가는 엄격할 수밖에 없습니다. 물론, 어떤 실수를 한다고 해서 바로 내치진 않을 것입니다. 분명하게 문제를 드러내고 어떻게 해결할지 같이 의견을 나눠서 해결하면 됩니다.<br/>애사심을 생기게 만드는 회사와 같이하고 싶습니다.`
                // },
                {
                    question: "일에 대한 가치는 어떤가요?",
                    answer: `일은 사회에서 '나'의 가치를 실현할 수 있는 좋은 도구라고 생각합니다.<br/>저는 일을 아주 오래오래 나이가 들어서도 계속하고 싶습니다. 사회의 구성원으로서 저의 몫을 해낼 때의 가치가 저에게 큰 활력을 불어 넣어줍니다. 그래서 제가 잘 할 수 있는, 재미있는, 좋은 서비스를 가진, 발전 가능성이 있는 일을 하고 싶습니다.<br/>생산적인 일을 할 때, 느끼는 보람과 성취감이 저를 더 단단하고 가치 있는 사람으로 여기게 합니다. 일을 통해서 제 자신이 성장하는 것을 추구합니다.`,
                },
                // {
                //     question : '원하는 회사 위치는 어디인가요?',
                //     answer: `1. 판교 2. 서울(강남)`
                // },
                {
                    question: "최종학력은 어떻게 되나요?",
                    answer: `전공 : 청주대학교 환경조경학과<br/>학위 : 공학사<br/>취득연도(졸업연도) : 2011.2.18`,
                },
                {
                    question: "조경설계에서 IT업종(웹 개발)으로 넘어오게 된 계기가 무엇인가요?",
                    answer: `조경설계도 보람되고 가치 있는 직업이었습니다. 한 회사에서 사원에서 과장까지 달았습니다. 하지만 계속 이 일을 할 수 있겠냐는 스스로 질문을 던졌을 때 자신이 없었습니다. 이 일을 오래 하고 나중에는 '내'가 설계를 잘 이끌어갈 수 있을까, 지금도 잦은 야근에 몸이 너무 힘든데 앞으로도 버틸 수 있을까에 대한 의문이 들었습니다.제 위의 상사를 보더라도 크게 다르지 않았습니다. 아니 더욱 힘들어 보였습니다.<br/><br/>그래서 좀 더 저에게 맞는 직업을 다시 찾고자 하였고, 디자인을 계속 다뤄왔으니 디자인과 관련된 일을 찾고 싶었습니다.<br/>웹 사이트는 친숙하고 매일 접합니다. 그래서 평소에도 눈길을 끄는 웹사이트를 발견하면 '즐겨찾기'에 추가하곤 했습니다. 웹사이트를 만드는 것이 재미있어 보여서 시작하게 되었습니다.`,
                },
                {
                    question: "퍼블리셔에서 프론트엔드 개발자가 된 계기는 무엇인가요?",
                    answer: `웹 퍼블리셔로 웹을 다루기 시작하다가 디자인 작업보다 프론트단 개발하는 것에 더 관심이 생겼습니다. 그 당시에 웹 디자인, HTML 마크업, CSS까지는 완전히 저의 담당이었고, JS 동적인 부분은 데이터 연결 전까지 할 수 있는 작업을 모두 해서 넘기는 식이었습니다. 그러다가 자바스크립트 영역을 더 많이, 잘 다루고 싶어졌고, 개발 관련하여 여러 스터디(프론트 백엔드 스터디 등)를 다니다가 좋은 인연을 만나서 스타트업 개발팀에서 프론트엔드 개발자로 일을 하게 되었습니다`,
                },
                // {
                //     question : '희망연봉이 있나요?',
                //     answer: `희망연봉은 3600만원 입니다.<br/>연봉협상 가능합니다.`
                // },
                {
                    question: "일 외의 좋아하는 것과 취미활동은 무엇인가요?",
                    answer: `자연과 운동을 좋아합니다.<br/>좋아하는 것을 나열하면 초록, 자연, 공원, 클라이밍 등이 있습니다.<br/>운동은 예전에 수영과 자전거 타기를 했었는데, 3년 전부터는 계속 클라이밍만 했습니다.<br/>클라이밍은 나이가 들어서도 꾸준히 할 수 있는 운동이라서 매력적인 운동이라 생각되어 접하게 되었습니다.`,
                    link: [
                        {
                            href: "https://www.instagram.com/soheegreen",
                            title: "instagram",
                        },
                    ],
                },
            ],
        };
    }

    render() {
        console.log(`%c ==> App render`, "color:magenta");
        return (
            <div>
                <h1 className="hide-text">김소희의 이력서입니다.</h1>

                <main className="container">
                    <TopInfo data={this.state.infoLink}></TopInfo>
                    {/* <TechnologyStack data={this.state.TechnologyStack}></TechnologyStack> */}
                    <section className="contents-wrap">
                        {/* <Profile data={this.state.profile}></Profile> */}
                        <Experiences data={this.state.work} />
                        <OtherExperiences data={this.state.otherWork} />
                        <SideProject data={this.state.SideProject} />
                        <Qna data={this.state.qna} />
                        <p className="copyright">ⓒ sofie FE Resume</p>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
