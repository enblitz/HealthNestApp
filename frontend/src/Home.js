import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <p>TOTAL HEALTH CARE SOLUTION</p>
                    <h1>Your Most Trusted <br />Health Partner</h1>
                    <p>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
        <section className="container" style={{marginTop: 200, marginBottom:200}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            {/* <img src={img} alt="" className="img-fluid" /> */}
                            {/* <img src={img2} alt="" className="img-fluid mt-4" /> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            {/* <img src={img3} alt="" className="img-fluid" /> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>Personal care <br />healthy living</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                            <Link to={'/service'} className="btn-get-started scrollto">Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>




  )
}

export default Home