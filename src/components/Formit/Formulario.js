import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validate } from 'services/validations';

const Formulario = () => {
    const [formularioListo, setFormularioListo] = useState(false);
    const initial = {
        nombre: '',
        correo: ''
    }

    return (
        <>
            <Formik
                initialValues={initial}
                validate={({ nombre, correo }) => validate({ nombre, correo })}
                onSubmit={({ nombre, correo }, { resetForm }) => {
                    resetForm();
                    setFormularioListo(true);
                    setTimeout(() => setFormularioListo(false), 3000);
                }}
            >
                {
                    /* ({ handleSubmit, values, handleChange, handleBlur, errors, touched })*/
                    ({ errors, values }) => (
                        /*<form className="formulario" onSubmit={handleSubmit}>*/
                        <Form className="formulario">
                            <div>
                                <label htmlFor="nombre">Nombre</label>
                                {/*<input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />*/}
                                <Field
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                />
                                {/*touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>*/}
                                <ErrorMessage name="nombre" component={() => (
                                    <div className="error">{errors.nombre}</div>
                                )} />

                            </div>
                            <div>
                                <label htmlFor="correo">Correo</label>
                                <Field
                                    type="text"
                                    id="correo"
                                    name="correo"
                                    placeholder="correo@gmail.com"
                                />
                                <ErrorMessage name="correo" component={() => (
                                    <div className="error">{errors.correo}</div>
                                )} />

                            </div>
                            <div>
                                <Field name="pais" as="select">
                                    <option value="Perú">Perú</option>
                                    <option value="Suíza">Suíza</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="México">México</option>
                                </Field>
                               {/* <span>País: {values.pais} </span>*/}
                            </div>

                            <div>
                                <label>
                                    <Field type="radio" name="sexo" value="hombre" />Hombre

                                </label>
                                <label>
                                    <Field type="radio" name="sexo" value="mujer" />Mujer
                                </label>
                                <div>
                               {/* <span>Sexo: {values.sexo} </span>*/}
                                </div>
                            </div>
                            <div>
                                <Field name="mensaje" as="textarea" placeholder="Escribe tu mensaje"></Field>
                            </div>

                            <button type="submit">Enviar</button>

                            {formularioListo && (<p className="exito">Formulario enviado </p>)}
                        </Form>
                    )}

            </Formik>


        </>
    );
}

export default Formulario;