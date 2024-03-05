// G - Task
function getHighestIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let maxIndex = 0;
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i; 
        }
    }

    return maxIndex;
}

const array = [5, 21, 12, 21, 8];
const result = getHighestIndex(array);
console.log(result);



// F - task
// function findDoublers(str) {
//   const charMap = {}; 

//   for (const char of str) {
//       if (charMap[char]) {
//           return true;
//       } else {
//           charMap[char] = true;
//       }
//   }

//   return false; 
// }

// // Test qilish
// const result1 = findDoublers("hello");
// console.log(result1); 


// E - task
// function getReverse(str) {
//   return str.split('').reverse().join('');
// }

// // Masalan
// const result = getReverse("NURLANBEK");
// console.log(result); 


// C - task
// function checkContent(str1, str2) {
  
//   str1 = str1.split('').sort().join('');
//   str2 = str2.split('').sort().join('');

  
//   return str1 === str2;
// }

// // Misol
// var result = checkContent("mitgroup", "gmtiprou");
// console.log(result); 


// console.log("D-TASK yechimi:");
// class Shop {
//   constructor(nonlar, lagmonlar, colalar) {
//     this.nonlar = nonlar;
//     this.lagmonlar = lagmonlar;
//     this.colalar = colalar;
//   }

//   qoldiq() {
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     console.log(`
//       Hozirbizda ${hour}:${minute}da ${this.nonlar}ta non, ${this.lagmonlar}ta lagmon va ${this.colalar}ta cola mavjud!
//     `);
//   }

//   sotish(mahsulot, soni) {
//     if (mahsulot === "non") {
//       this.nonlar -= soni;
//     } else if (mahsulot === "lagmon") {
//       this.lagmonlar -= soni;
//     } else if (mahsulot === "cola") {
//       this.colalar -= soni;
//     }
//   }

//   qabul(mahsulot, soni) {
//     if (mahsulot === "non") {
//       this.nonlar += soni;
//     } else if (mahsulot === "lagmon") {
//       this.lagmonlar += soni;
//     } else if (mahsulot === "cola") {
//       this.colalar += soni;
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();




// B - Tasc
// function countDigits(string) {
//     let digitCount = 0;
//     for (let char of string) {
//         if (!isNaN(char)) {
//             digitCount++;
//         }
//     }
//     return digitCount;
// }
 //test
// let inputString = "ad2a54y79wet0sfgb9";
// console.log(countDigits(inputString));

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0 - 20
//     "yahshi boshliq tanlang va koproq hato qiling", // 20 -30
//     "ozingiz ishlashni boshlang ", // 30 - 40
//     "siz kuch li bolgan narsalarni qiling", // 40 - 50
//     "yoshlarga investitsa qiling ", // 50 - 60
//     "endi dam oling", // 60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("nomerni yoz",null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }
// console.log('buyerdan otdi 0');
// maslahatBering(70, (err, data) => {
//  if (err) console.log("ERROR:", err);
//   console.log("javob:",data);
// });
// console.log('buyerdan otdi 1');


// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error ("nomerni yoz");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
       // return list[5];
    //    return new Promise((resolve, rijact) => {
    //     setTimeout(() => {
    //         resolve(list[5]);
    //     }, 5000);
    //    });
//     return new Promise((resolve, rijact) => {
//         setInterval(() => {
//             resolve(list[5]);
//         }, 5000);
//        });
       
//     }
// }
// then/catch 
// console.log('buyerdan otdi 0');

// maslahatBering(10)
// .then((data) => {maslahatBering(25)
//     .then((data) => {maslahatBering(35)
//         .then((data) => {
//          console.log("javob:",data);
//         }).catch((err) => {
//         console.log("ERROR:",err);
//         });
         
//         console.log('buyerdan otdi 1');
//      console.log("javob:",data);
//     }).catch((err) => {
//     console.log("ERROR:",err);
//     });
     
//     console.log('buyerdan otdi 1');
//  console.log("javob:",data);
// }).catch((err) => {
// console.log("ERROR:",err);
// });
 
// console.log('buyerdan otdi 1');
 // async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
// javob = await maslahatBering(70);
// console.log(javob);
// javob = await maslahatBering(33);
// console.log(javob);
// }
// run()

// console.log(" A - Task")
// function countLetter(letter, word) {
//     let count = 0;                                  // Harfning necha marta uchrashganligini hisoblash uchun                                              o'zgaruvchini hosil qildik va qiymatini 0 ga tengladik
//     for (let i = 0; i < word.length; i++) {         // Berilgan sozni har bir harfi tekshiramiz
//         if (word[i] === letter) {                   // Agar harf berilgan harf bilan bir xil bo'lsa =>
//             count++;                                // => qiymatni oshiramiz
//         }
//     }
//     return count;                                       //  natijasini qaytaramiz
// }

// console.log(countLetter("e", "engineer"));