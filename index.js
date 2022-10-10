const cats = [
    `Milo`,
    `Otis`,
    `Garfield`
]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const copyCats = [...cats, name]
    return copyCats
}

function prependCat(name) {
    const copyCats1 = [name, ...cats]
    return copyCats1
}

function removeLastCat() {
    const copyCats2 = cats.slice(0, 2)
    return copyCats2
}

function removeFirstCat() {
    const copyCats3 = cats.slice(1)
    return copyCats3
}