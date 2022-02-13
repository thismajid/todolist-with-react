import http from "./httpService";

const registerReq = (user) => {
  return http.post("/auth/register", user);
};

export { registerReq };
