import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_username", ["username"], { unique: true })
@Index("idx_gmlevel", ["gmlevel"], {})
@Entity("account", { schema: "tbcrealmd" })
export class Account {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "Identifier",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "username",
    unique: true,
    length: 32,
    default: () => "''",
  })
  username: string;

  @Column("tinyint", { name: "gmlevel", unsigned: true, default: () => "'0'" })
  gmlevel: number;

  @Column("longtext", { name: "sessionkey", nullable: true })
  sessionkey: string | null;

  @Column("longtext", { name: "v", nullable: true })
  v: string | null;

  @Column("longtext", { name: "s", nullable: true })
  s: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("timestamp", { name: "joindate", default: () => "CURRENT_TIMESTAMP" })
  joindate: Date;

  @Column("varchar", {
    name: "lockedIp",
    length: 30,
    default: () => "'0.0.0.0'",
  })
  lockedIp: string;

  @Column("int", {
    name: "failed_logins",
    unsigned: true,
    default: () => "'0'",
  })
  failedLogins: number;

  @Column("tinyint", { name: "locked", unsigned: true, default: () => "'0'" })
  locked: number;

  @Column("int", {
    name: "active_realm_id",
    unsigned: true,
    default: () => "'0'",
  })
  activeRealmId: number;

  @Column("tinyint", {
    name: "expansion",
    unsigned: true,
    default: () => "'0'",
  })
  expansion: number;

  @Column("bigint", { name: "mutetime", unsigned: true, default: () => "'0'" })
  mutetime: string;

  @Column("varchar", { name: "locale", length: 4, default: () => "''" })
  locale: string;

  @Column("text", { name: "token", nullable: true })
  token: string | null;
}
