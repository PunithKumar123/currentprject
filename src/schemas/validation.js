import * as Yup from "yup";

export const signUpSchema=Yup.object({

    name:Yup.string().min(3).max(25).required("Please enter your name."),
    // number
    email:Yup.string().email().required("Please enter your email."),
    password:Yup.string().min(6).required('Please Enter your password.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain one Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirmpassword:Yup.string().required("Please confirm your password.").oneOf([Yup.ref('password'),null],"Password must match")

})