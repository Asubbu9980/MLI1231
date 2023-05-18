import * as Yup from "yup";

export const jobSchema =  Yup.object({
    title: Yup.string()
      .min(3, "Must be 3 Characters or more")
      .max(25, "Must be within 25 Characters")
      .required("Required"),
    role: Yup.string()
      .min(3, "Must be 3 Characters or more")
      .max(25, "Must be within 25 Characters")
      .required("Required"),
    company: Yup.string()
    .required("Required")
    .min(10, "Must be more than 10 Characters")
    .max( 25 , "Must be within 25 Characters")
  ,
    description: Yup.string()
    .required("Required"),
    experience : Yup.number().required("Required"),
     location : Yup.string()
     .required("Required"),
     minSalary : Yup.number().required("Required"),
     maxSalary : Yup.number().required("Requried"),
     
     jobType : Yup.string().required("Required"),
    

  })