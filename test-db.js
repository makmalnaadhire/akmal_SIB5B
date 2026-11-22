import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/nestjs_db'
});

try {
  await client.connect();
  const res = await client.query('SELECT current_database(), current_user');
  console.log('✅ KONEKSI BERHASIL!');
  console.table(res.rows[0]);
} catch (err) {
  console.error('❌ KONEKSI GAGAL:', err.message);
} finally {
  await client.end();
}