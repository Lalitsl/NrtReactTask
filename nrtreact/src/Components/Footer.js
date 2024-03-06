
function Footer() {
    return (
        <>
            <section className="bg-blue">
                <div className="container">
                    <div className="row mx-5">
                        <div className="col col-lg-4 col-md-6 col-12 py-2" style={{ color: '#939EA4' }}>©2023 Yourcompany</div>
                        <div className="col col-lg-4 col-md-6 col-12 py-2 textBlue fw-bold fs-5">Landing</div>
                        <div className="col col-lg-4 col-md-6 col-12 py-2">
                            <button type="submit" className="section1Button1 px-3">Purchase Now</button>
                        </div>
                    </div><hr />
                </div>
                <div className="container py-3">
                    <div className="row footer1">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="d-flex textBlue">
                                <p>Home</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12 text-secondary">
                        <i class="fa-brands fa-facebook-f mx-3"></i>
                        <i class="fa-brands fa-linkedin-in mx-3"></i>
                        <i class="fa-brands fa-twitter mx-3"></i>
                        <i class="fa-brands fa-youtube mx-3"></i>
                        <i class="fa-brands fa-instagram mx-3"></i>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Footer;

