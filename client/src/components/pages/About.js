import MyNavbar from "../inc/HomeNavbar";
import Footer from "../inc/footer";
import Vms from "../inc/mission";
import Home from "./Home";

function About() {
    return (
        <>
        <MyNavbar/>
        {/* <Home/> */}
         <div class="py-7 bg-light">
            <section className="section">
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Our Company</h3>
                            <div className='underline mx-auto'></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </div>
                    </div>
                </div>

            </section>
            <Vms />
            <Footer />

        </div>
        </>
       
    );
}
export default About;