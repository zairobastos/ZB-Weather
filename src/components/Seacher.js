import React from 'react';
import '../styles/seacher.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSeacher = Yup.object().shape({
    seacher: Yup.string()
    .min(3,"Minímo 3 caracteres")
    .required("Campo Obrigatório")
})

export default function Seacher() {
    const formik = useFormik({
        validationSchema: validationSeacher,
        validateOnChange: false,
        initialValues:{
            seacher:'',
        },
        onSubmit: (value) =>{
            console.log(value);
        }
    })
    return (
    <form onSubmit={formik.handleSubmit}>
        <div className="pesquisar">
            <input
                type="text"
                name="seacher"
                id="seacher"
                className=""
                placeholder="Busque por uma cidade..."
                onChange={formik.handleChange}
                values={formik.values.seacher}
            />
            <button type="submit">Pesquisar</button>
            {formik.errors.seacher ? <div className="error">{formik.errors.seacher}</div>: null}
        </div>
    </form>
    );
}