const calenderificApiKey = () => process.env.REACT_APP_CALENDERIFIC_API_KEY;

const paramsGen = (params) => {
  let returnStr = '';
  Object.entries(params).forEach(([param, value]) => {
    returnStr += `&${param}=${value}`;
  });
  return returnStr;
};

const calenderificBaseURL = () => 'https://calendarific.com/api/v2';
const diseaseSHbaseURL = () => 'https://disease.sh/v3/covid-19';

export const countries = () => `${calenderificBaseURL()}/countries/?api_key=${calenderificApiKey()}`;
export const holidays = (params) => `${calenderificBaseURL()}/holidays/?api_key=${calenderificApiKey()}${paramsGen(params)}`;
export const continents = () => `${diseaseSHbaseURL()}/continents`;
