import faq_i from "../Image/FAQ.png"
import "../Stayle/faq.css"
function FAQ() {
  return (
    <section className=" faq" onLoad={myFunc}>
      <div className="">
        <div className="row my-1 ">
          <div className="col-lg-6 col-sm-12 text-center ">
            <img src={faq_i} className=" pb-1 " style={{ width: "80%"}}/>
          </div>
          <div className="pt-5 col-lg-6 col-sm-12">
            <h1 className=" pt-5 display-1 mt-5 mx-auto " style={{fontFamily:"-moz-initial",fontSize:"120px"}}>FAQ</h1>
          </div>
        </div>
        <button className="accordion bg-success">1. A qui le programme est destiné ?</button>
        <div className="panel">
          <p>Le programme EST s'adresse à tous les résidents au Maroc et MRE de 18 ans et plus, qu'ils soient porteurs
            d'idées
            ou de projets d'entrepreneuriat, auto-entrepreneurs, ou fondateurs d'entreprise ayant moins de 3 ans.Les
            porteurs
            de projets peuvent ne pas avoir une structure / un statut ou être des autoentrepreneurs, des coopératives, des
            très
            petites entreprises (TPE) ou des jeunes entreprises innovantes/startups nouvelles ou en activité depuis moins
            de 3 ans.</p>
        </div>

        <button className="accordion bg-success">2. Quels sont les secteurs concernés ?</button>
        <div className="panel">
          <p>Tous les secteurs d’activité sont éligibles notamment le tourisme, l’artisanat, l’industrie, le numérique, le commerce et l’e-commerce, l’agriculture, la pêche, la culture, le sport, le digital, l’innovation, etc.</p>
        </div>

        <button className="accordion bg-success">3. Quels sont les critères de sélection ?</button>
        <div className="panel">
          <p>Votre projet sera examiné par des experts en fonction de votre motivation, votre engagement ainsi que la viabilité et la faisabilité de votre projet quel que soit votre sexe, votre niveau d’étude, votre situation professionnelle ou votre ville.</p>
        </div>

        <button className="accordion bg-success">4. Quels types de projet ?</button>
        <div className="panel">
          <p>Tous les types de projets sont éligibles, quel que soit leur secteur ou leur stade d’avancement.
             Exemples :<br/><br/>
             ✔ Personne ayant une idée de projet (sans statut juridique)<br/>
             ✔ Personne travaillant dans l’informel souhaitant formaliser son activité<br/>
             ✔ Personne ayant un savoir-faire (artisanal, technique, culturel…) souhaitant créer sa propre entreprise<br/>
             ✔ Projet porté par plusieurs membres (5 au maximum)<br/>
             ✔ Auto-entrepreneur<br/>
             ✔ Très petite entreprise<br/>
             ✔ Micro-entreprise<br/>
             ✔ Coopérative<br/>
             ✔ SARL<br/>
             ✔ Etc.</p>
        </div>

        <button className="accordion bg-success">5. Quelles sont les régions concernées par le programme EST?</button>
        <div className="panel">
          <p>Le programme EST couvre les 12 régions du Royaume, et s’appuie sur un suivi régional rapproché. Des Desks EST seront ouverts dans l’ensemble des régions.</p>
        </div>
      </div>
    </section>
  )
}
function myFunc (){
  var acc = document.getElementsByClassName("accordion bg-success");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
}
export default FAQ


