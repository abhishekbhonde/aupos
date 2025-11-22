export function validateEnv() {
  const required = ["PORT"];

  required.forEach((key) => {
    if (!process.env[key]) {
      console.warn(`⚠️ Missing environment variable: ${key}`);
    }
  });
}
