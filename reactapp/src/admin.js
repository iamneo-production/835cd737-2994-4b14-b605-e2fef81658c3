import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const Admin = () => {  
    
  return(
    <div>
        <div>
        <Navbar style={{ backgroundColor:'blue'}} bg="blue" expand="lg">
        <Container>
          <h2>GlowSpark</h2>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
     
              </Nav>
            <Nav style={{float:"right"}}>
       <Nav.Link  style={{fontSize:"20px",color:"black"}}>Home</Nav.Link>
                  <Nav.Link  style={{fontSize:"20px",color:"black"}}>Prescription</Nav.Link>
<Nav.Link  style={{fontSize:"20px",color:"black"}}>Report</Nav.Link>
<Nav.Link  style={{fontSize:"20px",color:"black"}}>Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <div style={{width:"70%",float:"left",marginTop:"30px"}}>
                    <thead>
                        <tr style={{border:"2px solid black",borderTop:"0px",borderLeft:"0px",borderRight:"0px"}}>
                        <th style={{textAlign:"center"}}>ABC<br>8 Years</br><br>ABC SPA</br></th>
                        <th style={{textAlign:"center"}}>XYZ<br>3 Years</br><br>XYZ SPA</br></th>
                        <th style={{textAlign:"center"}}>DEF<br>5 Years</br><br>DEF SPA</br></th>
                        <th style={{textAlign:"center"}}>UVW<br>8 Years</br><br>UVW SPA</br></th>
                        </tr>
<br>
<th style={{textAlign:"center"}}>GHI<br>2 Years</br><br>CSI SPA</br></th>
<th style={{textAlign:"center"}}>OPQ<br>4 Years</br><br>OPQ SPA</br></th>
</br>
                    </thead>   
         </div>  
    </div>       
  )
};


export default Admin;