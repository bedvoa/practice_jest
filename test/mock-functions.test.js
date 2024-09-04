const { add, Database } = require("../mock-functions/functions");

jest.mock("../mock-functions/functions", () => ({
  add: jest.fn().mockImplementation((a, b) => a + b),
  Database: jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockReturnValue(true),
    disconnect: jest.fn().mockReturnValue(true),
    query: jest.fn().mockReturnValue("SELECT * FROM users where id = 1"),
  })),
}));

describe("Practice Jest", () => {
  describe("#1 Mock Functions", () => {
    it("should return 3 when adding 1 + 2", () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should return "SELECT * FROM users" when calling query', () => {
      const db = new Database();
      expect(db.query()).toBe("SELECT * FROM users where id = 1");
    });
  });
});
