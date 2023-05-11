import React,{ useContext } from "react"
import FormContext from "/home/nineleaps/project/src/component/Context/FormContext.js"
const useFormContext = () => {
    return useContext(FormContext)
}
export default useFormContext