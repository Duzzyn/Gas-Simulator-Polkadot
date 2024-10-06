async function buscaMoedas(selecionarCripto) {
  const buscaMoeda = await fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
  .then(response => response.json()).then(result => {
      result.forEach(moeda => {
        const option = document.createElement("option")
      
        option.textContent = `${moeda}`.toUpperCase()
        selecionarCripto.appendChild(option)
      })
  })
}

export default buscaMoedas