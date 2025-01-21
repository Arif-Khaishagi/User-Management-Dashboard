import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>This User Management Dashboard developed by <span style={{color:'Highlight'}}>Arif Khan Khaishagi</span> for <span style={{color:'lightblue'}}>AJACKUS</span> Assignment</p>
        {/* <p> </p> */}
        <div>
          <a href="https://www.linkedin.com/in/arif-khaishagi/" target='blank' className="linkStyle">LinkedIn</a> | 
          <a href="https://github.com/Arif-Khaishagi" target='blank' className="linkStyle">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
