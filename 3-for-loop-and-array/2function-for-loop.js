function main() {
    const names = ["Dithin", "Dinu", "Priji", "Arch"];
    const inputAlphabet = 'a';
    findAllamesWithAlphabetAll(names, inputAlphabet)
}
function findAllamesWithAlphabetAll(names, inputAlphabet) {
    for (let index = 0; index < names.length; index++) {
        if (isNameHavingAlphabet(names[index], inputAlphabet)) {
            console.log(`Character ${inputAlphabet} is present in ${names[index]}`)
            continue;
        }
        console.log(`Character ${inputAlphabet} is not present in ${names[index]}`)
    }
}
function isNameHavingAlphabet(name, inputAlphabet) {
    if (name.toUpperCase().includes(inputAlphabet.toUpperCase())) {
        return true;
    }
    return false;
}
main()





