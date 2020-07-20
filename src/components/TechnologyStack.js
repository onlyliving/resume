import React, { Component } from 'react';

class TechnologyStack extends Component {
    render() {
        console.log(`%c ==> TechnologyStack render`, 'color:magenta');

        let skillArr = [];
        let skillName = '';
        let skillScore = '';
        let skillClassName = '';

        const mainSkills = this.props.data;
        const listItems = mainSkills.map((skill) => {
            skillArr = skill.split(' ');
            skillName = skillArr[0];
            skillScore = skillArr[1].replace('(', '').replace(')', '');
            skillClassName = `is-graph is-graph-${skillScore}`;

            return <li key={skillName}><span>{skillName}</span><div className={skillClassName}></div></li>
        });

        return (
            <article className="content-box content-box--skills">
                <h2 className="content-box__head"><span>Technology Stack</span></h2>
                <ul className="content-box__skill-list">
                    {listItems}
                </ul>
            </article>
        )
    }
}

export default TechnologyStack;