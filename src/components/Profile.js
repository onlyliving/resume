import React, {Component} from 'react';

class Profile extends Component {
    render() {
        console.log(`%c ==> Profile render`, 'color:magenta');
        
        const contentTxtChange = (contentArr) => {
            if (!contentArr) {
                return new Error('contentTxtChange error');
            }

            let num = 0;
            return contentArr.map((content) => {
                num ++;

                if (content.indexOf('(strong') !== -1) {
                    content = content.replace('(strong)', '');
                    return <strong key={num} className='txt-sub-strong'>{content}<br/><br/></strong>;
                }
                
                return <p key={num}>{content}<br/></p>
            });
        }

        const profiles = this.props.data;
        let num = 0;
        const profileListItems = profiles.map((profile) => {
            num ++;
            let contents = profile.content.split('(@)');
            return <div key={num}><span className="txt-sub-title">{profile.title}</span>{contentTxtChange(contents)}</div>
            
        });

        return (
            <article id="profileEl" className="content-box content-box--profile">
                <h2 className="content-box__head"><span>Profile</span></h2>
                <div className="content-box__profile-txt">
                    {profileListItems}
                </div>
                {/* <button type="button" id="profileMoreBtn" className="content-box__profile-more-btn">more</button> */}
            </article>
        )
    }
}

export default Profile;