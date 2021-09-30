import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CrazyButton from '../utils/CrazyButton';

import Button from '../utils/Button';
import * as Yup from 'yup';
import { petCreationDTO } from './pet.model';
import './PetForm.css';

export default function PetForm(props: PetFormProps) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                   <TextField displayName="Name" field="name" />
                   <DateField displayName="Date of Birth" field="dateOfBirth" />
                    <ImageField displayName="Picture" field="picture" 
                    imageURL={props.model.pictureURL} />
                    

                   <CrazyButton type="submit">
                     SEND
                  </CrazyButton>
                </Form>
            )}
        </Formik>
    )
}

interface PetFormProps {
    model: petCreationDTO;
    onSubmit(values: petCreationDTO, action: FormikHelpers<petCreationDTO>): void;
}