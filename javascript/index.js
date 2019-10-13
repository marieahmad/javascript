// dasar
console.log('hello world');

// logika pemrograman
const a = 'mobil balap'
console.log(a);

// String
const pembeli = 'beli'
const penjual = 'jual barang'
const data = `${pembeli} dan ${penjual}`
console.log(data);

// number
const angka = 1
console.log(angka);

const data1 = 8 - 2
const data2 = 11 * 2 - 2
console.log(data1,data2);

//  Boolean
let benar = true

// Array
const dataArray = ['andi', 'putri', 'sabrina', 1, true, undefined, null]

dataArray [0]
dataArray [1]
dataArray [3]
dataArray [4]
dataArray.length

console.log(dataArray[3]);

// testing boolean
let number = 10
let result1 = (number == 10)
let result2 = (number == 7)
let result3 = (number == '10')
console.log(result3);

let result4 = (number === '10')
let result5 = (number === 10)
console.log(result4);

// 
let time = new Date()
console.log(time);

let time2 = new Date('October 12, 2019 18:03:12')
console.log(time2);

let getYears = time.getFullYear()
console.log(getYears);

let buah = ['apple', 'orange', 'lemon', 'pepaya']
console.log(buah);

const resultBuah = buah.toString()
console.log(resultBuah);
const resultBuah1 = buah.join('_')
console.log(resultBuah1);
const resultBuah2 = buah.push('_avocado')
console.log(resultBuah2);
const resultBuah3 = buah.pop()
console.log(resultBuah3);
const resultBuah4 = buah.push('mangga')
console.log();

// javascript Block
let dataAngka = 1
{ 
    const dataAngka = 2
}
console.log(dataAngka);

let grade = 56
if(grade >= 90) {
    console.log('A');
}
else if (grade >= 80) {
    console.log('B');
}
else if (grade >= 70) {
    console.log('C');    
}
else if (grade >=60) {
    console.log('D');
}
else {
    console.log('E');
}


let animal = 'kambing'
switch (animal){
    case 'sapi':
    case 'kerbau':
    case 'kucing':
        console.log('kucing sudah naik kapal');
        break;
        case 'kambing':
     default:
    console.log('hewan tidak ada');
}

// functional For
let text = ''
for (i = 0; i < 5; i++){
    text += i +','
}
console.log(text);

const word = ['mouse', 'laptop', 'handphone', 'lcd', 'remote']

const longWord = word.filter(word => word.length > 5)
console.log(longWord);

const mapData = [1,12,33,14,25]
const map1 = mapData.map(x => x*2)
console.log(map1);

const find1 = mapData.find(function(elemen)
{
    return elemen > 10
})
console.log(find1);











