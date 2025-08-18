import React from 'react'

const s ={
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const s2 = {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    boxShadow:"1px 1px 5px grey",
    borderRadius: "5px",
    padding: "20px 40px"
}

const Contact = () => {
  return (
    <div style={s}>
        <div style = {s2}>
        <h2>Contact Us</h2>
        <ul style={{listStyleType: "none", padding: " 10px"}}>
            <li style={{paddingTop: "5px"}}>Farmersmarket@help.co</li>
            <li style={{paddingTop: "5px"}}>(123) 456 789 </li>
        </ul>
    </div>
    </div>
    
  )
}

export default Contact