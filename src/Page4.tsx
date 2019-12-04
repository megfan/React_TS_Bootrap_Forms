import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import SingleField from './SingleField'

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface FormProps {
    onSubmit: (values: Values) => void;
}

const Page1: React.FC<FormProps> = ({ onSubmit }) => {
        return (
          <div className="form_container">
            <Formik 
                initialValues={{firstName: '', lastName: '', email:'' }}
                onSubmit={values => { 
                    onSubmit(values);
                }}                
            > 
                {({ values, handleChange, handleBlur }) => (
                    <Form>
                        <div>
                        <Field name="firstName" placeholder="first name" component={SingleField}/>
                        </div>
                        <div>
                        <Field name="lastName" placeholder="last name" component={SingleField}/>
                        </div>
                        <div>
                        <Field name="email" placeholder="email" component={SingleField}/>
                        </div>
                        
                        <button type='submit'>Submit </button>
                    </Form>
                )}
            </Formik>
          </div>
        );
}

export default Page1;