
export const validateName = (name) => {
    if (name.length > 3 && name !== "") {
      return true;
    } else {
      return false;
    }
  };
  
  export const validateLastPass = (password) => {
    if (password.length > 3 && password !== "") {
      return true;
    } else {
      return false;
    }
  };
  
  export const validateEmail = (email) => {
    if (email.length > 3 && email !== "") {
      return true;
    } else {
      return false;
    }
  };