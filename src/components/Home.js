import React from "react";
import Header from "./Header";
import effectImg from "../assets/images/Vector 2.png"
import Card from "./Card";
import Title from "./Title"
import Icon1 from "../assets/images/icons8-cyber-security-96.png";
import Icon2 from "../assets/images/icons8-guarantee-96.png";
import Icon3 from "../assets/images/icons8-technology-lifestyle-96.png";
import Icon4 from "../assets/images/icons8-request-service-96.png";
import Icon5 from "../assets/images/icons8-tableau-software-96.png"
import Icon6 from "../assets/images/icons8-trust-96.png";
import Vector from "../assets/images/Wavy_Bus-19_Single-02.jpg"
import Angular from "../assets/images/angular-icon-logo.png";
import ReactImg from "../assets/images/react-logo.png";
import JavascriptImg from "../assets/images/javascript-logo.png";
import HTMLImg from "../assets/images/html-logo.png";
import CSSImg from "../assets/images/css3-logo.png";
import NodeImg from "../assets/images/nodejs-icon-logo.png";
import SQLImg from "../assets/images/microsoft-sql-server.png";
import MySqlImg from "../assets/images/mysql-logo-1.png";
import MongoImg from "../assets/images/mongo-removebg-preview.png";
import DotNet from "../assets/images/net-removebg-preview.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ImgPerson from "../assets/images/photo-3.jpg";
import ImgAmazon from "../assets/images/amazon.png";
import Imgdst from "../assets/images/dst_global.png";
import Imgfizi from "../assets/images/fizi.png";
import Imggeneral from "../assets/images/general_mills.png";
import Imgkfc from "../assets/images/kfc.png";
import Imgjsdecaux from "../assets/images/jsdecaux.png"
import Footer from "./Footer";
import backSmoke from "../assets/videos/Smoke_Slow_motion_4K.mp4";

// animation
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

// Import Swiper styles



