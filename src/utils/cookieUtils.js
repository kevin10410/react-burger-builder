export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`;
};

export const getCookie = (key) => {
  const matchCookie = document.cookie
    .match('(^|;) ?' + key + '=([^;]*)(;|$)');

    return matchCookie
      ? matchCookie[2]
      : null;
};
