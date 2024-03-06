import React from 'react'

import './Footer.css';


export const FooterComponent: React.FC = (color) => {


    return  <div className='footer__container'>
                <div className='upperFooter'>
                    <div class="sitemap">
                        <div>Apprentices</div>
                        <div>Instructors</div>
                        <div>Projects</div>
                        <div>Goals</div>
                        <div>Milestones</div>
                    </div>

                    <div class="socialMedia">
                        <h3>M.d Apprentices on Social Web</h3>
                        <div class="icons">
                            <img class="icon" src="facebook-icon.png"/>
                            <img class="icon" src="insta-icon.png"/>
                            <img class="icon" src="linkedin-icon.png"/>
                            <img class="icon" src="github-icon.png"/>
                            <img class="icon" src="share-icon.png"/>
                            <img class="icon" src="troll-icon.png"/>
                        </div>
                    </div>
                </div>

                <div className='lowerFooter'>
                    <div class="margin_left">© M.d Apprentices, 2024</div>
                    <div class="margin_right">
                        <div><a href="Kontakt.html">AGB</a></div>
                        <div><a href="Kontakt.html">Cookies</a></div>
                        <div><a href="Kontakt.html">Impressum</a></div>
                        <div><a href="Kontakt.html">Kontakt</a></div>
                    </div>
                </div>
            </div>
}