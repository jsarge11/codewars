exports.domainName = (url) => {
  // create strings that match to be replaced
  // prefix
  // suffix

  // run first so it catches
  const prefixSecure = 'https://';
  const prefix = 'http://';
  const www = 'www.';
  url = url.replace(prefixSecure, '').replace(prefix, '').replace(www, '');
  url = url.replace(/\..*/, '');

  // regex a dot out of it
  return url;
};
