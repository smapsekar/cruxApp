// const fetchCruxData = require("../src/controllers/cruxController");
// const axiosMock = require("axios");
// jest.mock("axios");

// describe("fetchCruxData", () => {
//   afterEach(() => {
//     axiosMock.post.mockClear(); // Clear mock after each test
//   });

//   test("should handle 404 errors from API", async () => {
//     try {
//       axiosMock.post.mockRejectedValue({ response: { status: 404 } });

//       console.log("fetchCruxData", fetchCruxData);

//       await fetchCruxData("https://example.com", "queryHistoryRecord");
//       expect(true).toBe(false);
//     } catch (error) {
//       expect(error.message).toMatch(/Data not found/);
//     }
//   });
// });

// test("should handle internal errors", async () => {
//   try {
//     axiosMock.post.mockRejectedValue({ response: { status: 500 } });

//     expect(true).toBe(false);

//     console.log("fetchCruxData", fetchCruxData);

//     await expect(fetchCruxData("https://example.com", "queryHistoryRecord"));
//   } catch (error) {
//     expect(error.message).toMatch(/Internal Server Error|Data not found/);
//   }
// });
