function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

//   function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//       attempts++;
//       let result = tossCoin();
//       console.log(`${result} was flipped`);
//       if (result === "heads") {
//         headsCount++;
//       } else {
//         headsCount = 0;
//       }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
//   }
//   console.log(fiveHeadsSync());
//   console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;
        while (headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            result === "heads" ? headsCount++ : headsCount = 0
            // commented out code below to shorten my code
            // if (result === "heads") {
            //     headsCount++;
            // } else {
            //     headsCount = 0;
            // }
        }
        if ( attempts <= maxAttempts ) {
            resolve (` It took ${attempts} tries to get to five heads`)
        }

        else {
            reject (`Attempts exceeded ${maxAttempts}.`)
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
