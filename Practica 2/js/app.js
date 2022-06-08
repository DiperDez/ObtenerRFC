const inputs = document.querySelectorAll('.form-control'),
      frmRFC = document.querySelector('#frmRFC');

let dataForm = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: ''
} 

let aPaterno, aMaterno, nombre, data;

eventListeners();
function eventListeners(){
   inputs.forEach(e => {
        e.addEventListener('blur', (e) => {
            dataForm[e.target.id] = e.target.value.toUpperCase();

            aPaterno = dataForm['apellidoPaterno'].substring(0, 2);  
            aMaterno = dataForm['apellidoMaterno'].substring(0, 1);  
            nombre = dataForm['nombre'].substring(0, 1)
            data = dataForm['fechaNacimiento'];

            while(data.includes('-')){
                data = data.replace('-', '');
            }

            data = data.substring(2, 8);

            const apellidosCompuestos = ['DE','LA','LAS','MC','VON','DEL','LOS','Y','MAC','VAN'];

            for(let i = 0; i < dataForm['apellidoPaterno'].length; i++){

                while(dataForm['apellidoPaterno'].includes(apellidosCompuestos[i])){
                    
                    dataForm['apellidoPaterno'] = dataForm['apellidoPaterno'].replace(apellidosCompuestos[i], '').trim();
                            
                    break;
                }

            }
        
        });
   });

   frmRFC.addEventListener('submit', (e) => {
       e.preventDefault();
       
       if(dataForm.nombre && dataForm.apellidoPaterno && dataForm.apellidoMaterno && dataForm.fechaNacimiento){
        const RFC = document.createElement('h2');
        RFC.textContent = `Tu RFC es ${aPaterno}${aMaterno}${nombre}${data}`;  

        frmRFC.appendChild(RFC);
        
       }else{
           alert('Los campos están vacios')
       }
   });

}


