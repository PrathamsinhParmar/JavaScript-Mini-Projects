let insertionSort = (arr , len)=>{
    for(let i=1 ; i<len ; i++){
        let key = arr[i]
        let j = i-1

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }

    // Print the Array
    console.log("Sorted Array : ");
    for(let i=0 ; i<len ; i++){
        console.log(arr[i]);
    }
}


let arr = [67,56,45,23,1,89,6,54,90,123,1]
let len = arr.length
insertionSort(arr , len)