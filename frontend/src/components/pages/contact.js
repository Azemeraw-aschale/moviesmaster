import MyNavbar from "../inc/HomeNavbar";
import Footer from "../inc/footer";
function Contact() {
    return (
        <>
        <MyNavbar/>
        
        <div>
            <section className=" py-3 mb-2">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h3 className='py-4'></h3>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end text-white'>
                                Contact us/we are there for you</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Contact Form</h5>
                                    <hr />

                                    <div className="form-group ">
                                        <label for="fname" className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" name="" placeholder="Enter your name" />

                                    </div>
                                    <div className="form-group ">

                                        <label for="fname" className="mb-1">Email</label>
                                        <input type="text" className="form-control" name="" placeholder="Enter your Email" />

                                    </div>
                                    <div className="form-group ">

                                        <label for="fname" className="mb-1">Phone</label>
                                        <input type="text" className="form-control" name="" placeholder="Enter your phone" />
                                    </div>
                                    <div className="form-group">

                                        <label className="mb-1">Message</label>

                                        <textarea rows="4" className="form-control" placeholder="Enter your message">

                                        </textarea>
                                    </div>
                                    <div className="form-group py-2 ">
                                        <button type="button" className=" bg-[#293A77] py-2 rounded text-white font-bold shadow float-end w-100">Send Message</button>

                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h4 className="main-heading">Address Info</h4>
                                    <div className="uderline"></div>
                                    <p>Addis Ababa , street Around</p>
                                    <p> 098383838</p>
                                    <p> 098383838</p>
                                    <p>Amanuel@emaail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
        </>

    );
}
export default Contact;