import React, { useState } from "react";



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api", {
            method: "POST",
            body: email,
        });
    }
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" name="email" value={email} onChange={(e) = setEmail(e.target.value)} />
                    <button type="submit">Submit</button>
                </div>
<div className="form-group">
                    <input type="password" name="password" value={password} onChange={(e) = setPassword(e.target.value)} />
                </div>
            </form>
        </div>
    );
}
}
export default LoginForm;
