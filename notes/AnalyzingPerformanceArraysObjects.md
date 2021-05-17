# Analyzing Performance of Arrays and Objects

[slides](https://cs.slides.com/colt_steele/built-in-data-structures-25)

## Objects

- Unordered, key value pairs 

**Big O**.

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)
* Access - O(1)

**Objects Methods**.

* Object.keys - O(N)
* Object.values - O(N)
* Object.entries - O(N): ```[[key],[value]]```
* hasOwnProperty - O(1): return > ```true || false```

## Arrays

- Ordered lists

* Insertion - It depends: 
  * If is Push: O(1)
  * If is an insertion at the start or middle of the array is O(N)
* Removal - It depends:
  * If Remove the last element, with pop: O(1)
  * If Remove the first element: O(N)
* Searching - O(N): If we search for some element, we need potentially search in every single element
* Access - O(1): You know the index





