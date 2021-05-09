import Link from 'next/link'
import { Zoom } from 'react-reveal';

const Info = () => {
    return (
        <div className="content">
            <h1>Event Info</h1>
            <script src="https://cdn.logwork.com/widget/countdown.js"></script>
            <a href="https://logwork.com/countdown-p7fo" className="countdown-timer" data-style="flip3" data-timezone="Asia/Kolkata" data-date="2021-05-10 09:00" data-background="#b83939" data-digitscolor="#ebe4e4">Hackathon</a>
            
            <div className="bck_black">
               <div className="center_wrapper">
                    <div className="vn_wrapper">
                        <Zoom duration={500}>
                            <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                 
                                        <div className="vn_title">
                                            Event Date and Time
                                        </div>
                                        <div className="vn_desc">
                                           14 May 2020 @10:00 am       
                                        </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                        <Zoom duration={500} delay={500}>
                           <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                               
                                        <div className="vn_title">
                                            Event Location
                                        </div>
                                        <div className="vn_desc">
                                           From your laptops      
                                        </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                    </div>
               </div>
        </div>
        </div>
    );
}
 
export default Info;    