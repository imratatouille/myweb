import React from "react";
import logo from "./doge.jpeg";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className='container'>
            <header>
                <p>타이틀</p>
                <div>
                    <ul>
                        <li>
                            <a href='#'>메뉴1</a>
                        </li>
                        <li>
                            <a href='#'>메뉴2</a>
                        </li>
                        <li>
                            <a href='#'>메뉴3</a>
                        </li>
                    </ul>
                </div>
            </header>
            <section id='st1'>
                <p>아름다운 바다</p>
                <img src={logo} />
            </section>
            <section id='st2'></section>
            <section id='st3'></section>
        </div>
    );
};

export default App;
