function removeEveryOther(arr) {
    let filtered = arr.filter((value, index)  =>  {
        return index % 2 === 0
    });
    return filtered
}
console.log(removeEveryOther([2, 3, 4]));