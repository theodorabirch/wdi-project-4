export function saveToken(token) {
  localStorage.setItem('app-token', token);
}

export function getToken() {
  return localStorage.getItem('app-token');
}

export function decodeToken() {
  const token = getToken();
  if (!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function tokenUsername() {
  return decodeToken().username;
}

export function tokenUserId() {
  return decodeToken().sub;
}

export function deleteToken() {
  localStorage.removeItem('app-token');
}

export function isAuthenticated() {
  console.log(getToken());
  console.log(!!getToken());
  return !!getToken();
}

export function authorizationHeader() {
  return {
    headers: { Authorization: 'Bearer ' + getToken() }
  };
}
