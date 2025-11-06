export const normalizedPath = (pathname: string) => {
  return pathname.replace(/^\/(vi|en)(?=\/|$)/, '');
}
