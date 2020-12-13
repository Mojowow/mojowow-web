import { Column, Entity, Index } from "typeorm";

@Index("acctid", ["acctid"], {})
@Entity("realmcharacters", { schema: "tbcrealmd" })
export class Realmcharacters {
  @Column("int", {
    primary: true,
    name: "realmid",
    unsigned: true,
    default: () => "'0'",
  })
  realmid: number;

  @Column("bigint", { primary: true, name: "acctid", unsigned: true })
  acctid: string;

  @Column("tinyint", { name: "numchars", unsigned: true, default: () => "'0'" })
  numchars: number;
}
