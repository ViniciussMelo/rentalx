import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: "avatar_url" })
  avatar_url(): string {
    const urlConfig = {
      local: process.env.APP_API_URL,
      s3: process.env.AWS_BUCKET_URL,
    };

    return `${urlConfig[process.env.disk]}/avatar/${this.avatar}`;
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
