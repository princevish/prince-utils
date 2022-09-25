import { reducedFilter } from "./filter/reducedFilter";

type ReduceFilterType = {
    [key: string]: string | number | string[] | number[];
};

export class Log {
    static success(message: string) {
        console.log(`%c ${message}`, 'color:green');
    }
    static danger(message: string) {
        console.log(`%c ${message}`, 'color:red');
    }
    static info(message: string) {
        console.log(`%c ${message}`, 'color:black, background:yellow');

    }
}

export class ObjectFilter{
    static filter(data: ReduceFilterType[], keys: string[], fn: (data: ReduceFilterType) => void) {
       return reducedFilter(data, keys, fn);
    }
}