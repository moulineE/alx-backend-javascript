export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const Int8View = new Int8Array(buffer);
  if (position > Int8Array.length) {
    throw Error('Position outside range');
  }
  Int8View[position] = value;
  return new DataView(buffer);
}
