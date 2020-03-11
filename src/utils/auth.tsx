import Cookies from 'js-cookie';

const TOKEN_KEY = 'mynavi-jwt';
const IP_ADDRESS_KEY = 'mynavi-jwt-ipaddress';

export const getToken = () => Cookies.get(TOKEN_KEY);
export const setToken = (token: string) => Cookies.set(TOKEN_KEY, token);
export const removeToken = () => Cookies.remove(TOKEN_KEY);


