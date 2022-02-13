import http from "./httpService";

const registerReq = async (user) => {
  try {
    return await http.post("/auth/register", user);
  } catch (err) {
    throw err;
  }
};

const loginReq = async (user) => {
  try {
    return await http.post("/auth/login", user);
  } catch (err) {
    throw err;
  }
};

export { registerReq, loginReq };
