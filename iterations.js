// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log("loooooooooooooooop");
// for (let j = 1; j < 5; j++) {
//     console.log(j);
// }

// for (let k = 1; k <= 10; k++) {
//     const element = k;
//     if (element == 5) {
//         console.log(`5 is best`);
//     }

//     console.log(`element k: ${element}`);
// }

// for (let k = 1; k <= 5; k++) {
//     for (let s = 1; s <= 10; s++) {
//         // console.log(`element s is inner loop: ${s}`);    //  first this will print
//         console.log(`${k} * ${s} = ${k * s}`);
//     }
//     // console.log(`element k outer loop: ${k}`);           //  second this will print
// }

// let array = ["frontend", "backend", "fulstack", "sirahstacks"];
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// break and continue

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`value of i before if loop: ${element}`);
    if (i == 5) {
        console.log(`Identified 5 here`);
        break;
    }
    console.log(`value of i after if loop: ${element}`);
}
for (let z = 1; z <= 10; z++) {
    const element = z;
    console.log(`value of z before if loop: ${element}`);
    if (z == 5) {
        console.log(`Identified 5 here`);
        continue;
    }
    console.log(`value of z after if loop: ${element}`);
}
