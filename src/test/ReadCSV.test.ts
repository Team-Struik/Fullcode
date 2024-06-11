import useReadCSV, { Data } from "../functions/ReadCSV.ts";
import { renderHook } from "@testing-library/react-hooks";

describe("useReadCSV", () => {
    test("ReadCSV should return something", () => {
        const { result } = renderHook(() => useReadCSV());
        expect(result.current).not.toBeUndefined();
    });

    test("ReadCSV should return an object", () => {
        const result = useReadCSV();
        expect(typeof result).toBe('object');
    });

    test("ReadCSV should return an object with a 'data' property", () => {
        const result = useReadCSV();
        expect(result).toHaveProperty('data');
    });

    test("ReadCSV 'data' property should be an array", () => {
        const result = useReadCSV();
        expect(Array.isArray(result!)).toBe(true);
    });

    test("ReadCSV 'data' array should contain objects of type 'Data'", () => {
        const result = useReadCSV();
        result!.forEach((item: Data) => {
            expect(typeof item).toBe('object');
            expect(item).toHaveProperty('Materiaalsoort');
            expect(item).toHaveProperty('Spatrand');
            // ... add checks for other properties as needed
        });
    });

    test("ReadCSV should return an object with a 'GekozenOpties' property", () => {
        const result = useReadCSV();
        expect(result).toHaveProperty('GekozenOpties');
    });
});