import React, {Component} from 'react';

class SideProject extends Component {
    render() {
        console.log(`%c ==> SideProject render`, 'color:magenta');

        if (!this.props.data) {
            return new Error('SideProject 데이터가 없음!');
        }

        const projects = this.props.data;

        const projectItems = projects.map((project) => {

            const links = project.linkList.map((link) => {
                return  <li key={link.title}>
                            <a href={link.link} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </a>
                        </li>

            });

            return  <li key={project.head}>
                        <h3 className="side-project-list__head">{project.head}</h3>
                        <ul>
                            <li className="side-project-list__date">{project.period}</li>
                            <li className="side-project-list__txt">{project.shortText}</li>
                            <li className="side-project-list__link-box">
                                <span className="hide-text">관련 링크</span>
                                <ul className="link-list">
                                    {links}
                                </ul>
                            </li>
                            <li>{project.desc}</li>
                        </ul>
                    </li>
        });

        return (
        
            <article className="content-box content-box--side-project">
                <h2 id="sideProjectHead" className="content-box__head"><span>Side Project</span></h2>
                <ul className="side-project-list">
                    {projectItems}
                </ul>
            </article>
        )
    }
}

export default SideProject;