const Home = (props) => {

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 900) {
            document.getElementById("line1").style.backgroundColor = "#000";
            document.getElementById("line2").style.backgroundColor = "#000";
            document.getElementById("line3").style.backgroundColor = "#000";
        }
        else {
            document.getElementById("line1").style.backgroundColor = "#fff";
            document.getElementById("line2").style.backgroundColor = "#fff";
            document.getElementById("line3").style.backgroundColor = "#fff";
        }
    })

    const rotate = (id, idofimg) => {
        let main = document.getElementById("main");
        let img = document.getElementById(idofimg);
        let other1 = document.getElementById("firstImg");
        let other2 = document.getElementById("secImg");
        let other3 = document.getElementById("thirdImg");
        let other4 = document.getElementById("fourImg");
        let other5 = document.getElementById("fiveImg");
        let other6 = document.getElementById("sixImg");
        let heading = document.getElementById("heading");

        if (id === "first") {
            main.style.transform = "rotate(0deg)";
            main.style.transform = "rotate(117deg)";
            img.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(-117deg)";
            other2.style.transform = "rotate(-117deg)";
            other3.style.transform = "rotate(-117deg)";
            other4.style.transform = "rotate(-117deg)";
            other5.style.transform = "rotate(-117deg)";
            other6.style.transform = "rotate(-117deg)";

            heading.innerHTML = "Agile Software Development"
        } else if (id === "sec") {
            main.style.transform = "rotate(0deg)";
            main.style.transform = "rotate(57deg)";
            img.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(-57deg)";
            other1.style.transform = "rotate(-57deg)";
            other3.style.transform = "rotate(-57deg)";
            other4.style.transform = "rotate(-57deg)";
            other5.style.transform = "rotate(-57deg)";
            other6.style.transform = "rotate(-57deg)";
            heading.innerHTML = "Trusted and Reliable Technology"
        } else if (id === "third") {
            main.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(0deg)";
            other2.style.transform = "rotate(0deg)";
            other1.style.transform = "rotate(0deg)";
            other4.style.transform = "rotate(0deg)";
            other5.style.transform = "rotate(0deg)";
            other6.style.transform = "rotate(0deg)";
            heading.innerHTML = "High-level Security"
        } else if (id === "four") {
            main.style.transform = "rotate(0deg)";
            main.style.transform = "rotate(-62deg)";
            img.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(62deg)";
            other2.style.transform = "rotate(62deg)";
            other3.style.transform = "rotate(62deg)";
            other1.style.transform = "rotate(62deg)";
            other5.style.transform = "rotate(62deg)";
            other6.style.transform = "rotate(62deg)";
            heading.innerHTML = "Exceptional Commmunication"
        } else if (id === "five") {
            main.style.transform = "rotate(0deg)";
            main.style.transform = "rotate(-122deg)";
            img.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(122deg)";
            other2.style.transform = "rotate(122deg)";
            other3.style.transform = "rotate(122deg)";
            other4.style.transform = "rotate(122deg)";
            other1.style.transform = "rotate(122deg)";
            other6.style.transform = "rotate(122deg)";
            heading.innerHTML = "Customized Software Development"
        } else {
            main.style.transform = "rotate(0deg)";
            main.style.transform = "rotate(-182deg)";
            img.style.transform = "rotate(0deg)";
            img.style.transform = "rotate(182deg)";
            other2.style.transform = "rotate(182deg)";
            other3.style.transform = "rotate(182deg)";
            other4.style.transform = "rotate(182deg)";
            other5.style.transform = "rotate(182deg)";
            other1.style.transform = "rotate(182deg)";
            heading.innerHTML = "Smiling Customers"
        }

    }
    return (
        <>
            {/* banner section */}
            <section id="banner">
                <div className="main">
                    {/* header section */}
                    <Header />

                    <div className="text">
                        <h1>The Web Kitchen</h1>
                    </div>
                    <div className="home-content container">
                        <Fade left>
                            <h1 className="simple-content">WE ONLY FOCUS ON DIGITAL</h1>
                            <h1 className="color-content">BUSINESS EFFICIENCY</h1>
                            <p>We're a boutique digital agency offering a premium service across branding, website design, web development and digital marketing.</p>
                            <div className="btn home-btn">LET'S GET STARTED</div>
                        </Fade>
                        <Roll left>
                            <img className="effectImg" src={effectImg} alt="none" />
                        </Roll>
                    </div>
                </div>
                <div className="overlayer"></div>
                {/* <video autoPlay muted loop style={{ position: "absolute", top: 0, left: 0, opacity: 0.2, height: "100vh", width: "120rem", zIndex: 0 }}>
                    <source src={backSmoke} type="video/mp4" />
                </video> */}
            </section>

            {/* services section */}
            <section id="service">
                <div className="container ">
                    <Title inTitle="Custom Software Development Company Serving Start-usp" />
                    <div className="all-cards">
                        <Bounce bottom>
                            <div className="row">
                                {
                                    props.val.map(data => {
                                        return (
                                            // <Zoom clear>
                                            <Card val={data} />
                                            // </Zoom>
                                        )
                                    })
                                }
                            </div>
                        </Bounce>
                    </div>
                    {/* <div className="row">
                        <Card />
                        <Card />
                        <Card />
                    </div> */}
                </div>
            </section>

            {/* delivers section */}
            <section id="delivers">
                <div className="container">
                    <Title inTitle="Software Development company that Delivers" />
                    <div className="row">
                        <Fade left>
                            <div className="col-12 col-md-4 col-lg-4 left">
                                <div className="main-round" id="main">
                                    <div className="first" id="first" onClick={() => rotate("first", "firstImg")} ><img src={Icon1} alt="" id="firstImg" /></div>
                                    <div className="sec" id="sec" onClick={() => rotate("six", "sixImg")} > <img src={Icon2} alt="" id="sixImg" /></div>
                                    <div className="third" id="third" onClick={() => rotate("sec", "secImg")} > <img src={Icon3} alt="" id="secImg" /></div>
                                    <div className="four" id="four" onClick={() => rotate("third", "thirdImg")} > <img src={Icon4} alt="" id="thirdImg" /></div>
                                    <div className="five" id="five" onClick={() => rotate("five", "fiveImg")} > <img src={Icon5} alt="" id="fiveImg" /></div>
                                    <div className="six" id="six" onClick={() => rotate("four", "fourImg")} > <img src={Icon6} alt="" id="fourImg" /></div>
                                </div>
                                <div className="inner">
                                    <h1>SEQUENCE</h1>
                                    <h1>SELECTION</h1>
                                    <h1>ITERATION</h1>
                                </div>
                            </div >
                        </Fade>
                        <div className="middle col-12 col-md-4 col-lg-4">
                            <Zoom>
                                <div className="verticle-line"></div>
                                <div className="horizontal-line"></div>
                            </Zoom>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 right">
                            <Fade right>
                                <div className="content">
                                    <h4 id="heading">High-level Security</h4>
                                    <p id="sub-head">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                            </Fade>
                        </div>
                    </div >
                </div >
            </section >

            {/* what we do section */}
            <section id="we-do">
                <div className="container">
                    <Title inTitle="What we do?" />
                    <div className="row">
                        <div className="col-12 col-md-6 left">
                            <Fade left>
                                <img src={Vector} alt="vector" />
                            </Fade>
                        </div>
                        <div className="col-12 col-md-6 right">
                            <Fade right>
                                <div className="content">
                                    <h4 id="heading">Our customers rely on our deep domain experties, so they can focus on their core mission</h4>
                                    <p id="sub-head">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <button className="btn about-btn">ABOUT US</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies section */}
            <section id="technology">
                <div className="container">
                    <Title inTitle="Technologies" />
                    <div className="rowcol">
                        <Bounce>
                            <div>
                                <img src={Angular} alt="" />
                                <h6>Angular</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={ReactImg} alt="" />
                                <h6>React</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={JavascriptImg} alt="" />
                                <h6>Javascript</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={HTMLImg} alt="" />
                                <h6>HTML</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={CSSImg} alt="" />
                                <h6>CSS</h6>
                            </div>
                        </Bounce>
                    </div>
                    <div className="rowcol">
                        <Bounce>
                            <div>
                                <img src={NodeImg} alt="" />
                                <h6>Node.Js</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={SQLImg} alt="" />
                                <h6>SQL Server</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={MySqlImg} alt="" />
                                <h6>MySql</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={MongoImg} alt="" />
                                <h6>MongoDB</h6>
                            </div>
                        </Bounce>
                        <Bounce>
                            <div>
                                <img src={DotNet} alt="" />
                                <h6>.NET</h6>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </section>

            {/* custommers review section */}
            <section id="review">
                <div className="container">
                    <Title inTitle="Customer Success Stories" />
                    <div className="row">
                        <div className="col-12 col-md-4 left">
                            <div className="d-flex in-div">
                                <img src={ImgPerson} alt="" />
                                <div className="content">
                                    <h6>John Doe</h6>
                                    <p>Designer</p>
                                </div>
                                <div className="star">
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="starnot"><AiOutlineStar /></i>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-12 col-md-4 right">
                            <div className="d-flex in-div">
                                <img src={ImgPerson} alt="" />
                                <div className="content">
                                    <h6>John Doe</h6>
                                    <p>Designer</p>
                                </div>
                                <div className="star">
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="fillstar"><AiFillStar /></i>
                                    <i className="starnot"><AiOutlineStar /></i>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our clients section */}
            <section id="clients">
                <div className="container">
                    <Title inTitle="Our clients" />
                    <div className="row">
                        <Bounce>
                            <img src={Imgdst} alt="" />
                        </Bounce>
                        <Bounce>
                            <img src={Imggeneral} alt="" />
                        </Bounce>
                        <Bounce>
                            <img src={ImgAmazon} alt="" />
                        </Bounce>
                        <Bounce>
                            <img src={Imgkfc} alt="" />
                        </Bounce>
                        <Bounce>
                            <img src={Imgfizi} alt="" />
                        </Bounce>
                        <Bounce>
                            <img src={Imgjsdecaux} alt="" />
                        </Bounce>
                    </div>
                </div>
            </section>

            {/* footer section*/}
            <section id="footer">
                <Footer />
            </section>
        </>
    );
}

export default Home;