module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ed9fa9de09a2edefe0e5a3def09b7b9'),
  },
});
