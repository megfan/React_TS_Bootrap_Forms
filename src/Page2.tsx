import React, { useState, useContext } from 'react'
import { FormControl, Button, FormControlLabel, Checkbox, TextField} from '@material-ui/core';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

import useForm from './Page2_useForm'
import validate from './validation'
import { createContext } from 'vm';
import UserContext from './UserContexr';

const UseStyles = withStyles({    
    root: {  
        color: '#fff',
        '& input': {
            color: '#fff',
        }, 
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#f50057',
        },
        '& .MuiInput-underline:hover::before': {
            borderBottomColor: '#f50057',
        },
        '& .MuiInput-underline-hover': {
            borderBottomColor: '#fff',
        },
        '& .MuiInputLabel-root': {
            color: '#fff',
            fontSize: 12
        }
    },
})(TextField);

const CheckboxStyled = withStyles({
    root: {
        '& .MuiCheckbox-root': {
            color: '#f50057',
        },        
        '&$checked': {
            color: '#f50057',
        },
        '& .MuiTypography-body1': {
            fontSize: '10px',
            color: '#fff',
        },
    },
    checked: {},
})(FormControlLabel);

const ColorButton = withStyles ({
    root: {
      color: '#38155c',      
      backgroundColor: '#f50057',
      margin: '20px',
      padding: '10px 20px',
      border: '1px solid #f50057',
      fontFamily: 'Poppins',
      textTransform: 'lowercase',
      fontWeight: 'bolder',
      '&:hover': {
        color: '#f50057',
        backgroundColor: '#38155c',
        border: '1px solid #f50057',
      },
    },
  })(Button);

  

interface Page2Props {
    page: () => void;    
}

const Page2: React.FC<Page2Props> = ({page}) => {

    const { values, handleChange, handleSubmit, handleCheck, errors } = useForm(submit, validate);
    function submit(){
        page();
    }
    const userName = useContext(UserContext);
    
    return (
        <div className="page page2">
            <p>{userName}</p>
            <h1>formility</h1>
            <form onSubmit={handleSubmit} noValidate>                                       
                <FormControl>
                    <UseStyles 
                    
                        error= { errors.email !== '' ? true : false }
                        helperText={ errors.email !== '' ? errors.email : null}
                        id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={values.email}
                        aria-describedby='email_helper-txt'
                        margin="dense"
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </FormControl>
                <FormControl>
                    <UseStyles 
                        error= { errors.password !== '' ? true : false }
                        helperText={ errors.password !== '' ? errors.password : null}
                        id='password'
                        label='Password'
                        type='password'
                        name='password'
                        value={values.password}
                        aria-describedby='password_helper-txt'
                        margin="dense"
                        onChange={handleChange}
                    />
                </FormControl>
                
                <FormControl>
                    <CheckboxStyled
                        control={
                        <Checkbox
                            onChange={handleCheck}
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            value="checkedI"
                        />
                        }
                        label="Agree for all conditions"
                   />                
                    <FormHelperText error>{ !values.checked ? errors.checked : null }</FormHelperText>
                </FormControl>
                <ColorButton size="large" type='submit'>Log in</ColorButton>
            </form>
        </div>
    );
}

export default Page2;