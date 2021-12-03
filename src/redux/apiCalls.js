//Cambiar loginStart recibe email y password, luego login recibe uid y username




import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import Swal from "sweetalert2";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);

    //////////////////Alerta de exito login////////////////////
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Ingresaste con exito",
    });
    //////////////////////////////////////////////////////////


  } catch (err) {
    dispatch(loginFailure());
    
    //////////////////Alerta error login////////////////////
    Swal.fire({
      icon: "error",
      title: "Error",
      text: err.response.data.msg,
      confirmButtonColor: "#ff3c6d",
    });
    //////////////////////////////////////////////////////////
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data);

   /*  dispatch(
      login({
        uid: res.data.uid,
        username: res.data.username,
      })
    ); */
    login( dispatch, {
      uid:res.data.uid, 
      username:res.data.username,} );

    //////////////////Alerta de exito login////////////////////
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Ingresaste con exito",
    });
    //////////////////////////////////////////////////////////


  } catch (err) {
    dispatch(registerFailure());
    
    //////////////////Alerta error login////////////////////
    Swal.fire({
      icon: "error",
      title: "Error",
      text: err.response.data.msg,
      confirmButtonColor: "#ff3c6d",
    });
    //////////////////////////////////////////////////////////
  }
};