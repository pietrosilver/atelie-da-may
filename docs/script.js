const btn = document.getElementById("add-btn");
const container = document.getElementById("total-value");
const braidType = document.getElementById("select-braids");
const braidValue = document.getElementById("select-complexity");
const amount = document.getElementById("quantidade");
const color = document.getElementById("cor");
const btnContainer = document.getElementById("container-for-scheduling")
const deleteBtn = document.getElementById("delete-btn");
const loading = document.getElementById("loading");

const valueOfSum = [];
const namesOfBraid = [];
const namesOfComplexity = [];
const nameOfColor = [];
const quantity = [];
const aditionalValue = []; 


const typeOfBraids = [ 

{
name:"nagô com jumbo",
básico: 150,
médio:200,
elaborado:250,
"muito-elaborado":350,
},

{
name:"nagô sem jumbo cabeça inteira",
básico:100,
médio:125,
elaborado:160,
"muito-elaborado":200,
},

{
name:"nagô sem jumbo frente, topo, lateral, meio preso",
básico:40,
médio:70,
elaborado:100,
"muito-elaborado":150,
},

{ 
name:"fulani braids",
básico:150,
médio:200,
elaborado:270,
"muito-elaborado":350,
}, 

{
name:"gipsy braids",
básico:250,
médio:330,
elaborado:420,
"muito-elaborado":550,
},

{
name:"ponytail braids",
básico:160,
médio:190,
elaborado:230,
"muito-elaborado":280,
},

{
name:"french-curly braids",
básico:200,
médio:260,
elaborado:320,
"muito-elaborado":400,
},

{
name:"boho braids",
básico:100,
médio:180,
elaborado:260,
"muito-elaborado":350,
},

{
name:"box-braids",
básico:120,
médio:220,
elaborado:330,
"muito-elaborado":470,
},

{
name:"knotless-braids",
básico:170,
médio:230,
elaborado:300,
"muito-elaborado":400,
}
];

const colorPrice = [
 {
  name:"preto",
  price:0,
 },

  {
   name:"castanho",
   price:0,
  },

  {
   name:"loiro",
   price:50,
  },

   {
    name:"colorido",
    price:"A combinar",
   },

  {
    name:"ruivo",
    price:0,
  },

  {
    name:"duas-cores",
    price:40,
  },

  {
    name:"mais-de-duas-cores",
    price:50,
  }
];

const calc = () => {
  const braidName = braidType.value;
  const braidModel = braidValue.value;
  const colorValue = color.value;
  const chosen = typeOfBraids[braidName];
  const nameOfBraid = chosen.name;
  let valueOfBraid = chosen[braidModel];
  const colorSelected = colorPrice[colorValue];
  const colorName = colorSelected.name;
  let priceColor = colorSelected.price;

  
  const valuesMultiplied = isNaN((valueOfBraid + priceColor) * amount.value) ? valueOfBraid * amount.value : (valueOfBraid + priceColor) * amount.value;


  valueOfSum.push(valuesMultiplied);
  namesOfBraid.push(nameOfBraid);
  namesOfComplexity.push(braidModel);
  nameOfColor.push(colorName);
  quantity.push(amount.value);
  aditionalValue.push(priceColor);



  if(amount.value <= 0 || amount.value === "" ) {
    alert("Você precisa adicionar uma quantidade");
  }
  else {
    setTimeout(() => {
      $(document).ready ( function() {
        $("#loading").removeClass("hidden");
      });
    },100);

    setTimeout(() => {
      $(document).ready ( function() {
        $("#loading").addClass("hidden");
      });

      container.innerHTML += `
      <div class="container d-flex justify-content-center align-items-center flex-column pb-3" 
           data-value="${valuesMultiplied}" 
           data-name="${nameOfBraid}" 
           data-model="${braidModel}" 
           data-color="${colorName}" 
           data-quantity="${amount.value}" 
           data-additional="${priceColor}">
        <span class="pt-3" style="border-top: 1px dashed grey">
          <span class="description-text" style="font-weight: bold;">Trança escolhida</span>: ${nameOfBraid}
        </span>
        <span><span class="description-text" style="font-weight: bold;">Tipo escolhido</span>: ${braidModel}</span>
        <span><span class="description-text" style="font-weight: bold;">Cor</span>: ${colorName}</span>
        <span><span class="description-text" style="font-weight: bold;">Valor adicional da cor</span>: R$${priceColor}</span>
        <span><span class="description-text" style="font-weight: bold;">Quantidade</span>: ${amount.value}x</span>
        <span><span class="description-text" style="font-weight: bold;">Valor aproximado</span>: R$${valuesMultiplied}</span>
        <span class="pb-3" id="value-span">
          <span class="description-text" style="font-weight: bold;">Valor total aproximado</span>: R$${updateValues()}
        </span>
        <button onclick="deleteBudget(this)" type="button" class="btn btn-sm pb-1 delete-btn" id="delete-btn">
          <i class="fas fa-trash-can"></i>
        </button> 
      </div>`;
    }, 3000);
  }

  return valuesMultiplied;
};

