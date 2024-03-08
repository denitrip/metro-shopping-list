import React from 'react'

import './Footer.css';

export const FooterComponent: React.FC = () => {


    return  <div className='footer__container'>
                <div className='upperFooter'>
                    <div className="sitemap">
                        <div className="Menu">
                            Apprentices
                            <ul>
                                <li>1st year</li>
                                <li>2nd year</li>
                                <li>3rd year</li>
                            </ul>
                        </div>

                        <div className="Menu">
                            Instructors
                            <ul>
                                <li>Orga</li>
                                <li>Technical</li>
                                <li>Others</li>
                            </ul>
                        </div>

                        <div className="Menu">
                            Projects
                            <ul>
                                <li>CodeClub</li>
                                <li>FrontendWars</li>
                                <li>next Project</li>
                            </ul>
                        </div>

                        <div className="Menu">
                            How to...
                            <ul>
                                <li>Autofill IHK Berichtsheft</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>

                        <div className="Menu">
                            Milestones
                            <ul>
                                <li>AP Teil 1</li>
                                <li>AP Teil 2</li>
                                <li>Klausuren BK Hilden</li>
                            </ul>
                        </div>
                    </div>

                    <div className="socialMedia">
                        <h4>MDapprentices on social web</h4>
                        <div className="icons">
                            <a href="https://www.facebook.com/METRO.digitalMD/"><img className="icon" src="facebook-icon.png"/></a>
                            <a href="https://www.instagram.com/metro.digital/?hl=de"><img className="icon" src="insta-icon.png"/></a>
                            <a href="https://de.linkedin.com/company/metro-digitalmd"><img className="icon" src="linkedin-icon.png"/></a>
                            <a href="https://github.com/denitrip/metro-shopping-list"><img className="icon" src="github-icon.png"/></a>
                            <a href="sharing-img.png"><img className="icon" src="share-icon.png"/></a>
                            <a href="troll-img.jpg"><img className="icon" src="troll-icon.png"/></a>
                        </div>
                    </div>
                </div>

                <div className='lowerFooter'>
                    <div className="lowerFooterLeft">© MDapprentices, 2024</div>
                    <div className="lowerFooterRight">
                        <div><a href="Kontakt.html">GTCs</a></div>
                        <div><a href="Kontakt.html">Cookies</a></div>
                        <div><a href="Kontakt.html">Imprint</a></div>
                        <div><a href="Kontakt.html">Contact</a></div>
                    </div>
                </div>
            </div>
}