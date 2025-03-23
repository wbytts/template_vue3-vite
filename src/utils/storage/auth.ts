const TokenKey = "by-token";

export function getToken(): string {
  return localStorage.getItem(TokenKey) as string;
}

export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
