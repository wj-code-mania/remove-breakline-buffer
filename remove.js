const string1 = "\r\nabcdef";
const buffer1 = Buffer.from(string1);
console.log(buffer1.slice(0, 2).toString());
console.log('aa: ', buffer1.slice(0, 2).toString() === '\r\n');
if (buffer1.slice(0, 2).toString() === '\r\n') {
    const buffer2 = buffer1.slice(2, buffer1.length);
    console.log('updated: ', buffer2);
}
console.log(buffer1);