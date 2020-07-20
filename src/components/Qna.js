import React, {Component, Fragment} from 'react';

class Qna extends Component {
    render() {
        console.log(`%c ==> Qna render`, 'color:magenta');

        if (!this.props.data) {
            return new Error('Qna 데이터가 없음!');
        }

        const lists = this.props.data;
        let listNum = 0;
        let questionValue = '';
        let anwserValue = '';
        const listItems = lists.map((list) => {
            listNum ++;
            questionValue = `q-${listNum}`;
            anwserValue = `a-${listNum}`;

            let num = 0;
            console.log(list.answer);
            
            const answerStrChange = () => {
                let answer = list.answer;
                let answerArr = answer.split('<br/>')

                return answerArr.map((answer) => {
                    console.log(answer)
                    return  <Fragment key={answer}>
                                {answer}<br/>
                            </Fragment>;
                });
            };

            let addLink;
            if (list.link) {
                addLink = list.link.map((link) => {
                    return  <a key={link.title} className="point-link" href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </a>
                });
            }
            
            return <Fragment key={list.question}>
                        <dt className="table-box__q" value={questionValue}>{list.question}</dt>
                        <dd className="table-box__a" value={anwserValue}>
                            {answerStrChange()}
                            {addLink}
                        </dd>
                    </Fragment>
        });
        
        return (
            <article className="content-box content-box-qna">
                <h2 className="content-box__head"><span>Q&A</span></h2>
                <dl className="table-box">
                    {listItems}
                </dl>
            </article>
        )
    }
}

export default Qna;