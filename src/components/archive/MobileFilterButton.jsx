

import { useState } from "react";
import MobileFilterPopup from "./MobileFilterPopup";

import { Link, Navigate, useNavigate } from "react-router-dom";

function MobileFilterButton ({setSearchParams}) {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [filter, setFilter] = useState('');
  

  
 



    return(
        <>
        <section >
          <h3 >Filter Articles</h3>
        <button  onClick={()=>{setButtonPopup(true);setFilter('date')}}>Date</button>
          <button  onClick={()=>{setButtonPopup(true);setFilter('comment')}}>Comments</button>
          <button  onClick={()=>{setButtonPopup(true);setFilter('vote')}}>Votes</button>
               <MobileFilterPopup trigger={buttonPopup} setTrigger={setButtonPopup} filter={filter} setSearchParams={setSearchParams}>
            <p>My Popup</p>
          </MobileFilterPopup>
        </section>
         
        </>
      
     
        
    )

}

export default MobileFilterButton