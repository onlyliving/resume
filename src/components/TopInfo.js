import React, { Component } from 'react';

class TopInfo extends Component {
    render() {
        console.log(`==> TopInfo render`);
        console.log(this.props.data);

        let infoLists = [];
        let targetId = '';
        let targetLink = '';
        let targetInnerText = '';

        if (this.props.data) {
            for (let i = 0; i < this.props.data.length; i += 1) {
                if (this.props.data[i].display === 'on') {
                    targetId = 'info-list__' + this.props.data[i].type;
                    targetLink = this.props.data[i].link;
                    targetInnerText = this.props.data[i].desc;

                    infoLists.push(
                        <li key={i} className={targetId}><a href={targetLink} target="_blank" rel="noopener noreferrer">{targetInnerText}</a></li>
                    )
                }
            }
        }

        return (
            <article className="content-box content-box--info">
                <h2 className="header-top-name">김소희<span className="header-top-name__sub">Web Front-end Developer</span></h2>
                <ul className="info-list">
                    {infoLists}
                </ul>
            </article>
        )
    }

}

export default TopInfo;