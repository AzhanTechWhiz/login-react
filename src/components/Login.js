import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        email: Yup.string().email('Invalid Email!').required('Email is required!'),
        password: Yup.string().required('Password is required!'),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div>
            <div className="container">
                <div className="form-box">
                    <h1>Membership Login:</h1>
                    <div className="input-group">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="field">
                                        <Field type="text" name="username" placeholder="Username:" />
                                        <ErrorMessage name="username" component="div" className="error" />
                                    </div>
                                    <div className="field">
                                        <Field type="email" placeholder="Email:" name="email" />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                    <div className="field">
                                        <Field type="password" placeholder="Password:" name="password" />
                                        <ErrorMessage name="password" component="div" className="error" />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}>SUBMIT</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
