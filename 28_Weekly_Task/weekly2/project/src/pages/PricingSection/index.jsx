export const PricingSection = () => {
  return (
    <>
      <section id="pricing">
        <div className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4 text-light text fw-normal mt-5">
              Pricing
            </h1>
            <p className="lead text-light">
              Quickly build a PC for our customers with this Pricing Table. It’s
              built with default Bootstrap components and utilities with little
              customization.
            </p>
          </div>
          <div
            className="row row-cols-1 row-cols-md-3 mb-3 text-center"
            data-aos="fade-up"
          >
            <div className="col">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 fw-normal">Starter Series</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$699</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Intel Core i3-9100F 4-Core 3.6GHz</li>
                    <li>NVIDIA GeForce GTX™ 1650 Series</li>
                    <li>16GB at 2666 MHz</li>
                    <li>512GB M.2 SSD</li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg text-light"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 fw-normal">Streaming PC</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$1,699</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>AMD Ryzen 5 5600X 6-Core 3.7GHz</li>
                    <li>NVIDIA GeForce RTX™ 3070</li>
                    <li>Team T-FORCE Vulcan Z 3200MHz 16GB</li>
                    <li>M.2 SSD 1.0 TB</li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg text-light"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 fw-normal">Creator PC</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$3,499</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Intel Core i9-10900K 10-Core 3.7GHz</li>
                    <li>NVIDIA GeForce RTX™ 3090</li>
                    <li>Team T-FORCE Delta RGB 3000MHz 64GB</li>
                    <li>
                      Western Digital Black SN750 NVMe M.2 2280 SSD 1.0 TB
                    </li>
                    <li>Seagate Barracuda 4.0 TB</li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg text-light"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
