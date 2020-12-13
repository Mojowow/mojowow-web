import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_logons", { schema: "tbcrealmd" })
export class AccountLogons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "accountId", unsigned: true })
  accountId: number;

  @Column("varchar", { name: "ip", length: 30 })
  ip: string;

  @Column("timestamp", {
    name: "loginTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  loginTime: Date;

  @Column("int", { name: "loginSource", unsigned: true })
  loginSource: number;
}
