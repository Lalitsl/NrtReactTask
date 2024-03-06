import React from "react";
import img2 from '../images/img2.png';
import img1 from '../images/img1.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';


function Section2() {
    return (
        <>
         {/* 1st SECTION  */}
            <div className="container">
                <div className="row my-5">
                    <div className="col col-lg-6 col-md-6 col-12 section2FirstDiv">
                        <h1>Light, Fast & Powerful</h1>
                        <p className="my-4" style={{ color: '#37447E' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <div className="row my-3 p-3">
                            <div className="col-6">
                                <i className="fa-solid fa-house fa-2xl my-4"></i>
                                <h5>Title Goes Here</h5>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>
                            <div className="col-6">
                                <i className="fa-solid fa-house fa-2xl my-4"></i>
                                <h5>Title Goes Here</h5>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <img src={img2} alt="img1" className="w-75" />
                    </div>
                </div>
            </div>

            {/* 2nd SECTION  */}
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col col-lg-6 col-md-6 col-12 imgCenter">
                        <img src={img1} alt="img1" className="w-50" />
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12 mt-5 section2FirstDiv">
                        <h2>Light, Fast & Powerful </h2>
                        <p className="textBlue">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>

             {/* 3rd SECTION  */}
             <div className="container my-5">
                <div className="row my-5">
                    <div className="col col-lg-6 col-md-6 col-12 imgCenter">
                        <img src={img4} alt="img1" className="w-50" />
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12 mt-5 section2FirstDiv">
                        <h2>Light, Fast & Powerful </h2>
                        <p className="textBlue">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>
             {/* 4th SECTION  */}
             <div className="container my-5">
                <div className="row my-5">
                    <div className="col col-lg-6 col-md-6 col-12 imgCenter">
                        <img src={img3} alt="img1" className="w-50" />
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12 mt-5 section2FirstDiv">
                        <h2>Light, Fast & Powerful </h2>
                        <p className="textBlue">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Section2;