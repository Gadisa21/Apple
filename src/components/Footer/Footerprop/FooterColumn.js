import React, { useEffect, useState } from 'react'

import FooterLink from "./FooterLink";


function FooterColumn({ title, links } ) {
 
  const [show,setShow]=useState(true)

  const toggleLink=()=>{
    setShow(!show)
  }

  useEffect(()=>{
   const handleResize=()=>{

    if(window.innerWidth>769){
      setShow(true)
    }
    if(window.innerWidth<769){
      setShow(true)
    }
   }
   window.addEventListener("resize",handleResize)

   return ()=>{
    window.removeEventListener("resize",handleResize)
   }
    }
    
    
    ,[])
    return (
      <div className="col-sm-12 col-md" onClick={toggleLink}>
        {title.map((title, index) => (
          <div key={index}>
            <h3>{title}</h3>
            <ul className={`${show ? "show" : ""}`}>
              {links[index].map((link, linkIndex) => (
                <FooterLink
                  key={linkIndex}
                  url={link.url}
                  urlname={link.urlname}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
}

export default FooterColumn







