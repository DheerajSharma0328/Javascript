let set =  new Set();

set.add('Dheeraj');
set.add('Dheeraj sharma');
set.add('Dheeraj kaushik');
set.add('Dheeraj Don');
set.add('Dheeraj Don');



console.log(set.size);

for(let name of set){
    console.log(name);
}

console.log(set.has('Dheeraj Don'));
console.log(set.delete('Dheeraj Don'));
console.log(set);