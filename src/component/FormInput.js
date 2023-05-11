import React from "react";
import Register from "../Registration/Register";
import Entreprenur from "./personalinfo";
import useFormContext from "/home/nineleaps/project/src/component/hooks/Useformcontext.js";
const FormInputs=()=>
{
    const {page}=useFormContext()
    const display={
        0:<Entreprenur/>,
        1:<Register/>
    }
    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )
    return content
}
export default FormInputs