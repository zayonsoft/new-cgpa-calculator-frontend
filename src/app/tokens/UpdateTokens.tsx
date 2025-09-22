export default function UpdateTokens(access: string, refresh?: string) {
  localStorage.setItem("cgpa_calc_access", access);
  refresh ? localStorage.setItem("cgpa_calc_refresh", refresh) : null;
}
