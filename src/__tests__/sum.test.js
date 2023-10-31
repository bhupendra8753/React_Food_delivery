import { sum } from "../components/sum";

test("Sum function should give sum of two number", () => {
     const result = sum(3, 4);

     //Assertion
     expect(result).toBe(7)
});