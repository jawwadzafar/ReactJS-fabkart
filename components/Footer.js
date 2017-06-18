import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="https://twitter.com/thejawwad" target="_blank">Say Hi on Twitter</a>
                <span>  /  </span>
                <a href="https://github.com/jawwadzafar/fabcart" target="_blank">View Source on Github</a>
            </p>
            <p>&copy; 2017 <strong>FabKart</strong> - The Fabulous Store</p>
        </footer>
    )
};

export default Footer;
