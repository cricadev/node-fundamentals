import { compare, hash } from "bcrypt";

const password = "1234Segura!";

const verifyPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 10);
    const match = await compare(password, hashedPassword);
    console.log(
      `Password: ${password}, hashedPassword: ${hashedPassword}, match: ${match}`
    );
  } catch (error) {
    console.error(error);
  }
};

verifyPassword(password);
