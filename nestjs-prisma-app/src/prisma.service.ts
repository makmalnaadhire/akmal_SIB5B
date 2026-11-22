import { Injectable, OnModuleInit } from '@nestjs/common';
// Gunakan @ts-ignore untuk mem-bypass error tipe data Prisma 7 sementara
// @ts-ignore
import { PrismaClient } from './generated/prisma/client.js'; 
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const adapter = new PrismaPg({ connectionString });
    // Gunakan 'as any' agar TypeScript tidak rewel soal tipe adapter
    super({ adapter } as any);
  }

  async onModuleInit() {
    // Gunakan bracket notation jika TS masih protes
    await (this as any).$connect();
  }
}