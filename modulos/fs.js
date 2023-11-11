import { readFile, writeFile, unlink } from "node:fs/promises";

const read = async (path) => {
  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const write = async (path, content) => {
  try {
    const data = await writeFile(path, content);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const deleteFile = async (path) => {
  try {
    const data = await unlink(path);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

read(__dirname + "/archivo.txt");

// write(__dirname + "/archivo2.txt", "Hola mundo");ddd

//deleteFile(__dirname + "/archivo2.txt");
