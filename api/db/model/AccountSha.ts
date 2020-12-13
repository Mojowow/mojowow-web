import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_username", ["username"], { unique: true })
@Index("idx_gmlevel", ["gmlevel"], {})
@Entity("account_sha", { schema: "tbcrealmd" })
export class AccountSha {
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

  @Column("varchar", { name: "sha_pass_hash", length: 40, default: () => "''" })
  shaPassHash: string;

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
    name: "last_ip",
    length: 30,
    default: () => "'0.0.0.0'",
  })
  lastIp: string;

  @Column("int", {
    name: "failed_logins",
    unsigned: true,
    default: () => "'0'",
  })
  failedLogins: number;

  @Column("tinyint", { name: "locked", unsigned: true, default: () => "'0'" })
  locked: number;

  @Column("timestamp", {
    name: "last_login",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastLogin: Date;

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

  @Column("tinyint", { name: "locale", unsigned: true, default: () => "'0'" })
  locale: number;
}
