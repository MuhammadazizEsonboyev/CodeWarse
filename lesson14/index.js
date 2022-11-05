function shortcut(string) {
    return string.replace(/(john) (smith)/i, '$2, $1')
}

console.log(shortcut("john Smith"));