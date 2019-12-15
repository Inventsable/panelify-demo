export default function rgbaToHex(val) {
  while (val.length > 3) val.pop();
  return `#${val
    .map(c => {
      return (c * 255).toFixed(0);
    })
    .map(c => {
      c = c < 256 ? Math.abs(c).toString(16) : 0;
      return c.length < 2 ? `0${c}` : c;
    })
    .join("")}`;
}
