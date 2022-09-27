namespace RLE {
  /*
Adds one to a given number by creating an array and adding random numbers onto it until it's size is the given number. Then add another number and return the length. 
Input(Number: 5)
Output: 6
*/
  type NumberPlusOne<T extends number, Acc extends number[] = []>= Acc['length'] extends T ? [...Acc, 1]['length']: NumberPlusOne<T, [...Acc, 1]>

 /*
 Temp is needed to check if we are still getting the same string from the array (e.g. A)
 TempCount is needed to count how many times a Char occurs
*/
  export type Encode<S extends string, Temp extends string = "", TempCount extends number = 0, Result extends string = ""> = S extends `${infer H}${infer Tail}` 
  ? H extends Temp 
    /*  If we still get the same char, just add one to the count */
     ? Encode<Tail, Temp, NumberPlusOne<TempCount>, Result>
      /*  If the count is one and we are not getting the same char again, just reset everything and add the char to the result (e.g for the B) */
     : TempCount extends 1
       ? Encode<Tail, H, 1, `${Result}${Temp}`>
       /* As tempCount can be 0 for the `B` in the string, we don't add the number to the result. */
     : Encode<Tail, H, 1, `${Result}${TempCount extends 0 ? "" : TempCount}${Temp}`>
  : `${Result}${Temp}`;

/*
Duplicates the given string n-times 
Input(Char: "AB", Number: 3)
Output: "ABABAB"
*/
type MultiplyChar<C extends string, N extends number, Acc extends number[] = [], Result extends string = ""> = Acc['length'] extends N ? Result: MultiplyChar<C, N, [...Acc,1], `${Result}${C}`>



 /*
1. Iterate the given string and look for the pattern of number and string together, e.g. 3A, 2C, 6X (`${infer H extends number}${infer Char}${infer Tail}`)
2. If there is a match (e.g 3A), call the function again and only return the tail of the String and add the Char (A) multiple times (3) to the result-string
3. If there is no match, look if we are currently at a normal char, e.g (B). If so, infer it and add it to the result
Note: Read more about the part `${infer H extends number}` here => https://devblogs.microsoft.com/typescript/announcing-typescript-4-8-beta/#infer-types-template-strings
*/
export type Decode<S extends string, Result extends string = ""> = S extends `${infer H extends number}${infer Char}${infer Tail}` ? Decode<Tail, `${Result}${MultiplyChar<Char, H>}`> : S extends `${infer H}${infer Tail}` ? Decode<Tail, `${Result}${H}`>: Result

}