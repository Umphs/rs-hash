export default function hash(value: string) {
  const length = value.length;
  let h = 0, a = 63689, b = 378551;
	for (let i = 0; i < length; i++)
	{
		h = (Math.imul(h, a) + value.charCodeAt(i)) >>> 0;
		a = Math.imul(a, b) >>> 0;
	}
	return h >>> 0;
}
