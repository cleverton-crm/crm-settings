module.exports = {
  apps: [
    {
      name: 'crm-settings',
      script: './dist/main.js',
      watch: false,
      wait_ready: true,
      stop_exit_codes: [0],
      env: {
        PORT: 5200,
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
