import './landingpage.css';
import './app features.css';
import './Sliding how it work.css';
import './hamburger menu';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const swiperOptions = {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        tabs: true,
        pagination: {
            el: "#swiper-progress",
            type: "progressbar"
        },
        navigation: {
            prevEl: "#prev-screen",
            nextEl: "#next-screen"
        },
        breakpoints: {
            768: { slidesPerView: 3 }
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <h1>MI WELBODI</h1>
                    </div>

                    <ul className="nav-links">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Chatbot</a></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><a href="/">Profile</a></li>
                    </ul>

                    <div className="app-buttons">
                        <button className="android">Sign Up</button>
                        <button className="ios">Sign In</button>
                    </div>

                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>The next step in clinical training</h1>
                    <p>Master diagnosis with our virtual patients</p>
                    <p>Learn faster with the freedom of practicing OSCEs wherever, whenever</p>
                    <button className="cta">Android</button>
                    <a href="/" className="sign-in-link">or IOS</a>
                </div>

                <div className="hero-image">
                    <img src="images/Top page photo 1.png" alt="Virtual Patients"/>
                </div>
            </section>

            <section id="features" className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="phone-image">
                            <img src="images/phone.png" alt="App Interface" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h2>App Features</h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque 
                            volutpat ligula est. Mattis fermentum, at nec lacus.
                        </p>
                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/payments.svg" alt="Easy Payments"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/security.svg" alt="Data Security"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Data Security</h3>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/statistics.svg" alt="Cost Statistics"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/support.svg" alt="Support 24/7"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Support 24/7</h3>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/cashback.svg" alt="Regular Cashback"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="icon-box">
                                    <img src="images/features/happy.svg" alt="Top Standards"/>
                                </div>
                                <div className="feature-content">
                                    <h3>Top Standards</h3>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative bg-secondary py-5">
                <div className="container mt-3 pt-md-2 pt-lg-4 pb-2 pb-md-4 pb-lg-5">
                    <h2 className="h1 text-center pb-2 pb-md-0 mb-4 mb-md-5">How Does It Work?</h2>
                    <div className="position-relative mx-5">
                        <button type="button" id="prev-screen" className="btn btn-prev btn-icon position-absolute top-50 start-0 ms-n5 translate-middle-y" aria-label="Previous">
                            <span className="bx bx-chevron-left">⬅️</span>
                        </button>
                        <button type="button" id="next-screen" className="btn btn-next btn-icon position-absolute top-50 end-0 me-n5 translate-middle-y" aria-label="Next">
                            <span className="bx bx-chevron-right">➡️</span>
                        </button>

                        <div className="swiper mobile-app-slider" data-swiper-options={JSON.stringify(swiperOptions)}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" data-swiper-tab="#text-1">
                                    <img src="images/phone-frame 1.png" className="d-block mx-auto" width="228" alt="Screen"/>
                                </div>
                                <div className="swiper-slide" data-swiper-tab="#text-2">
                                    <img src="images/phone-frame 2.png" className="d-block mx-auto" width="228" alt="Screen"/>
                                </div>
                                <div className="swiper-slide" data-swiper-tab="#text-3">
                                    <img src="images/phone-frame 3.png" className="d-block mx-auto" width="228" alt="Screen"/>
                                </div>
                                <div className="swiper-slide" data-swiper-tab="#text-4">
                                    <img src="images/phone-frame 4.png" className="d-block mx-auto" width="228" alt="Screen"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center pt-4 mt-2 mt-md-3">
                        <div className="swiper-tabs col-xl-6 col-lg-7 col-md-8 text-center">
                            <div id="text-1" className="swiper-tab active">
                                <h3 className="h4 pb-1 mb-2">Step 1. Advanced budget management</h3>
                                <p className="mb-0">Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.</p>
                            </div>
                            <div id="text-2" className="swiper-tab">
                                <h3 className="h4 pb-1 mb-2">Step 2. Latest transaction history</h3>
                                <p className="mb-0">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
                            </div>
                            <div id="text-3" className="swiper-tab">
                                <h3 className="h4 pb-1 mb-2">Step 3. Transfers to people from your contact list</h3>
                                <p className="mb-0">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                            </div>
                            <div id="text-4" className="swiper-tab">
                                <h3 className="h4 pb-1 mb-2">Step 4. Card-to-card transfers</h3>
                                <p className="mb-0">A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="swiper-progress" className="swiper-pagination bottom-0" style={{top: 'auto'}}></div>
            </section>
        </div>
    )
}

export default LandingPage;