const arr = [1, 43, 64, 643, 6432, 32333]
x = 43

function bsRecursive(arr, x, low=0, high=arr.length-1){
    const mid = Math.floor(low+(high-low)/2)
    if(high>=low){
        if(arr[mid]===x){
            return mid;
        }
        if(x<arr[mid]){
            return bsRecursive(arr, x, low, mid-1);
        } else{
            return bsRecursive(arr, x, mid+1, high);
        }
    }else{
        return -1
    }
}

function bsIterative(arr, x){
    let low = 0
    let high = arr.length-1
    let mid=Math.floor(low+(high-low)/2)
    while(high>=low){
        if(arr[mid]===x){
            return mid;
        }
        if(x<arr[mid]){
            high = mid-1;
        } else{
            low = mid+1;
        }
    }
    return -1;
}

export { bsIterative, bsRecursive };