import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './style.css';
import Header from '@/components/header';
import { SiDrone } from "react-icons/si";
import { TbGeometry } from "react-icons/tb";


export default function BlogPage(){
    return (
        <>

          <header className="header fixed-top">

                <a href="#" className=" flex items-center no-underline">
                    {/* <img src="logo.jpg" alt="" width="80px" height="60px" /> */}
                    <SiDrone className='text-3xl m-1  text-slate-800'/><span className='semi-bold text-slate-800 text-3xl'>Construct</span>
                </a>

                <Header/>

                <div className="fas fa-bars"></div>

            </header>

              <section id="home" className="home container-fluid p-0">

                <div className="row hero">
                    <div className="col pl-3 ml-sm-5 p-0">
                        <h1 className="text1">Cartographie Aerienne</h1>
                        <h3 className="text2">Architechture services</h3>
                    </div>
                </div>

                <div className="counting">

                    <div className="box">
                        <h1 className="count" data-count="1200">1200+</h1>
                        <h3>working hours</h3>
                    </div>

                    <div className="box">
                        <h1 className="count" data-count="15">15+</h1>
                        <h3>awards</h3>
                    </div>

                    <div className="box">
                        <h1 className="count" data-count="1000">1000+</h1>
                        <h3>clients</h3>
                    </div>

                    <div className="box">
                        <h1 className="count" data-count="840">840+</h1>
                        <h3>projects</h3>
                    </div>

                </div>

            </section>

          <section id="about" className="about container">

                <h1 className="heading">about us</h1>

                <div className="row align-items-center">

                    <div className="col-md-6 image">
                        <img src="/img-2.jpg" width="90%" alt="" />
                    </div>

                    <div className="col-md-6 info">
                        <h2>the best Interior Design in the city</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste reprehenderit sequi enim porro dolor explicabo distinctio voluptates exercitationem nam excepturi?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus sint totam, ea velit eius. Praesentium consequuntur sint porro, similique ut corrupti dolorem eligendi. Sunt porro quos libero illum quo officia laboriosam quisquam, nam totam?</p>
                        <div className="icons">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-pinterest "></a>
                        </div>
                    </div>

                </div>

            </section>



       <section id="service" className="service">

                <h1 className="heading">our services</h1>

                <div className="box-container mx-auto">

                    <div className='box'>
                        {/* <div className="fas fa-palette"></div> */}
                        <TbGeometry className='boxx text-3xl bold flex align-right pl-[100px] '/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                    <div className="box">
                        <div className="fas fa-tools"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                    <div className="box">
                        <div className="fas fa-house-user"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                    <div className="box">
                        <div className="fas fa-couch"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                    <div className="box">
                        <div className="fas fa-bed"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                    <div className="box">
                        <div className="fas fa-bath"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!</p>
                    </div>

                </div>

            </section>



                  <section id="project" className="project">

                <div className="heading">our projects</div>

                <div className="box-container mx-auto">

                    <div className="box">
                        <a href="img-2.jpg" title="house">
                            <img src="/img-2.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-3.jpg" title="hall">
                            <img src="/img-3.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-1.jpg" title="pole">
                            <img src="/img-1.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-4.jpg" title="kitchen">
                            <img src="/img-4.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-6.jpg" title="bath">
                            <img src="/img-6.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-2.jpg" title="toilet">
                            <img src="/img-2.jpg" alt="" />
                        </a>
                    </div>

                </div>

            </section>



           <section id="contact" className="contact">

                <h1 className="heading">contact us</h1>

                <div className="contact-box-container mx-auto">

                    <div className="contact-box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>mumbai, india - 400104</h3>
                    </div>

                    <div className="contact-box">
                        <i className="fas fa-envelope"></i>
                        <h3>xyz@gmail.com</h3>
                    </div>

                    <div className="contact-box">
                        <i className="fas fa-phone"></i>
                        <h3>+9100000000</h3>
                    </div>

                </div>

                <div className="form-container mx-auto">

                    <form action="">

                        <div className="inputBox">
                            <input type="text" placeholder="first name" />
                            <input type="text" placeholder="last name" />
                        </div>
                        <input type="email" placeholder="e-mail" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                        <input type="submit" value="send" />

                    </form>

                </div>


            </section>



      <section className="container-fluid footer">

                <div className="row">

                    <div className="col-md-3">
                        <h2><img src="images/logo.png" alt="" /></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi rerum facilis, deserunt ea commodi sed voluptatum beatae accusamus nisi pariatur.</p>
                    </div>

                    <div className="col-md-3">
                        <h2>our location</h2>
                        <div className="list">
                            <a href="#">india</a>
                            <a href="#">france</a>
                            <a href="#">usa</a>
                            <a href="#">japan</a>
                            <a href="#">rusia</a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h2>follow us</h2>
                        <div className="list">
                            <a href="#">facebook</a>
                            <a href="#">twitter</a>
                            <a href="#">instagram</a>
                            <a href="#">pinterest</a>
                        </div>
                    </div>

                    <div className="col-md-3 text-center text-md-left letter">
                        <h2>newsletter</h2>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="enter your email" />
                        <input type="submit" placeholder="subscribe" />
                    </div>

                </div>

                <h1 className="credit">created by <span>mr. web designer</span> | all rights reserved. </h1>

            </section> 
        </>
    )
}