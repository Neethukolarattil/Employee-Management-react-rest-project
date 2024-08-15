import commonApi from "./commonApi";

export const addEmployee=(data)=>{
    return commonApi("POST","http://127.0.0.1:8000/emp/",data)
}

export const listEmployee=()=>{
    return commonApi("GET","http://127.0.0.1:8000/emp/","")
}

export const deleteEmployee=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/emp/${id}/`,"")
}

export const getEmployee=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/emp/${id}/`,"")
}

export const editEmployee=(id,data)=>{
    return commonApi("PUT",`http://127.0.0.1:8000/emp/${id}/`,data)
}