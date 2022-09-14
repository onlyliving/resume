import React, { Component } from "react";

class TopInfo extends Component {
    render() {
        console.log(`%c ==> TopInfo render`, "color:magenta");

        let targetId = "";
        let targetLink = "";
        let targetInnerText = "";

        const infoLinks = this.props.data;
        const listItems = infoLinks.map((linkItem) => {
            if (linkItem.display === "on") {
                targetId = "info-list--" + linkItem.type;
                targetLink = linkItem.link;
                targetInnerText = linkItem.desc;

                const infoTitle = linkItem.type === "email" ? <span className="info-list-head">Contact: </span> : linkItem.type === "github" ? <span className="info-list-head">Github: </span> : <></>;

                return (
                    <li key={linkItem.type} className={targetId}>
                        {infoTitle}
                        <a href={targetLink} target="_blank" rel="noopener noreferrer">
                            {targetInnerText}
                        </a>
                    </li>
                );
            }
        });

        const title = "디자인을 좋아하는 개발자,김소희입니다.";
        const wordArr = title.split("");
        const titleElements = wordArr.map((item) => {
            if (item === ",") {
                return (
                    <>
                        <span className="title-strong">{item}</span>
                        <br />
                    </>
                );
            }
            return <span className="title-strong">{item}</span>;
        });

        return (
            <article className="content-box content-box--info">
                <h2 className="header-top-name">{titleElements}</h2>
                <p className="content-box__intro">
                    웹 프론트엔드 개발 4년차 입니다. 기획과 디자인 의도대로 구현하는 것이 재미있습니다. 기획단에서 생각하지 못한 디테일을 체크해서, 같이 의견을 맞대어 더 나은 아웃풋을 만들 때 더욱
                    보람을 느낍니다. 서로 존중하며 나아가는 팀과 함께 하고 싶습니다.
                </p>
                <ul className="info-list">{listItems}</ul>
                <div className="sub-contents">
                    <h3 className="sub-contents__head">Web Technologies</h3>
                    <p className="sub-contents__txt">HTML5, CSS3/SCSS, JavaScript, TypeScript, React.js, Webpack</p>
                </div>
            </article>
        );
    }
}

export default TopInfo;
