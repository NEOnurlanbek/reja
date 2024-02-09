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

console.log(" A - Task")
function countLetter(letter, word) {
    let count = 0;                                  // Harfning necha marta uchrashganligini hisoblash uchun                                              o'zgaruvchini hosil qildik va qiymatini 0 ga tengladik
    for (let i = 0; i < word.length; i++) {         // Berilgan sozni har bir harfi tekshiramiz
        if (word[i] === letter) {                   // Agar harf berilgan harf bilan bir xil bo'lsa =>
            count++;                                // => qiymatni oshiramiz
        }
    }
    return count;                                       //  natijasini qaytaramiz
}

console.log(countLetter("e", "engineer"));