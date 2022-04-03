const preencherForm = (end) =>{
    document.getElementById('rua').value = end.logradouro
    document.getElementById('bairro').value = end.bairro
    document.getElementById('cidade').value = end.localidade
    document.getElementById('estado').value = end.uf
}
const verificaCPF = async() => {
    const cep = document.getElementById('cep').value;

    if(cep != ""){
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
        const end = await dados.json();
        console.log(end)
        preencherForm(end);
    }
    else{
        document.getElementById('Rua').value = ('')
        document.getElementById('Bairro').value = ('')
        document.getElementById('Cidade').value = ('')
        document.getElementById('Estado').value = ('')
    }
}