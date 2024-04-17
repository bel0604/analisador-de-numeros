function Analisar(){
    if (document.querySelector('input#txtn').value.length == 0){
    alert('Por favor ,insira um numero de 1 a 100')
    } else {
        document.querySelector('select#selana').innerHTML=``
        var n = Number(document.querySelector('input#txtn').value)
        for(let c = 1;c <= 1 ; c++){
            let Analisar = document.createElement('option')
            Analisar.text = `${n} foi adicionado` 
            Analisar.value = `ana${n}`
            document.querySelector ('select#selana') .appendChild(Analisar)
        }
    
        }
    }    


 
    
    
   
    
   