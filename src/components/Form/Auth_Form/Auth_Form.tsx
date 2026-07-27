import React from 'react';
import SignInForm from './Signin_Form'
import SignUpForm from './Singup_Form'

interface AuthFormProps {
    type: 'signin' | 'signup'
}

const AuthForm = ({type}: Required<AuthFormProps>) => {
    return (
        <div>
            {type === 'signin' && <SignInForm />}
            {type === 'signup' && <SignUpForm />}
        </div>
    );
};

export default AuthForm;