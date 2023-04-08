import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableSongs1662055243938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'songs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'artist',
            type: 'varchar',
          },
          {
            name: 'imageurl',
            type: 'varchar',
          },
          {
            name: 'notes',
            type: 'varchar',
          },
          {
            name: 'popularity',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('songs');
  }
}
