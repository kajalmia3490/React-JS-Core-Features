function arith(a, b) {
    let add, sub, multi, div, result

    add = a + b
    sub = a - b
    multi = a * b
    div = a / b

    result = add + sub + multi + div
    return result
    
}

function results(arg) {
    return arg
}
console.log(results(arith(2, 4)))