
import methodologie from "../Image/Méthodologi.png"
import selection from "../Image/selection.png"
import formation from "../Image/formation.png"
function Méthodologie(){
    return(
      <>
          <section className="mb-5">
              <div className="">
                  <div className="row my-5">
                    <div className="p-5 col-lg-6 col-sm-12">
                      <h1 className="" style={{fontSize: "50px",fontFamily:"-moz-initial"}}>Méthodologie </h1><br/><br/>
                        <p style={{fontSize:"25px"}}>  EST est un programme qui se
                          déroule en 4 phases, de la sélection 
                          au financement des porteurs de projets.
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-5">
                      <img src={methodologie} className="" style={{width: "80%"}}/>
                    </div>
                  </div>
                  <div className="row bg-success my-5">
                    <div className="p-5 col-lg-4 col-sm-12">
                      <img src={selection} alt="Fjords" className="img-responsive" style={{width: "100%"}}/>

                    </div>
                    <div className="p-5  col-lg-8 col-sm-12">
                      <h1 className="" style={{fontSize: "50px",fontFamily:"-moz-initial"}}>Sélection  </h1><br/><br/>
                      <p style={{fontSize:"25px"}}>
                      Durant cette phase, votre projet est 
                      examiné par des experts qui évaluent 
                      à la fois votre niveau <br/> d’engagement, 
                      votre degré de motivation ainsi que 
                      la faisabilité de votre projet et son 
                      potentiel <br/> de développement dans votre 
                      région.Les porteurs de projets répondant 
                      à ces exigences, <br/> suite à l’analyse de leur 
                      candidature, sont alors appelés pour 
                      passer un entretien avec un expert <br/> dans
                       leurs régions respectives.Les candidats 
                      retenus suite aux entretiens verront leurs
                       projets <br/> évalués lors d’une commission 
                      régionale et les heureux élus seront invités
                       à rejoindre <br/> le programme EST.

                      </p>
                    
                    </div>
                  </div>
                  <div className="">
                      <div className="row my-5">
                        <div className="p-5 col-lg-8 col-sm-12">
                          <h1 className="" style={{fontSize: "50px",fontFamily:"-moz-initial"}}>Formation  </h1><br/>
                          <p style={{fontSize:"25px"}}>
                          La formation représente une expérience unique
                          et enrichissante qui vous <br/> permet de développer 
                          vos connaissances en entrepreneuriat, et de <br/>
                          structurer votre projet.Les différentes sessions
                          de formation dédiées <br/> à l’ensemble des projets
                          retenus permettront au porteur du projet, <br/>
                          entre autres, de :
                          </p>
                          <ul style={{marginLeft:"120px",fontSize:"20px"}}>
                              <li>Développer ses soft skills et son potentiel d’entrepreneur.</li>
                              <li>Connaître son marché et sa clientèle.</li>
                              <li>Design de solution et Développement de produits et services</li>
                              <li>Développer des partenariats.</li>
                              <li>Lancer l’activité et accroître le chiffre d’affaires.</li>
                              <li>Connaître les bases du Marketing Digital.</li>
                              <li>Choisir sa forme juridique.</li>
                              <li>Structurer ses coûts et ses revenus.</li>
                              <li>Etablir son plan de financement.</li>
                              <li>Présenter et pitcher son projet.</li>
                            </ul>  
                          
                         
                        </div>
                        <div className="mt-5 col-lg-4 col-sm-12 p-5">
                          <img src={formation} className=" pb-1 " style={{width: "90%"}}/>
                        </div>
                      </div>
                </div>
              </div>
          </section>
        </>
  )
}

export default Méthodologie