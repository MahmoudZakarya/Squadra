import React from 'react'
import "./style.css"

export default function TeamSection() {
  return (
    <div>
        <section className="squad-section" id='team'>
            <div className="squad-container">
                <div className="squad-title">
                    <h3 className="title">
                        squadra
                    </h3>
                </div>
                <div className="cards-container">
                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/pola.jpg"} alt="pola" />
                        </div>
                        <div className="discreption">
                            <h3>Paula Samwel</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/pola.samwel.3" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>


                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/shoky.jpg"} alt="shoky" />
                        </div>
                        <div className="discreption">
                            <h3>Khaild El Shoky</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/khelshoky" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/gamal.jpg" } alt="Gamal" />
                        </div>
                        <div className="discreption">
                            <h3>Gamal Ramzy</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/gamal.ramzy.9" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/abdelrahman.jpg"} alt="abdelrahman" />
                        </div>
                        <div className="discreption">
                            <h3>Abdelrahman Mohamed</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/abdelrahman.mohamed.16503323" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>
        

                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/sharnoby.jpg"} alt="sharnoby" />
                        </div>
                        <div className="discreption">
                            <h3>Mohamed El ShaRnouby</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/mohamed.shero.9" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>


                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/amin.jpg"} alt="amin" />
                        </div>
                        <div className="discreption">
                            <h3>IsLam Amin</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/islamamin25" target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>


                    <div className="member-card">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/fekry.jpg"} alt="fekry" />
                        </div>
                        <div className="discreption">
                            <h3>Fekry Tarek</h3>
                            <p>vice presedent</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/fekry.t.fekry"><i className='fab fa-facebook'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                            </div>
                            

                        </div>
                    </div>


                    
                </div>
            </div>
        </section>
    </div>
  )
}
