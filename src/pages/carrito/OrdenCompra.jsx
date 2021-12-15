import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import OrdenCompraProducto from "../../components/carrito/OrdenCompraProducto";

const SignupSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  apellido: Yup.string().required("Requerido"),
  provincia: Yup.string().required("Requerido"),
  ciudad: Yup.string().required("Requerido"),
  direccion: Yup.string().required("Requerido"),
  telefono: Yup.number().required("Requerido"),
});

const OrdenCompra = () => {
  
  const {products, total} = useSelector(state => state.cart);
  const navigate = useNavigate();

  
  
    return (
    <div className="login__main">
      <nav className="navbarSimple__main">
        <h1>
          <Link to="/">-Dignity-</Link>
        </h1>
      </nav>
      <ul className="order__steps">
        <li className="active">
          <div className="order__steps_number">
            <span>1</span>
            <p>Elige los productos</p>
          </div>
        </li>
        <li className="active">
          <div className="order__steps_number">
            <span>2</span>
            <p>Completa tus datos</p>
          </div>
        </li>
        <li className="">
          <div className="order__steps_number">
            <span>3</span>
            <p>Confirma tu compra</p>
          </div>
        </li>
      </ul>
      <div className="order__container">
        <div className="order__form">
          <h2>Completa los datos de envio</h2>

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              provincia: "",
              ciudad: "",
              direccion: "",
              telefono: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              //const { email, password } = values;
              //dispatch(starLogin(values));
              //login( dispatch, {email, password} );

              //resetForm();
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="text" name="nombre" placeholder="Nombre" />
                <ErrorMessage
                  name="nombre"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="apellido" placeholder="Apellido" />

                <ErrorMessage
                  name="apellido"
                  component="p"
                  className="login__error"
                />

                <Field type="number" name="telefono" placeholder="Telefono" />
                <ErrorMessage
                  name="telefono"
                  component="p"
                  className="login__error"
                />
                <Field type="text" name="direccion" placeholder="Direccion" />
                <ErrorMessage
                  name="direccion"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="provincia" placeholder="Provincia" />

                <ErrorMessage
                  name="provincia"
                  component="p"
                  className="login__error"
                />

                <Field type="text" name="ciudad" placeholder="Ciudad" />

                <ErrorMessage
                  name="ciudad"
                  component="p"
                  className="login__error"
                />

                <button type="submit" disabled={isSubmitting}>
                  Siguiente
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="order__detalle">
          <h3>Resumen de compra</h3>
          {
              products.map(item => (
                <OrdenCompraProducto key={item.product_cart_id} item={item} />
              ))
          }
          
          
          
         
          <div className="order__total">
            <h4>Total</h4>
            <h4>${total}</h4>
          </div>

          <button 
          className="order__seguir_comprando"
          onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i> Volver al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdenCompra;
