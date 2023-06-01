import React, { useEffect } from "react";
import "../Stayle/participez.css"
function Participez() {
  useEffect(() => {
    if (window.location.href.includes('add=success')) {
      //document.getElementById('alert_d').style.display = "block"
      alert('Done')
    }
  })
  return (
    <section className="mb-5 div-participez">
      <div className="container">
        <div className="">
          <h1 className=" text-center" style={{ fontFamily: "-moz-initial", fontSize: "60px" }}>Participez : </h1><br />
          <p className="text-center" style={{ fontSize: "20px" }} >Bienvenue dans notre espace d’inscription au programme EST.</p>
        </div>
        <div className="my-5">
          <h3 className="fs-3 text-center text-success" style={{ fontSize: "30px" }}>Etape 1 : </h3>
          <p className="text-center" style={{ fontSize: "20px" }}>Nous vous invitons à compléter le questionnaire ci-dessous..</p>
        </div>
        <div className="my-5">
          <h3 className="fs-3 text-center text-success" style={{ fontSize: "30px" }}>Etape 2 : </h3>
          <p className="text-center" style={{ fontSize: "20px" }}>Si vous êtes présélectionnés, vous serez contactés par notre
            équipe pour un entretien avec un expert afin d'approfondir votre candidature.</p>
        </div>
        <div className="my-5">
          <h3 className="fs-3 text-center text-success" style={{ fontSize: "30px" }}>Etape 3 : </h3>
          <p className="text-center" >Si votre candidature est retenue, vous serez contactés pour
            confirmer votre participation au programme et débuter votre formation.</p>
        </div>
        <header className="text-success">Profil</header>
        <form action="http://localhost/est/php/add_demand.php" className="form">
          <div className="input-box">
            <label className="d-block text-start">Nom et Prénom</label>
            <input name="full_name" type="text" placeholder="Le chef désigne pour le projet Nom est prénom" required />
          </div>

          <div className="input-box">
            <label>Identifiant</label>
            <input name="dentifiant" type="text" placeholder="Numéro de carte d'identité" required />
          </div>

          <div className="input-box">
            <label>Email</label>
            <input name="email" type="email" placeholder="Entrer votre Email" required />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Numéro de téléphone</label>
              <input name="tel" type="tel" placeholder="Entrez le numéro de téléphone" required />
            </div>
            <div className="input-box">
              <label>Date de naissance</label>
              <input name="date_of_birth" type="date" placeholder="Enter birth date" required />
            </div>
          </div>
          <div className="gender-box">
            <h3>Genre</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" value="homme" defaultChecked />
                <label htmlFor="check-male">homme</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" value="femme" />
                <label htmlFor="check-female">Femme</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" value={null} />
                <label htmlFor="check-other">Je préfère ne pas le dire</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Adresse</label>
            <input name="adresse1" type="text" placeholder="Entrez l'adresse de la rue" required />
            <input name="adresse2" type="text" placeholder="Entrez la ligne d'adresse 2" required />
            <div className="column">

              <div className="select-box">
                <select name="lieu">
                  <option value="0" hidden>Lieu de résidence</option>
                  <option value="Guelmim">Guelmim</option>
                  <option value="Ahfir">Ahfir</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Ait baha">Ait baha</option>
                  <option value="Al hoceima">Al hoceima</option>
                  <option value="Arfoud">Arfoud</option>
                  <option value="Azemmour">Azemmour</option>
                  <option value="Azilal">Azilal</option>
                  <option value="Azrou">Azrou</option>
                  <option value="Beni mellal">Beni mellal</option>
                  <option value="Benslimane">Benslimane</option>
                  <option value="Berkane">Berkane</option>
                  <option value="Berrechid">Berrechid</option>
                  <option value="Bouizakarne">Bouizakarne</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Chefchaouen">Chefchaouen</option>
                  <option value="Dakhla">Dakhla</option>
                  <option value="El hajeb">El hajeb</option>
                  <option value="El jadida">El jadida</option>
                  <option value="Fes">Fes</option>
                  <option value="Kenitra">Kenitra</option>
                  <option value="khenifra">khenifra</option>
                  <option value="laayoune">laayoune</option>
                  <option value="Tanger">Tanger</option>
                  <option value="Tan Tan">Tan Tan</option>
                </select>
              </div>
              <div className="select-box">
                <select name="experience">
                  <option value="0" hidden>Expérience professionnelle</option>
                  <option value="Sans" >Sans</option>
                  <option value="Inférieur á 1 ans">Inférieur á 1 ans</option>
                  <option value="Entre 1 et 3 ans">Entre 1 et 3 ans</option>
                  <option value="Entre 3 et 5 ans">Entre 3 et 5 ans</option>
                  <option value="Supérieure á 5 ans">Supérieure á 5 ans</option>
                </select>
              </div>
            </div>
            <div className="column">
              <div className="select-box">
                <select name="communication">
                  <option value="0" hidden>Canal de communication privilégié</option>
                  <option value="Appel téléphonique">Appel téléphonique</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div className="select-box">
                <select name="situation">
                  <option value="0" hidden>Situation professionnelle actuelle</option>
                  <option value="Etudiant">Etudiant</option>
                  <option value="En poste">En poste</option>
                  <option value="En recherche d\'emploi">En recherche d'emploi</option>
                  <option value="Inactif">Inactif</option>
                  <option value="Retraité">Retraité</option>
                </select>
              </div>
            </div>
          </div>

          <br /><br />
          <header className="text-success">DÉTAIL DU PROJET</header>

          <div className="column">
            <div className="input-box2">

              <input name="intitule" type="text" placeholder="intitulé du projet" required />
            </div>
            <div className="input-box3">
              <textarea name="description" className="textarea" placeholder="Descriptif du projet
                                  - L'idée de votre projet
                                  - La clientèle cible
                                  - Pourquoi voulez-vous lancer ce projet
                                  - Avez-vous des données chiffrées ? (exemple Chiffre d'Affaires mensuel á date.nombre de clients à date)" cols="37" rows="9"></textarea>

            </div>

          </div>

          <div className="column">
            <div className="input-box">

              <input name="lien" type="text" placeholder="Lien Youtube / Drive / Wetransfer" required />
            </div>
            <div className="input-box">

              <div className="select-box">
                <select name="typologie">
                  <option value="0" hidden>Typologie de structure</option>
                  <option value="Auto-entrepreneur">Auto-entrepreneur</option>
                  <option value="Entreprise">Entreprise</option>
                  <option value="Coopérative">Coopérative</option>
                  <option value="Aucune">Aucune</option>
                </select>
              </div>
            </div>
          </div><br />

          <div className="column">

            <div className="select-box">
              <select name="projet_cree">
                <option value="0" hidden>Projet déjà créé</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
            <div className="select-box">
              <select name="region">
                <option value="0" hidden>Région</option>
                <option value="Guelmim-Oued Noun">Guelmim-Oued Noun</option>
                <option value="Tanger-Tetouan-Al Hoceima">Tanger-Tetouan-Al Hoceima</option>
                <option value="Fès-Meknès">Fès-Meknès</option>
                <option value="Rabat-Salé-Kénitra">Rabat-Salé-Kénitra</option>
                <option value="Casablanca-Settat">Casablanca-Settat</option>
                <option value="Béni Mellal-khénifra">Béni Mellal-khénifra</option>
                <option value="Marrakech-Safi">Marrakech-Safi</option>
                <option value="Souss-Massa">Souss-Massa</option>
                <option value="Laayoune-Sakia El Hamra">Laayoune-Sakia El Hamra</option>
                <option value="Eddakhla-Oued Eddahab">Eddakhla-Oued Eddahab</option>
              </select>
            </div>
          </div><br />
          <div className="column">
            <div className="select-box">
              <select name="secteur">
                <option value="0" hidden>Secteur d'activité</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Art et culture">Art et culture</option>
                <option value="Artisanat">Artisanat</option>
                <option value="Automobile">Automobile</option>
                <option value="Autres">Autres</option>
                <option value="Beauté">Beauté</option>
                <option value="Chimie">Chimie</option>
                <option value="Développement durable">Développement durable</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Education">Education</option>
                <option value="Electricité / Electronique">Electricité / Electronique</option>
                <option value="Energie">Energie</option>
                <option value="Immobilier">Immobilier</option>
                <option value="Logistique">Logistique</option>
              </select>
            </div>
            <div className="select-box">
              <select name="beneficie">
                <option value="0" hidden>Avez-vous déjà bénéficié d'un programme d'accompagnement</option>
                <option value="Avez-vous déjà bénéficié d\'un programme d\'accompagnement">Avez-vous déjà bénéficié d'un programme d'accompagnement</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
          </div>
          
          <button>Valider</button>
        </form>
      </div>
      <div class="alert alert-success fs-2 alert-dismissible w-100 p-4" id="alert_d" style={{ display: "none", position: "fixed", top: 0, left: 0, }}><button type="button" class="btn-close" data-bs-dismiss="alert"></button><strong>Mission success</strong> ok ok ok ok ....</div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </section>
  )
}
export default Participez 