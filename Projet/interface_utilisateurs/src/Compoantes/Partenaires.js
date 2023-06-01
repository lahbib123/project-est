import React from "react"
import youcan from "../Image/youcan.png"
import ads from "../Image/ads.png"
import cod from "../Image/cod.jpg"
import Partenaires_ from "../Image/Partenaires.png"
function Partenaires() {
  return (
    <section className="mb-5">
      <div className="">
        <div className="row my-5">
          <div className="col-lg-6 col-sm-12 my-5">
            <img src={Partenaires_} className=" pb-1 " style={{ width: "80%"}} />
          </div>
          <div className="pt-5 col-lg-6 col-sm-12 pe-0">
            <h1 className="" style={{ fontSize: "50px",  fontFamily: "-moz-initial" }}><strong>Partenaires</strong></h1><br />
            <p style={{ fontSize: "25px" }}>
              EST  s’appuie sur la mobilisation des partenaires au niveau <br /> des régions
              notamment les Centres Régionaux <br /> d’Investissement (CRI), les institutions
              de financement, <br /> et les incubateurs locaux.

            </p>
          </div>
        </div>
        <div className="row text-center m-auto">
          <div className="p-5 col ">
            <div className="card text-center m-auto" style={{ maxWidth: "18rem" }}>
              <img className="card-img-top" src={youcan} alt="Card image cap" />
              <div className="card-body">
                <div className="text-center">
                  <a href="https://youcan.shop/en" type="button" className="btn btn-success"><strong>Découvrez</strong></a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 col">
            <div className="card text-center m-auto" style={{ maxWidth: "18rem" }}>
              <img className="card-img-top" src={ads} alt="Card image cap" />
              <div className="card-body">
                <div className="text-center">
                  <a href="https://adz.ma/" type="button" className="btn btn-success"><strong>Découvrez</strong></a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 col">
            <div className="card text-center m-auto" style={{ maxWidth: "18rem" }}>
              <img className="card-img-top" src={cod} alt="Card image cap" />
              <div className="card-body">
                <div className="text-center">
                  <a href="https://cod.network/" type="button" className="btn btn-success"><strong>Découvrez</strong></a>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
export default Partenaires