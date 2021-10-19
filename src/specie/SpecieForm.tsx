import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CrazyButton from '../utils/CrazyButton';
import * as Yup from 'yup';
import { specieCreationDTO } from './specie.model';

export default function SpecieForm(props: SpecieFormProps) {
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
                   <CrazyButton type="submit">
                     SEND
                  </CrazyButton>
                </Form>
            )}
        </Formik>
    )
}

interface SpecieFormProps {
    model: specieCreationDTO;
    onSubmit(values: specieCreationDTO, action: FormikHelpers<specieCreationDTO>): void;
}