import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.config.js";

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n Server is running on port ${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(` URL: http://localhost:${PORT}\n`);
  });
}

export default app;