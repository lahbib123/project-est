import React, { useEffect } from "react";
import contact_ from "../Image/Contact.png"
function Contact(){
  useEffect(() => {
    if (window.location.href.includes('add=success')) {
      alert("Done")
    }
  })
    return(  
        <section className="">
          <div className=" py-5 h-100 m-auto">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center" >
                <img src={contact_}
                  className="img-fluid" alt="Phone image" style={{width:"80%"}}/>
              </div>
              <div className="col ">
                <form action="http://localhost/est/php/add_msg.php" class="mx-5 ">
                  
                  <div className="form-outline mb-4">
                  <h1 className="mt-4"  style={{fontSize: "50px",fontFamily:"-moz-initial"}}><strong>Contactez-nous</strong></h1><br/><br/><br/>
                  <label className="form-label text-start" for="form1Example13" style={{fontSize:"20px"}}>Nom et Prénom</label>
                    <input name="full_name" type="text" id="form1Example13" placeholder="Entrez votre nom complet" className="form-control form-control-lg" required/>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label text-start" for="form1Example23" style={{fontSize:"20px"}}>E-mail</label>
                    <input name="email" type="email" id="form1Example23" placeholder="Entrer votre Email" className="form-control form-control-lg" required />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label text-start" for="form1Example23" style={{fontSize:"20px"}}>Message</label>
                    <textarea name="msg" rows="5" class=" message-area" placeholder="Entrez votre message" className="form-control form-control-lg" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-success btn-lg btn-block">Envoyer Message</button>
                </form>
              </div>
            </div>
          </div>
      </section>

  )
}
export default Contact