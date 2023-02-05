import { MigrationInterface, QueryRunner } from "typeorm";

export class entities1675638929335 implements MigrationInterface {
    name = 'entities1675638929335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("contactId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "emailContact" character varying(60) NOT NULL, "telephone" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientClientId" uuid, CONSTRAINT "PK_2f2eeb268dcaf6e7f1c2176949f" PRIMARY KEY ("contactId"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("clientId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "telephone" integer NOT NULL, "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_c8526f623c0beed53b60cb31bf5" PRIMARY KEY ("clientId"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_e4d2387cbe6dcadbe70aae2b450" FOREIGN KEY ("clientClientId") REFERENCES "clients"("clientId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_e4d2387cbe6dcadbe70aae2b450"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
