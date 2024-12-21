// src/merge.ts

export function mergeSort(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];

    let collection_3_reverse:number[] = [];
    for (let i = collection_3.length - 1; i >= 0; i-=1) {
        collection_3_reverse.push(collection_3[i]);
    }

    let i = 0, j = 0, k = 0;
    while (i < collection_1.length || j < collection_2.length || k < collection_3_reverse.length) {
        const col1 = i < collection_1.length ? collection_1[i] : Infinity;
        const col2 = j < collection_2.length ? collection_2[j] : Infinity;
        const col3 = k < collection_3_reverse.length ? collection_3_reverse[k] : Infinity;

        if (col1 <= col2 && col1 <= col3) {
            result.push(col1);
            i+=1;
        } else if (col2 <= col1 && col2 <= col3) {
            result.push(col2);
            j+=1;
        } else {
            result.push(col3);
            k+=1;
        }
    }

    return result;
}
