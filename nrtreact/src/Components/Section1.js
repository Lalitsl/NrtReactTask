import Section2 from "./Section2";
import Pricing from "./Pricing";
function Section1() {
    return (
        <>
            <section className='container-fluid'>
                <div className='row p-3'>
                    <div className='section1FirstDiv col col-lg-6 col-md-6 col-12'>
                        <div className=''>
                            <h1 className=''>Introduce Your Product Quickly & Effectively</h1>
                            <p className='my-4 textBlue'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Purchase UI Kit
                                Learn More</p>
                                <div className='d-flex'>
                                <button type="button" className="px-4 section1Button1">Purchase UI Kit</button>
                                <button type="button" className="mx-3 px-5 fw-bold textBlue">Learn More</button>
                                </div>
                        </div>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-12 section1'>

                    </div>

                </div>
            </section>
            <Section2 />
            <Pricing />
        </>
    );
}

export default Section1;