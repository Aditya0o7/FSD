// let ar = [1,2,3,34,33,45];
// let newar = ar.filter((x)=>x%2==0).map((x)=>x*3);

// console.log(newar);

// const students = [
//     {
//         name: "Alice",
//         score: "50"
//     },
//     {
//         name: "Bob",
//         score: "64"
//     },
//     {
//         name: "Rahul",
//         score: "80"
//     },
//     {
//         name: "Auri",
//         score: "90"
//     }
// ]

// let newstudent = students.filter(x=>x.score>60).map((x)=>x.score*3).reduce((x,y)=>x+y,0 );
// console.log(newstudent);


// console.log("start");
// setTimeout(()=>{
//     console.log("1st task done");
//     setTimeout(()=>{
//         console.log("2nd task done");
//         setTimeout(()=>{
//             console.log("3rd task done");
//         },3000);
//     },2000);
    
// },1000);
// console.log("End");

// const myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// });

// myPromise
//     .then((message)=>console.log(message))
//     .catch((error)=>("Error fetching data"+ error));


    // function task(message,delay){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             console.log(message);
    //             resolve();
    //         },delay);
    //     });
    // }
    // task("First task completed",1000)
    // .then(()=>task("Second task is completed",2000))
    // .then(()=>task("Third task is completed",3000));


