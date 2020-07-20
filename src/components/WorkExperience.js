import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
        console.log(`%c ==> WorkExperience render`, 'color:magenta');

        if (!this.props.data) {
            return new Error('WorkExperience 데이터가 없음!');
        }

        /**
         * 
         * @param {*} datePeriodStr 
         * input ex) 2018.6 ~ 2019.12
         */
        const datePeriod = (datePeriodStr) => {
            try {
                let dateArr = datePeriodStr.split(' ~ ');
                let startDate = new Date(dateArr[0]);
                let lastDate = new Date(dateArr[1]);
                let getYear = lastDate.getFullYear() - startDate.getFullYear();
                let getMonth = lastDate.getMonth() - startDate.getMonth();

                if (Math.sign(getMonth) === -1) {
                    // 음수인 경우,
                    getMonth = 12 + getMonth;
                    getYear --;
                }

                return `${getYear}년 ${getMonth}개월`;

            } catch {
                new Error('날짜 계산에서 오류를 감지함.');
            }
        };

        const works = this.props.data;

        const skillItems = (skills) => {
            return skills.map((skill) => {
                return <li key={skill}>{skill}</li>
            });
        };


        const workDetailItems = (workDetails) => {
            let num = 0;

            return workDetails.map((workDetail) => {
                num ++;

                let listAddClassName = workDetail.head ? 'list-sub' : '';
                let contentsNum = 0;
                let contentItems = workDetail.content.map((content) => {
                    contentsNum ++;
                    return <li key={contentsNum} className={listAddClassName}>{content}</li>
                });

                return  <li key={num} className="experience-list__txt experience-box">
                            <span className="experience-box__head">{workDetail.head}</span>
                            <ul>{contentItems}</ul>
                        </li>
            });
        }

        let workNum = 0;
        const workItem = works.map((work) => {
            workNum ++;

            return  <li key={workNum}>
                        <div className="experience-list__name"><span>{work.position}</span><a className="point-link" href={work.link} target="_blank" rel="noopener noreferrer">{work.company}</a></div>
                        <ul>
                            <li className="experience-list__date">{work.period}, {datePeriod(work.period)}</li>
                            <li className="experience-list__item-box experience-box">
                                <ul className="experience-box__item-list">
                                    {skillItems(work.skill)}
                                </ul>
                            </li>
                            {workDetailItems(work.workDetail)}
                            
                            <li className="experience-list__inner-box">{work.effect}</li>
                        </ul>
                    </li>
        })

        return (
            <article className="content-box content-box--experience">
                <h2 className="content-box__head"><span>Work Experience</span></h2>
                <ul className="experience-list">
                    {workItem}
                </ul>
            </article>
        )
    }

}

export default WorkExperience;