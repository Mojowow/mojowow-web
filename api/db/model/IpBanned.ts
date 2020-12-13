import { Column, Entity } from "typeorm";

@Entity("ip_banned", { schema: "tbcrealmd" })
export class IpBanned {
  @Column("varchar", {
    primary: true,
    name: "ip",
    length: 32,
    default: () => "'0.0.0.0'",
  })
  ip: string;

  @Column("bigint", { primary: true, name: "banned_at" })
  bannedAt: string;

  @Column("bigint", { name: "expires_at" })
  expiresAt: string;

  @Column("varchar", {
    name: "banned_by",
    length: 50,
    default: () => "'[Console]'",
  })
  bannedBy: string;

  @Column("varchar", {
    name: "reason",
    length: 255,
    default: () => "'no reason'",
  })
  reason: string;
}
