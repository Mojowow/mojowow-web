import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_banned", { schema: "tbcrealmd" })
export class AccountBanned {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "account_id",
    comment: "Account id",
    default: () => "'0'",
  })
  accountId: number;

  @Column("bigint", { name: "banned_at", default: () => "'0'" })
  bannedAt: string;

  @Column("bigint", { name: "expires_at", default: () => "'0'" })
  expiresAt: string;

  @Column("varchar", { name: "banned_by", length: 50 })
  bannedBy: string;

  @Column("bigint", { name: "unbanned_at", default: () => "'0'" })
  unbannedAt: string;

  @Column("varchar", { name: "unbanned_by", nullable: true, length: 50 })
  unbannedBy: string | null;

  @Column("varchar", { name: "reason", length: 255 })
  reason: string;

  @Column("tinyint", { name: "active", default: () => "'1'" })
  active: number;
}
