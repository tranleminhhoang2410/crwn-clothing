import { useState } from 'react';

import './sign-up-form.styles.scss'

import FormInput from '../../components/form-input/form-input.component'
import Button from '../../components/button/button.component'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) return;
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user);
            resetFormFields();
        } catch (error) {
            console.log('user create error', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />
                <FormInput
                    label='Email'
                    type="email"
                    required
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label='Password'
                    type="password"
                    required
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;