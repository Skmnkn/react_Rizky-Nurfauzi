import { toast, ToastContainer } from "react-toastify";
import IMGMAIN from "../../assets/imgmain.png";

export const MainSection = () => {
  const notify = () => toast("Mantap Gan!");

  return (
    <>
      <section id="home">
        <div className="row main container m-auto pt-5">
          <div className="col-md-6" id="title" data-aos="fade-up">
            <h4 className="mt-5 fw-normal">BUILD YOUR OWN</h4>
            <h1
              className="mb-4"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              Gaming PCs made simple
            </h1>
            <ul className="ps-4 fs-5">
              <li className="mb-3">Pick your price</li>
              <li>We’ll Build it!</li>
            </ul>
            <button
              className="btn btn-light btn-light mt-4"
              id="homebutton"
              onClick={notify}
            >
              <a
                className="mx-2 mb-auto fw-normal"
                style={{ textDecoration: "none" }}
                href="#whatis"
              >
                Start Your PC
              </a>
            </button>
            <ToastContainer className="fs-6" />
          </div>
          <div className="col-md-6" id="paralax">
            <div className="scene" id="scene">
              <img
                data-depth="0.60"
                src={IMGMAIN}
                className="bg-img"
                alt="imgMain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
