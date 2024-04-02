import React, { useEffect, useState } from 'react';

const ListCategory = ({ data }) => {


    return (
        <div>
            <h1>List of Categories</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(category => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListCategory;