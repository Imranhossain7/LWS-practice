function pangram(str) {
    let regExp = /[^a-z]/g;
    let letters = str.toLowerCase().replace(regExp, '');
    document.getElementById('letters').innerHTML = letters;
}
pangram('GHV 2@# %hfr efg uor7 489(*&^% knt lhtkjj ngnm!@#$%^&*()_');

