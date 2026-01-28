import { PrismaClient } from '@prisma/client';

class DataSource {
  private static db?: PrismaClient;

  private constructor() { }

  public static getInstance(): PrismaClient {
    if (!DataSource.db) {
      DataSource.db = new PrismaClient({ errorFormat: 'minimal' });
    }

    return DataSource.db;
  }
}

export default DataSource.getInstance();
