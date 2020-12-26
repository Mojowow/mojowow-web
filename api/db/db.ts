import mysql, { MysqlError } from 'mysql'

export default class MySQL {
  private static _instance: MySQL

  connection: mysql.Connection
  connected: boolean = false

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'vmangos_realmd',
    })

    this.connect()
  }

  public static get instance() {
    return this._instance || (this._instance = new this())
  }

  public static query(
    query: string,
    values?: string[]
  ): Promise<{
    error: mysql.MysqlError | null
    result: any
    fields: mysql.FieldInfo[] | undefined
  }> {
    return new Promise((resolve) => {
      this.instance.connection.query(query, values, (error, result, fields) => {
        resolve({ error, result, fields })
      })
    })
  }

  public static escape(id: any) {
    return this.instance.connection.escape(id)
  }

  private connect() {
    this.connection.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message)
        return
      }
      this.connected = true
      console.log('MySQL Connection established!')
    })
  }
}
