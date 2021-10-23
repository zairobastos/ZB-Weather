import React from 'react';
import '../styles/seacher.scss'

export default function Seacher() {
    return (
    <>
        <div className="pesquisar">
            <input
                type="text"
                className=""
                placeholder="Busque por uma cidade..."
            />
            <button type="submit">Pesquisar</button>
        </div>
    </>
    );
}