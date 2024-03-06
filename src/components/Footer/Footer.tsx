import React from 'react'

import './Footer.css';


export const FooterComponent: React.FC = (color) => {


    return  <div className='footer__container'>
                <div className='upperFooter'>
                    <div class="sitemap">
                        <div class="Menu">
                            Apprentices
                            <ul>
                                <li>1st year</li>
                                <li>2nd year</li>
                                <li>3rd year</li>
                            </ul>
                        </div>

                        <div class="Menu">
                            Instructors
                            <ul>
                                <li>Orga</li>
                                <li>Technical</li>
                                <li>Others</li>
                            </ul>
                        </div>

                        <div class="Menu">
                            Projects
                            <ul>
                                <li>CodeClub</li>
                                <li>FrontendWars</li>
                                <li>next Project</li>
                            </ul>
                        </div>

                        <div class="Menu">
                            How to...
                            <ul>
                                <li>Autofill IHK Berichtsheft</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>

                        <div class="Menu">
                            Milestones
                            <ul>
                                <li>AP Teil 1</li>
                                <li>AP Teil 2</li>
                                <li>Klausuren BK Hilden</li>
                            </ul>
                        </div>
                    </div>

                    <div class="socialMedia">
                        <h4>MDapprentices on Social Web</h4>
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
                    <div class="lowerFooterLeft">© MDapprentices, 2024</div>
                    <div class="lowerFooterRight">
                        <div><a href="Kontakt.html">GTCs</a></div>
                        <div><a href="Kontakt.html">Cookies</a></div>
                        <div><a href="Kontakt.html">Imprint</a></div>
                        <div><a href="Kontakt.html">Contact</a></div>
                    </div>
                </div>
            </div>
}