import f1 from "../Image/f1.png" 
import f2 from "../Image/f2.png" 
function Programme () {
    return(
<section className="">
      <div className="" >
     
        <div className="row my-5 p-5">
          <div className="col-lg-8 col-sm-12" >
            <h1 className="" style={{fontSize: "50px",fontFamily:"-moz-initial"}}>L’offre <br/> d’accompagnement et<br/> de financement : </h1><br/><br/>
             <p style={{fontSize:"25px",maxWidth:"850px"}}>Le programme cible l’accompagnement et le financement de 10.000<br/>
            porteurs de projets en 2023 incluant l’ensemble des secteurs de
            l’économie, en respectant les principes d’équité régionale et de genre.
            Le financement consiste en un prêt d’honneur (0% d’intérêt),
            qui pourra aller jusqu’à 100.000 DH, dont 10.000 DH en subvention.
            La durée maximale de remboursement du prêt est
            de 10 ans avec un différé de 2 ans.</p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img src={f1} className=" pb-1  mt-5 " style={{width: "100%"}}/>
    
          </div>
        </div>
        <div className="row bg-success mt-5 p-5">
          <div className="col-lg-8 col-sm-12">
            <h1 className="" style={{fontSize: "50px",fontFamily:"-moz-initial"}}>Les Conditions<br/> d’Eligibilité  </h1><br/><br/>
            <p style={{fontSize:"25px", maxWidth:"850px"}}>
            Le programme EST est un programme ambitieux
            et novateurqui s’adresse à tous les résidents au
            Maroc et MRE de 18 ans et plus, qu’ils soient
            porteurs d’idées ou de projets d’entrepreneuriat,
            auto-entrepreneurs, ou fondateurs d’entreprise
            ayant moins de 3 ans et n’ayant pas bénéficié du
            financement dans le cadre de la 1ère
            édition.

            </p>
          
          </div>
          <div className="col-lg-4 col-sm-12">
            <img src={f2} alt="Fjords" className="img-responsive" style={{width: "100%"}}/>
          </div>
        </div>
      </div>
  </section>
    )
}
export default Programme