import {
  Apex,
  Bf5,
  Codm,
  Csgo,
  Fort,
  Gta,
  Mc,
  Mfw,
  Pubg,
  Rdr,
  Valo,
  W3,
} from "../../assets/games";

export const GamesSection = () => {
  return (
    <>
      <section id="game">
        <div className="container" data-aos="fade-up">
          <h2 className="text-light">WHAT DO YOU PLAN TO PLAY?</h2>
          <div className="row pb-4">
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Apex}
                  className="img-fluid w-75 rounded-1"
                  alt="apex"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img src={Bf5} className="img-fluid w-75 rounded-1" alt="bf5" />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Codm}
                  className="img-fluid w-75 rounded-1"
                  alt="codm"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Csgo}
                  className="img-fluid w-75 rounded-1"
                  alt="csgo"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Fort}
                  className="img-fluid w-75 rounded-1"
                  alt="fort"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img src={Gta} className="img-fluid w-75 rounded-1" alt="gta" />
              </a>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-2">
              <a href="#pricing">
                <img src={Mc} className="img-fluid w-75 rounded-1" alt="mc" />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img src={Mfw} className="img-fluid w-75 rounded-1" alt="mfw" />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Pubg}
                  className="img-fluid w-75 rounded-1"
                  alt="pubg"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img src={Rdr} className="img-fluid w-75 rounded-1" alt="rdr" />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img
                  src={Valo}
                  className="img-fluid w-75 rounded-1"
                  alt="valo"
                />
              </a>
            </div>
            <div className="col-2">
              <a href="#pricing">
                <img src={W3} className="img-fluid w-75 rounded-1" alt="w3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
