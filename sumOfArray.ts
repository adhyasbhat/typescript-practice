// There are twp arrays a=[1,5,7,8] and b =[3,4,9,10]. Create another array with name sum and store sum of a[i] and b[i], i.e sum =[4,9,16,18]

let a : number[] = [1,5,7,8]
let b : number[] = [3,4,9,10]
let i : number
let sum : number[] = []
for(i=0;i<a.length;i++){
    sum.push(a[i]+b[i])

}
console.log(sum)