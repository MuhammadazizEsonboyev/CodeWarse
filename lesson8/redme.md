```js

function removeEveryOther(arr) {
    let filtered = arr.filter(function (value, index) {
        return index % 2 === 0;
    });
    return filtered
}