import sharp from "sharp";

sharp("./original.webp").resize(80).toFile("./resized.webp");
