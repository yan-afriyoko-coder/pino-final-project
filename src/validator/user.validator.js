import validator from "validator";

const sanization = (data) => {
  if (typeof data.nama != "undefined") {
    return {
      nama: validator.escape(validator.trim(data.nama)),
      email: validator.escape(validator.trim(data.email)),
      password: validator.trim(data.password),
    };
  } else {
    return {
      email: validator.escape(validator.trim(data.email)),
      password: validator.trim(data.password),
    };
  }
};

const validation = (dt) => {
  let message = [];
  let data = sanization(dt);
  if (typeof dt.nama != "undefined") {
    if (validator.isEmpty(data.nama)) {
      message.push("Nama harus diisi");
    }
  }
  if (validator.isEmpty(data.email)) {
    message.push("Email harus diisi");
  }
  if (!validator.isEmail(data.email)) {
    message.push("Email tidak valid");
  }
  if (validator.isEmpty(data.password)) {
    message.push("Password harus diisi");
  }
  if (!validator.isStrongPassword(data.password)) {
    message.push(
      "Password harus terdiri dari 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 simbol"
    );
  }
  return { message, data };
};

export default validation;
