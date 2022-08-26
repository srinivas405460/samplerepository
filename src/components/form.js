import React from 'react';
import { SimpleForm, TextInput, NumberInput } from 'react-admin';

const FormComponent = () => {
    return (
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="nb_views" />
        </SimpleForm>
    )
}

export default FormComponent;