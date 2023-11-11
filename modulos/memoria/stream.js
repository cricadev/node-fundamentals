import fs from "node:fs";
import stream from "node:stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
let data = "";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  data += chunk;
});

readableStream.on("end", () => {
  console.log(data);
});

const toUpperTransformStream = stream.Transform;

const mayus = new toUpperTransformStream({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readableStream.pipe(mayus).pipe(process.stdout);
