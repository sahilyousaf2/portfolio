import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-hr'>
                    {/* <hr className='bg-black h-[2px]'/> */}
                    <hr className="footer-hr-hr" />
                </div>
                {/* logo */}
                <div className='mt-5 text-3xl'>
                    <center>
                        <Link href={"/"}>
                            <h1 className='footer-logo'>Sahil Yousaf</h1>
                        </Link>
                    </center>
                </div>
                {/* list */}
                <div>
                    <center>
                        <div className='footer-hr'>
                            <ul className='footer-list'>
                                <li className='footer-list-li'>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li className='footer-list-li'>
                                    <Link href={"/project"}>Project</Link>
                                </li>
                                <li className='footer-list-li'>
                                    <Link href={"/about"}>About</Link>
                                </li>
                                <li className='footer-list-li'>
                                    <Link href={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </center>
                </div>
                {/* icon */}
                <div>
                    <div>
                        <center>
                            <div className='footer-hr'>
                                <ul className='footer-icon'>
                                    <li className='footer-icon-li'>
                                        <Link href={"https://www.facebook.com/uni.moma"} target='black'><FacebookIcon />
                                        </Link>
                                    </li>
                                    <li className='footer-icon-li'>
                                        <Link href={"https://web.whatsapp.com/+923112813975"} target='black'><WhatsAppIcon />
                                        </Link>
                                    </li>
                                    <li className='footer-icon-li'>
                                        <Link href={"https://github.com/sahilyousaf2"} target='black'><GitHubIcon />
                                        </Link>
                                    </li>
                                    <li className='footer-icon-li'>
                                        <Link href={"https://www.linkedin.com/in/sahil-yousaf-02a0a52b5/"} target='black'><LinkedInIcon />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </center>
                    </div>
                </div>

                <div className='footer-copyright'>
                    <center>
                        @2024 Copyright Sahil Yousaf
                    </center>

                </div>
            </footer>
        </>
    )
}

export default Footer
