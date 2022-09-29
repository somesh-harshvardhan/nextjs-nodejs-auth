import React from 'react'
import {Field} from 'formik';

const FormInput = ({children,name,type="input",placeHolder="",as,...rest}) => {
  if(as){
    return (
        <Field name={name} as={as} placeholder={placeHolder} {...rest}>
             {children}
        </Field>
      )
  }else{
    return (
        <Field name={name} type={type} placeholder={placeHolder} {...rest}/>
      
      )
  }

}

export default FormInput