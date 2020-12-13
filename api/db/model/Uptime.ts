import { Column, Entity } from "typeorm";

@Entity("uptime", { schema: "tbcrealmd" })
export class Uptime {
  @Column("int", { primary: true, name: "realmid", unsigned: true })
  realmid: number;

  @Column("bigint", {
    primary: true,
    name: "starttime",
    unsigned: true,
    default: () => "'0'",
  })
  starttime: string;

  @Column("varchar", { name: "startstring", length: 64, default: () => "''" })
  startstring: string;

  @Column("bigint", { name: "uptime", unsigned: true, default: () => "'0'" })
  uptime: string;

  @Column("smallint", {
    name: "maxplayers",
    unsigned: true,
    default: () => "'0'",
  })
  maxplayers: number;
}
