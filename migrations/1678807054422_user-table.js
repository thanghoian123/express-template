export async function up(pgm) {
  pgm.createTable("users", {
    id: "id",
    email: { type: "string", notNull: true, unique: true },
    date_of_birth: { type: "date" },
  });
}
export async function down(pgm) {}
