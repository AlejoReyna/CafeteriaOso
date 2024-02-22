import React from 'react';
import './styles/Homepage.css';
import { Link } from 'react-router-dom';
import Form from './scripts/Form';
import Bear from './images/bearsito.png';

const Homepage = () => {
    return (
        <body>
            <main>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-6 left-side">
                    <img className="img-fluid bear " src={ Bear } alt="Bear"/>
                    </div>

                    <div className="col-6 right-side">
                        <div className="text">
                            <h2> From FIME, to all the UANL. </h2>
                            <h5> La cafetería del oso offers you exquisit dishes, at a nice cost.</h5>
                        </div>
                            
                        <Form/>
                    </div>
                
                </div>
                </div>
            </main>
        </body>
    );
};

export default Homepage;