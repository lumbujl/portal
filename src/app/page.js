import { fetchBlogs } from "./server/fetchBlogs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './style.css';
import Header from '@/components/header';
import { SiDrone } from "react-icons/si";
import { TbGeometry } from "react-icons/tb";


export default async function Home() {
    const blogs = await fetchBlogs();
    return (
        <>
            <header className="header fixed-top">

                <a href="#" className=" flex items-center ">
                    <img src="logosvg.svg" alt="" width="30px" height="30px" className='semi-bold text-red-500 text-5xl no-underline' />
                    <span className='semi-bold text-slate-800 text-5xl  no-underline border-none text-orange-500'> AllsConst</span>

                </a>

                <Header />

                <div className="fas fa-bars"></div>

            </header>

            <section id="home" className="home container-fluid p-0">

                <div className="row hero">
                    <div className="col pl-3 ml-sm-5 p-0">
                        <h1 className="text1">Cartographie Aerienne</h1>
                        <h3 className="text2">Services Construction</h3>
                    </div>
                </div>

                <div className="counting">

                    <div className="box">
                        <h1 className="count" data-count="1200">1200+</h1>
                        <h3>Heures oeuvrés</h3>
                    </div>

                    
                    <div className="box">
                        <h1 className="count" data-count="1000">120+</h1>
                        <h3>clients</h3>
                    </div>

                    <div className="box">
                        <h1 className="count" data-count="840">840+</h1>
                        <h3>réalisations</h3>
                    </div>

                </div> 

            </section>

            <section id="about" className="about container">

                <h1 className="heading">A propos de nous</h1>

                <div className="row align-items-center">

                    <div className="col-md-6 image">
                        <img src="/construction-drone.jpg" width="90%" alt="" />
                    </div>

                    <div className="col-md-6 info">
                        <h2>Meilleures offres en termes de services de Constrcution</h2>
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


{/* 
            <section id="service" className="service">

                <h1 className="heading">Nos services</h1>

                <div className="box-container mx-auto">

                    <div className='box'>
                        <div className="fas fa-palette"></div> 
                        <TbGeometry className='boxx text-3xl bold flex align-right pl-[100px] ' /> 
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

            </section> */}



            <section id="project" className="project">

                <div className="heading">Nos realisations</div>

                <div className="box-container mx-auto">

                    <div className="box">
                        <a href="img-2.jpg" title="house">
                            <img src="/cloture.jpeg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-3.jpg" title="hall">
                            <img src="/facade.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-1.jpg" title="pole">
                            <img src="/nettoyage-toiture.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-4.jpg" title="kitchen">
                            <img src="/jardin.jpg" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-6.jpg" title="bath">
                            <img src="/isolation.png" alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <a href="/img-2.jpg" title="toilet">
                            <img src="/img-2.jpg" alt="" />
                        </a>
                    </div>
                    <p className="text-slate-100 text-3xl">Un drone se déplace dans la journée pour l’examen, devis rapide garanti 🚁📸</p>

                </div>

            </section>



            <section id="contact" className="contact">

                <h1 className="heading">Contactez nous</h1>

                <div className="contact-box-container mx-auto">


               
      

                    <div className="contact-box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3><p>📍 Basé à Bruxelles, interventions dans toute la Belgique.</p>
      <br/></h3>
                    </div>

                    <div className="contact-box">
                        <i className="fas fa-envelope"></i>
                        <h3>💌 contact@allsconstruction.be</h3>
                    </div>

                    <div className="contact-box">
                        <i className="fas fa-phone"></i>
                        <h3>📞 0470/000.000</h3>
                    </div>

                </div>

                <div className="form-container mx-auto">

                    <form action="">

                        <div className="inputBox">
                            <input type="text" placeholder="prenom" />
                            <input type="text" placeholder="Nom" />
                        </div>
                        <input type="email" placeholder="e-mail" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                        <input type="submit" value="envoyer" />

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

        // <div className="container mx-auto px-4 py-8">
        //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        //     {blogs.map((blog) => (
        //       <div key={blog.$id} className="p-4 border rounded-lg shadow-md flex flex-col">
        //         <div className="mb-4 aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
        //           <img
        //             src="/thumbnail.jpg"
        //             alt={blog.title}
        //             className="object-cover w-full h-full"
        //           />
        //         </div>

        //         <div className="flex-grow">
        //           <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        //           <p className="text-gray-600 mb-4">{blog.tagline}</p>
        //         </div>

        //         <Link href={`/blog/${blog.$id}`} className="w-fit">
        //           <Button className="cursor-pointer">
        //             Read More
        //           </Button>
        //         </Link>
        //       </div>
        //     ))}
        //   </div>
        // </div>
    );
}
