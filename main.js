function main() {
    const myName = 'Abbi Engel';
    const mySplit = myName.split(' ');
    const first = 'Abbi';
    const last = 'Engel';
    
    console.log(myName);
    console.log(mySplit);
    console.log(myName.replace('Abbi Engel', 'Abbigail Ilena Engel'));
    console.log(myName.toUpperCase());
    console.log(myName.toLowerCase());
    console.log(mySplit.reverse("").join(" "));
    console.log(first.slice(0,2));
    console.log(last.slice(0,3));
    console.log(myName[0] + myName[5]);
}
main();