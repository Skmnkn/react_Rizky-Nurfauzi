export const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "#401957" }}
      >
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light text-center">RKTPC</h5>
              <p className="text-light" style={{ textAlign: "justify" }}>
                Every component in our curated inventory is rigorously tested to
                ensure they are the best out there. If we don't find a component
                that meets our standards, we build it ourselves.
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-2 mb-md-0">
              <h5 className="text-light text-center">Come see how it work</h5>
              <p className="text-light mb-0">Jl Margaguna 1, Dki Jakarta</p>
              <p className="text-light mb-0">0-21-765-8536</p>
              <p className="text-light mb-0">12140</p>
              <p className="mb-0 fw-bold text-light">0-21-765-8536</p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light mb-0">Contact Me</h5>
              <ul className="list-unstyled">
                <li>
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "white" }}
                  />
                  <a
                    href="https://github.com/Skmnkn/"
                    target="_blank"
                    className="text-decoration-none"
                    rel="noreferrer"
                  >
                    Skmnkn
                  </a>
                </li>
                <li>
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "white" }}
                  />
                  <a
                    href="https://www.facebook.com/Kridw4/"
                    target="_blank"
                    className="text-decoration-none"
                    rel="noreferrer"
                  >
                    Rizky Nurfauzi
                  </a>
                </li>
                <li>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "white" }}
                  />
                  <a
                    href="https://twitter.com/KiminW4"
                    target="_blank"
                    className="text-decoration-none"
                    rel="noreferrer"
                  >
                    KiminW4
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3 text-light"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-light" href style={{ textDecoration: "none" }}>
            Rizky Nurfauzi
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};
