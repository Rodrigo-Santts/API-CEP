function  pesquisaCep(cep) {
   let url =  'https://viacep.com.br/ws/'+ cep + '/json/unicode';
   console.log(url);
   xmlHttp = new XMLHttpRequest();
   xmlHttp.open('GET', url);
   xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
         let dadosJSON =  xmlHttp.responseText;
         let objetoJSON = JSON.parse(dadosJSON);   
         let endereco = document.getElementById('endereco').value = objetoJSON['logradouro'];
         let bairro = document.getElementById('bairro').value = objetoJSON['bairro'];
         let cidade = document.getElementById('cidade').value = objetoJSON['localidade'];
         let uf = document.getElementById('uf').value = objetoJSON['uf'];
      }
   }
   endereco.value = '';
   bairro.value = '';
   cidade.value = '';
   uf.value = '';
   xmlHttp.send();
}