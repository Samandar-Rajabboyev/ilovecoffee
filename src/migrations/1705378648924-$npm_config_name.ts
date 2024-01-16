import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1705378648924 implements MigrationInterface {
    name = ' $npmConfigName1705378648924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

}
