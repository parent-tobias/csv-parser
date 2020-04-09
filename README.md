#CSV-Parser

So this is a project that lets the user import a .csv file (assuming the first line is column names) and builds an array of JS objects from that. Using that, we can begin to manipulate those objects (for example, filtering, grouping, or reducings for stats).

## Why? 

No real reason, I was recently asked to write an application that could read in a CSV file and, from the resulting array of objects, build a model of day-trading transactions (calculate fees and taxes, net profit, etc.). In order to make that happen, I needed to build a utility that would convert to and from CSV format to objects. For *that* to work, I needed to have an asynchronous file reading system.

Thus, in this, you'll see two files: './utilities/file.js' wraps the file reader in a Promise, allowing me to use it asynchronously, and `./utilities/csv.js' is a CSV conversion utility. 

## API
The CSV converter includes four useful methods:

* `.toString(arrayOfFieldNames, arrayOfObjects)` converts the array of objects to a CSS string, in the order of the field names. Thus, you can "organize" the CSV you output, rather than simply making them a haphazard mess. Another advantage to having the array of field names is, you can also use that to access getters in your objects, in order to generate properties that might not exist.
* `.fromString(csvString)` converts a CSV string into an array of objects. There is an assumption here. I assume that the first row of the CSV file is the column-names, and I use those as they object property names in here.
* `.toFile(arrayOfFieldNames, arrayOfObjects, fileName)` runs the `.toString()` above, and prompts the user to save the output file.
* `.fromFile(fileReference)` once the file has been read in, the file referenece is passed in and the `.fromString()` is run. The file can be read in either using the async mentioned above, or whatever other file upload method, but the file reference is what gets passed in here.

This was kind of fun. It's not something everyone will need, it's a very specialized use thing, but it was a fun exercise.