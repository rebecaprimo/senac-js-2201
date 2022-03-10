const p = document.getElementById('paragrafo');

p.innerText = 'meu texto!';

const cores = ['blue', 
               'red', 
               'green', 
               'brown', 
               'yellow', 
               'navy', 
               'pink'];

for(i = 0, c = 0; i < 100; i++, c++)
{
    p.style.background = cores[c];
    if(c >= 6) c = -1;
}

console.log(p);