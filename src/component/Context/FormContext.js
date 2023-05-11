import React from "react"
import { createContext, useState, useEffect } from "react"
const FormContext = createContext({})
export const FormProvider = ({ children }) => {
    const title = {
        0: 'Personal Info',
        1: 'Startup Info'
    }
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
    Startupname:'',
    linkedin:"",
    startupSummary:"",
    domain:"",
    city:'',
    Buildingno:'',
    street:'',
    state:'',
    country:'',
    pin:'',
    Cofounder:{
      name:'',
      email:'',
      role:''
    },
    Websiteurl:'',
    SeriesofFunding:"",
    currentValuation:'',
    pitchDeck:'',
    profileImage:"",
    fname:"",
    email:"",
    phone:"",
    profileImage:"",
    City:'',
    State:'',
    Country:''
});
useEffect(()=>{
    if(data.ispersonalinfo){
        setData(prevData=>({
            ...prevData,
    fname:"",
    email:"",
    phone:"",
    profileImage:"",
    City:'',
    State:'',
    Country:''
        }))
    }
},[data.ispersonalinfo])
const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(prevData=>({
        ...prevData,
        [name]:value
    }))
}
const{
ispersonalinfo,
Register,
personalinfo,
...requiredInputs
}=data
const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1
const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('personal') && key !== 'personalinfo')
        .map(key => data[key])
        .every(Boolean)
    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('Register') && key !== 'Register')
        .map(key => data[key])
        .every(Boolean)
    const disablePrev = page === 0
    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
    const prevHide = page === 0 && "remove-button"
    const nextHide = page === Object.keys(title).length - 1 && "remove-button"
    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"
    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleInput, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}
export default FormContext






