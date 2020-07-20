import React, { Component } from 'react';

class TopInfo extends Component {
    render() {
        console.log(`%c ==> TopInfo render`, 'color:magenta');
        
        let targetId = '';
        let targetLink = '';
        let targetInnerText = '';

        const infoLinks = this.props.data;
        const listItems = infoLinks.map((linkItem) => {
            if (linkItem.display === 'on') {
                targetId = 'info-list__' + linkItem.type;
                targetLink = linkItem.link;
                targetInnerText = linkItem.desc;
                
                return <li key={linkItem.type} className={targetId}><a href={targetLink} target="_blank" rel="noopener noreferrer">{targetInnerText}</a></li>
            }
        });

        return (
            <article className="content-box content-box--info">
                <h2 className="header-top-name">김소희<span className="header-top-name__sub">Web Front-end Developer</span></h2>
                <ul className="info-list">
                    {listItems}
                </ul>
            </article>
        )
    }
}

export default TopInfo;