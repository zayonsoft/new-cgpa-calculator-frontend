export const getAccessToken = () => {
  return localStorage.getItem("cgpa_calc_access");
};
export const getRefreshToken = () => {
  return localStorage.getItem("cgpa_calc_refresh");
};
