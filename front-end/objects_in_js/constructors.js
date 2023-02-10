function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

kiwiIcecream = new Icecream("kiwi")
appleIcecream = new Icecream("apple")
kiwiIcecream.meltIt(); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream;
