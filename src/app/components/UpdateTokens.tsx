export default function UpdateTokens(access: string, refresh: string) {
  localStorage.setItem("cgpa_calc_access", access);
  localStorage.setItem("cgpa_calc_refresh", refresh);
}
