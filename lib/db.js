import { Pool } from 'pg';

const globalForDb = globalThis;
function getPool() {
  if (!(process.env.BLOG_DATABASE_URL || process.env.DATABASE_URL)) throw new Error('DATABASE_NOT_CONFIGURED');
  if (!globalForDb.csharptekPool) {
    const remote = !/localhost|127\.0\.0\.1/i.test((process.env.BLOG_DATABASE_URL || process.env.DATABASE_URL));
    globalForDb.csharptekPool = new Pool({ connectionString: (process.env.BLOG_DATABASE_URL || process.env.DATABASE_URL), ssl: remote ? { rejectUnauthorized: false } : false, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 5000 });
  }
  return globalForDb.csharptekPool;
}

export function query(sql, values = []) { return getPool().query(sql, values); }
