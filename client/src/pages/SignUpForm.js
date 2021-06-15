import React from "react";


const SignUpForm = () => {
	return (
		<div className="sign-up-form">
			<h1>Sign Up Here</h1>
			<form>
				<h1> Welcome to CYF Knowledge Checklist</h1>
				<p>
          This checklist aims to help students check their progress and allows
          mentors to track students overall progress.
				</p>
				<button>Sign up</button>
				<input type="full name" className="input-box" placeholder="Full Name" />

				<input type="email" className="input-box" placeholder="Your Email" />
			</form>
		</div>
	);
};
export default SignUpForm;