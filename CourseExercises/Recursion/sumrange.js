function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sumRange(4)

// return 3 + sumRange(2) ... waiting
              // return 2 + sumRange(1) ... waiting
                            // return 2 + sumRange(1) ... waiting
                                          // return 1