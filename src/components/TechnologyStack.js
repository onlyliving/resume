import React, { Component } from "react";

class TechnologyStack extends Component {
    render() {
        console.log(`%c ==> TechnologyStack render`, "color:magenta");

        const mainSkills = this.props.data;
        const innerText = mainSkills.join(", ");

        return (
            <article className="content-box content-box--skills">
                <h2 className="content-box__head">
                    <span>Web Technologies</span>
                </h2>
                <ul className="content-box__skill-list">
                    <li>{innerText}...</li>
                </ul>
            </article>
        );
    }
}

export default TechnologyStack;
