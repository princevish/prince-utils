
type ReduceFilterType = {
    [key: string]: string | number | string[] | number[];
};

export const reducedFilter = (data: ReduceFilterType[], keys: string[], fn: (data:ReduceFilterType) => void) =>
    data.filter(fn).map((el) =>
        keys.reduce((acc: ReduceFilterType, key: string) => {
            acc[key] = el[key];
            return acc;
        }, {} as ReduceFilterType)
);