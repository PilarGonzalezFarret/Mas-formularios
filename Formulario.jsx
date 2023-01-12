import React from "react";
import { useState } from "react";

const Formulario = (props) => {
    const {input, setInput} = props;


    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        
    };
    return(
        <form>
            <div className="form-group">
                <label htmlFor='firstName'>First Name</label>
                <input minLength={2} onChange={onChange} type="text" name='firstName'/>
                <p>First Name must be at least 2 characters</p>
            </div>
            <div className="form-group">
                <label htmlFor='lastName'>Last Name</label>
                <input minLength={2} onChange={onChange} type="text" name='lastName' />
                <p>Last Name must be at least 2 characters</p>
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email</label>
                <input minLength={5} onChange={onChange} type="text" name='email' />
                <p>Email must be at least 5 characters</p>
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input minLength={8} onChange={onChange} type="password" name='password' />
                <p>Password must be at least 8 characters</p>
            </div>
            <div className="form-group">
                <p>Password must match</p>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input onChange={onChange} type="password" name='confirmPassword' />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;