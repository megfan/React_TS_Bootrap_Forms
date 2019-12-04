import * as React from 'react'
import { TextField } from '@material-ui/core'
import { FieldProps } from 'formik'



interface SingleFieldProps extends FieldProps{
    label: string;
    placeholder: string;
}

const SingleField: React.FC<SingleFieldProps> = ({label, placeholder, field}) => {

        return (
            <div>
                <TextField 
                color='secondary'
                label={label}
                    placeholder={placeholder}
                    {...field}
                />
            </div>
        );
}

export default SingleField;