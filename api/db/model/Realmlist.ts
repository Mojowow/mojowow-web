import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_name", ["name"], { unique: true })
@Entity("realmlist", { schema: "tbcrealmd" })
export class Realmlist {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "name",
    unique: true,
    length: 32,
    default: () => "''",
  })
  name: string;

  @Column("varchar", {
    name: "address",
    length: 32,
    default: () => "'127.0.0.1'",
  })
  address: string;

  @Column("int", { name: "port", default: () => "'8085'" })
  port: number;

  @Column("tinyint", { name: "icon", unsigned: true, default: () => "'0'" })
  icon: number;

  @Column("tinyint", {
    name: "realmflags",
    comment:
      "Supported masks: 0x1 (invalid, not show in realm list), 0x2 (offline, set by mangosd), 0x4 (show version and build), 0x20 (new players), 0x40 (recommended)",
    unsigned: true,
    default: () => "'2'",
  })
  realmflags: number;

  @Column("tinyint", { name: "timezone", unsigned: true, default: () => "'0'" })
  timezone: number;

  @Column("tinyint", {
    name: "allowedSecurityLevel",
    unsigned: true,
    default: () => "'0'",
  })
  allowedSecurityLevel: number;

  @Column("float", {
    name: "population",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  population: number;

  @Column("varchar", { name: "realmbuilds", length: 64, default: () => "''" })
  realmbuilds: string;
}
