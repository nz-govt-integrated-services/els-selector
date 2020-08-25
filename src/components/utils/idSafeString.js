export default function idSafeString(string) {
  return string.replace(/[ ()']/g, '');
}
