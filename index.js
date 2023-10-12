const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}



function appendCat(name) {
    const allCats = [...cats]
    allCats.push(name);
    return allCats
}

function prependCat(name) {
    const allCats = [...cats]
    allCats.unshift(name);
    return allCats
}

function removeLastCat(name) {
    const allCats = [...cats]
    allCats.pop(name);
    return allCats
}

function removeFirstCat(name) {
    const allCats = [...cats]
    allCats.shift(name);
    return allCats
}