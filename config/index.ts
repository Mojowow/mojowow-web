export const database = {
  realmd:
    process.env.server_database_realmd ||
    'mysql://root:root@localhost:3306/vmangos_realmd',
}
export const server = {
  authSecret: 'mysecret', // secret for generating jwt token
  database,
}

export const config = {
  server,
}

export default config
