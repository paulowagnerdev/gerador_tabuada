////////////////////////////////////////////////////////////////////// input

const inputTabuada = document.querySelector("#tabuada");
const inputMultiplica = document.querySelector("#multiplica");
const divResult = document.querySelector("#div-result");

let tabuada = null;
let multiplica = null;

inputTabuada.addEventListener("input", (e) => {
    tabuada = inputTabuada.value;
})

inputMultiplica.addEventListener("input", (e) => {
    multiplica = inputMultiplica.value;
})

////////////////////////////////////////////////////////////////////// input

/////////////////////////////////////////////////////////////////////////////// Button

const buttonResult = document.querySelector("#button-calcular");

buttonResult.addEventListener("click", (e) => {
    if(tabuada!=null&&multiplica!=null){
        listTabuada = [];
        geraTabuada(tabuada,multiplica);
    }
})

//////////////////////////////////////////////////////////////////////////////Button


// function 
//let listTabuada = [];



function geraTabuada(numeroTabuada,numeroMulti){

    for(let i = 0;i<=numeroMulti;i++){

        
       const resultDiv = `<div class="result"><div>${tabuada} x ${i} = ${numeroMulti*i}</div></div>`;

       const parse = new DOMParser();


       const htmlTemplate = parse.parseFromString(resultDiv, "text/html");

       
       const row = htmlTemplate.querySelector(".result");

       console.log(row);

       divResult.appendChild(row);


        //listTabuada.push(`${numeroTabuada} X ${i} = ` + `${numeroTabuada*i}` + "<br>");
    }

    
    

   // let stringTabuada = listTabuada.toString()

    //divResult.innerHTML = stringTabuada.replace(/,/g,'');
}

// function 

