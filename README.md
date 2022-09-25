# prince-utils

## Features  
- Log
- ObjectFilter  


## Log
    Log.success(message);
    Log.danger(message);
    Log.info(message);

## ObjectFilter

### ObjectFilter.filter();
Filter an array of objects based on a condition while also filtering out unspecified keys.

Use Array.prototype.filter() to filter the array based on the predicate fn so that it returns the objects for which the condition returned a truthy value. On the filtered array, use Array.prototype.map() to return the new object using Array.prototype.reduce() to filter out the keys which were not supplied as the keys argument.

```bash
   ObjectFilter.filter(data, filter list, condition) 
   ObjectFilter.filter(data, [key,key], index => index)
```  
