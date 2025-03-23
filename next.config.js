// next.config.js
module.exports = {
  images: {
    unoptimized: true,
  },
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_API_TIMEOUT: "120000", // Tambahkan timeout sebagai env variable
      },
      max_memory_restart: "1G",
    },
  ],
  // other configurations...
};
