import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div>
            <div className="containerN container">
                <div className="logo">
                    DigiMed<span>ia</span>
                </div>
                <ul className="list">
                    <li>
                        <a
                            href="#"
                            className={menu === "home" ? "active" : ""}
                            onClick={() => setMenu("home")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={menu === "about" ? "active" : ""}
                            onClick={() => setMenu("about")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={menu === "services" ? "active" : ""}
                            onClick={() => setMenu("services")}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={menu === "projects" ? "active" : ""}
                            onClick={() => setMenu("projects")}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={menu === "blog" ? "active" : ""}
                            onClick={() => setMenu("blog")}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={menu === "contact" ? "active" : ""}
                            onClick={() => setMenu("contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
