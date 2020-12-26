export const DATABASE = {
  REALMD:
    process.env.SERVER_DATABASE_REALMD ||
    'mysql://root:root@localhost:3306/vmangos_realmd',
}
export const SERVER = {
  JWTSECRET: process.env.SERVER_JWTSECRET || 'mysecret',
  DATABASE,
  PORT: process.env.PORT || 3000,
}

export const config = {
  SERVER,
}

export default config
