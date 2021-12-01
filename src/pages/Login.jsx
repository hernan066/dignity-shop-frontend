import React  from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import { starLogin } from "../actions/auth";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Requerido"),
  password: Yup.string()
    .min(6, "6 caracteres minimo")

    .required("Requerido"),
});

export const Login = () => {
  
  
  const dispatch = useDispatch();
  
  
  return (
    <div className="login__main">
      <nav className="navbarSimple__main">
        <h1>
          <Link to="/">-Dignity-</Link>
        </h1>
        
      </nav>
      <div className="login__container">
        <div className="login__form">
          <h2>Login</h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              
              const { email, password } = values;
              dispatch(starLogin(email, password));

              resetForm();
              
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                />
                
                <ErrorMessage name="email" component="p" className="login__error"/>
                
                <Field
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                />
                <ErrorMessage name="password" component="p" className="login__error" />

                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
          <div className="login__register">
            <p>No tienes cuenta?</p> <Link to="/register">Registrate</Link>
          </div>
         
          
          
        </div>
      </div>
    </div>
  );
};
