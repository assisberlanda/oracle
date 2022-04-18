let codigo = {a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat'};

let frase = 'gostaria que voce codificasse essa frase';//document.querySelector('textarea');
for (let i = 0; i < codigo.length; i++) {
    let fraseCodificada = frase.replace(/frase/g, codigo[i]);
    console.log(fraseCodificada);
}