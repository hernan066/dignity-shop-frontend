import { types } from "../types/types";
import axios from "axios";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";

////////////////////////////Login/////////////////////////////////////////////
export const starLogin = (email, password) => {
  return async (dispatch) => {
    try {
      //const res = await axios.post('https://dignity-shop.herokuapp.com/api/auth/login', {email, password});
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: res.data.uid,
          name: res.data.username,
        })
      );
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
    } catch (error) {
      //console.log(error.response.data.msg);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.msg,
        confirmButtonColor: "#ff3c6d",
      });
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

//////////////Chequear estado del token/////////////////////////////////////////////

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken();
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.username,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

////////////////////////////Logout/////////////////////////////////////////////

export const starLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

////////////////////////////Register/////////////////////////////////////////////

export const startRegister = (username, email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: res.data.uid,
          username: res.data.username,
        })
      );
        //////////////////Alerta de exito registro////////////////////

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
        title: "Registro exitoso",
      });

      //////////////////////////////////////////////////////////




    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.msg,
        confirmButtonColor: "#ff3c6d",
      });
    }
  };
};
