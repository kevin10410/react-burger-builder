export const setCookie = (key, value) => {
  const duration = 600;
  const expiredTime = new Date(Date.now() + duration * 1000)
    .toUTCString();

  document.cookie = `${key}=${value};expires=${expiredTime}`;
};

export const getCookie = (key) => {
  const matchCookie = document.cookie
    .match('(^|;) ?' + key + '=([^;]*)(;|$)');

    return matchCookie
      ? matchCookie[2]
      : null;
};

export const deleteCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
