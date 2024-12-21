
import { mergeSort } from "../src/mergeSort"

describe('merge function', () => {
    test('Functional Test', () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [9, 7, 5, 3];

        const result = mergeSort(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]);
    });

    test('Empty Arrat Test', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = mergeSort(collection_1, collection_2, collection_3);

        expect(result).toEqual([]);
    });

    test('Different Array Length Test', () => {
        const collection_1 = [1, 2, 3];
        const collection_2 = [4, 5];
        const collection_3 = [7, 6];

        const result = mergeSort(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('Negative Number Test', () => {
        const collection_1 = [-1, 0, 3];
        const collection_2 = [4, 5];
        const collection_3 = [-5, -10];

        const result = mergeSort(collection_1, collection_2, collection_3);

        expect(result).toEqual([-10, -5, -1, 0, 3, 4, 5]);
    });
});
