// DASHBOARD ROUTE
export const HOME_DASHBOARD = "/dashboard";
export const SURVEY_FORM = "/survey-form";
export const CREATE_SURVEY = HOME_DASHBOARD + "/create";
export const EDIT_SURVEY_FORM = HOME_DASHBOARD + "/edit" + SURVEY_FORM;
export const CREATE_SURVEY_FORM = CREATE_SURVEY + SURVEY_FORM;
export const SURVEY_STATUS_DASHBOARD = HOME_DASHBOARD + "/surveys";
export const ANALYTICS_DASHBOARD = HOME_DASHBOARD + "/analytics";
export const SETTINGS_DASHBOARD = HOME_DASHBOARD + "/settings";
export const VIEW_RESULT = CREATE_SURVEY + SURVEY_FORM + "/view";

// LOGIN ROUTE
export const LOGIN = "/login";

// SIGNUP ROUTE
export const SIGNUP = "/sign-up";

// LANDING ROUTE
export const LANDING = "/";
