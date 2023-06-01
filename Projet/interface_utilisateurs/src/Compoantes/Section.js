import React from "react";
import {Routes, Route } from "react-router-dom"; 
import Programme from "./Programme"
import Contact from "./Contact"
import Methodologie from "./Methodologie"
import FAQ from "./FAQ"
import Partenaires from "./Partenaires";
import Participez from "./Participez ";

function Section() {
    return(
        <Routes>
            <Route path="/" element={<Programme/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/methodologie" element={<Methodologie/>}></Route>
            <Route path="/faq" element={<FAQ/>}></Route>
            <Route path="/partenaires" element={<Partenaires/>}></Route> 
            <Route path="/participez" element={<Participez/>}></Route> 
        </Routes>
    )
}
export default Section