const main = () => {

    $(document).ready(function() {
     $("#ancor-1").addClass("animate__animated animate__slideInDown active");
     $("#ancor-2").removeClass("animate__animated animate__slideInDown active");
     $("#ancor-3").removeClass("animate__animated animate__slideInDown active");
     $("#main").addClass("animate__animated animate__slideInLeft");
     $("#description").addClass("animate__animated animate__slideInLeft");
     $("#main").removeClass("hidden");
     $("#description").removeClass("hidden");
     $("#catalog").addClass("hidden");
     $("#budget").addClass("hidden");
    });

}

const catalog = () => {

    $(document).ready(function() {
      $("#ancor-2").addClass("animate__animated animate__slideInDown active");
      $("#ancor-1").removeClass("animate__animated animate__slideInDown active");
      $("#ancor-3").removeClass("animate__animated animate__slideInDown active");
      $("#main").addClass("hidden");
      $("#description").addClass("hidden");
      $("#budget").addClass("hidden");
      $("#catalog").removeClass("hidden");
      $("#catalog").addClass("animate__animated animate__slideInLeft");
    });

} 

const budget = () => {

    $(document).ready(function() {
      $("#ancor-3").addClass("animate__animated animate__slideInDown active");
      $("#ancor-1").removeClass("animate__animated animate__slideInDown active");
      $("#ancor-2").removeClass("animate__animated animate__slideInDown active");
      $("#main").addClass("hidden");
      $("#description").addClass("hidden");
      $("#catalog").addClass("hidden");
      $("#budget").removeClass("hidden");
      $("#budget").addClass("animate__animated animate__slideInLeft");
    });

}

btn.addEventListener("click", (e) => {

e.preventDefault();
calc();

setTimeout(() => {
createBtn();
}, 3500);
});


const deleteBudget = (btn) => {
  const containerDiv = btn.closest(".container");
  const val = parseInt(containerDiv.getAttribute("data-value")); 
  const braidName = containerDiv.getAttribute("data-name");
  const braidModel = containerDiv.getAttribute("data-model");
  const colorName = containerDiv.getAttribute("data-color");
  const qty = containerDiv.getAttribute("data-quantity");
  const additional = containerDiv.getAttribute("data-additional");

  const index = valueOfSum.indexOf(val);

  if (index !== -1) {
    valueOfSum.splice(index, 1);
    namesOfBraid.splice(index, 1);
    namesOfComplexity.splice(index, 1);
    nameOfColor.splice(index, 1);
    quantity.splice(index, 1);
    aditionalValue.splice(index, 1);
  }

  containerDiv.remove(); 
  updateValues(); 
  createBtn();
};

const updateValues = () => {
  const total = valueOfSum.reduce((ac, val) => ac + val, 0);
  const span = document.querySelector("#value-span");
  if (span) span.innerHTML = `<span class="description-text" style="font-weight: bold;">Valor total aproximado</span>: R$${total}`;
  return total;
};


const msg = `
Trança: ${namesOfBraid}
Tipo: ${namesOfComplexity}
Cor: ${nameOfColor}
Qtd: ${quantity}
Adicional: R$ ${aditionalValue}
Total aproximado: R$ ${updateValues()}
`;

const createBtn = () => {

updateValues();

  const phone = "5511977541788";

  if (namesOfBraid.length === 0) {
    btnContainer.innerHTML = `
      <button class="btn btn-default sm" disabled>Adicione itens primeiro</button>
    `;
    return;
  }

   
  let itens = namesOfBraid.map((nome, i) => {
    return ` ${nome} | Tipo: ${namesOfComplexity[i]} | Cor: ${nameOfColor[i]} | Qtd: ${quantity[i]} | Adicional: R$${aditionalValue[i]};
  `}).join("\n");

  
  let total = updateValues();

  
  let mensagem = `Olá! Gostaria de agendar:\n\n${itens}\n\n💰 Total aproximado: R$${total}`;

  
  let link = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

  
  btnContainer.innerHTML = `
    <a href="${link}" id="agendar-link" target="_blank">
      <button class="btn btn-default sm" id="agendar-btn">Agendar</button>
    </a>
  `;
};