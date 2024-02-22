import React, { useState } from 'react';

const Form = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div className="card">
            <form>
                {!isRegistered && (
                    <div className="form-group d-flex justify-content-center">
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                )}
                <div className="form-group d-flex justify-content-center">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className="change-form d-flex justify-content-center" onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? 'Not registered? Click here!' : 'Already registered? Click here!'}
                </div>
                <button type="submit">{isRegistered ? 'Iniciar sesión' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default Form;
