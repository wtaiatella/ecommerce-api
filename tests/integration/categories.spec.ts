import app from "@src/app";
// test

import request from "supertest";

describe("Categories", () => {
  describe("GET /categories", () => {
    it("returns a list of categories in JSON format", () => {
      const expectedJson = JSON.stringify([
        {
          id: 1,
          name: "Jogos",
        },
      ]);

      return request(app).get("/categories").expect(200).expect(expectedJson);
    });
  });
});
