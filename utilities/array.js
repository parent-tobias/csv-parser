/*****
 * Functions useful when dealing with arrays of objects
 *****/


/*****
 * Given a property, returns a function that converts an array of objects to a group,
 *   with top-level keys the values of that property, and all objects that match that
 *   property in the in the data array.
 *****/
const groupBy = (prop) => (obj, rec)=>{
  obj[rec[prop]] = obj[rec[prop]] || { data: []};
  obj[rec[prop]].data.push(rec);
  return obj;
}

/*****
 * Given a property, returns a function to sort an array of objects by that property.
 *   Very simplistic, I'm only sorting strings or numbers.
 */
const sortBy = (prop) => (a, b) =>{
  return typeof a[prop] === 'string'
     ? a[prop].localeCompare(b[prop])
     : a[prop] - b[prop]
}
/*****
 * Given a property, returns a function that expects a value. Given that value, returns
 *   a function that can be used in an array.filter for that property==value.
 */
const filterBy = (prop) => (val) => (obj) => obj[prop]===val;

export { groupBy, sortBy, filterBy };