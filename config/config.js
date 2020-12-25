const config = {
  env: process.env.NODE_ENV || "developement",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_Secret_key",
  mongoUri:
    "mongodb+srv://fullstack:fullstack@cluster0.xtlm5.mongodb.net/fullstack?retryWrites=true&w=majority",
};
export default config;
