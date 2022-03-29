const initialCurrency= document.querySelector("#initialCurrency")
const finalCurrency= document.querySelector("#convertTo")
const valueToBeConverted = document.querySelector("#value")
const convert_Button = document.querySelector("button")
const dollar = 4.77
const euro = 5.23
const bitcoin = 227736.56


const convertButton = (result) => {

    // From Real To Another Currency
  
    if (initialCurrency.value == "real" && finalCurrency.value == "dollar") {
        result = new Intl.NumberFormat('en-US',
             { style: 'currency', currency: 'USD' }
        ).format(valueToBeConverted.value / dollar)
    }

    else if (initialCurrency.value == "real" && finalCurrency.value == "euro") {
        result = new Intl.NumberFormat('de-DE',
               { style: 'currency', currency: 'EUR' }
             ).format(valueToBeConverted.value / euro)
            }

    else if (initialCurrency.value == "real" && finalCurrency.value == "bitcoin") {
        result = valueToBeConverted.value / bitcoin
    }
            
    // From Dollar To Another Currency
    
    else if (initialCurrency.value == "dollar" && finalCurrency.value == "real") {
        result = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
      ).format(valueToBeConverted.value * dollar)
    }

    else if (initialCurrency.value == "dollar" && finalCurrency.value == "euro") {
        result = new Intl.NumberFormat('de-DE',
               { style: 'currency', currency: 'EUR' }
             ).format(valueToBeConverted.value * (dollar / euro))
    }

    else if (initialCurrency.value == "dollar" && finalCurrency.value == "bitcoin") {
        result = valueToBeConverted.value * (dollar / bitcoin)
    }
            
    // From Euro To Another Currency
    
    else if (initialCurrency.value == "euro" && finalCurrency.value == "real") {
        result = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
      ).format(valueToBeConverted.value * euro)
    }

    else if (initialCurrency.value == "euro" && finalCurrency.value == "dollar") {
        result = new Intl.NumberFormat('en-US',
             { style: 'currency', currency: 'USD' }
        ).format(valueToBeConverted.value * (euro / dollar))
    }

    else if (initialCurrency.value == "euro" && finalCurrency.value == "bitcoin") {
        result = valueToBeConverted.value * (euro / bitcoin)
    }
            
    // From Bitcoin To Another Currency
    
    else if (initialCurrency.value == "bitcoin" && finalCurrency.value == "real") {
        result = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
      ).format(valueToBeConverted.value * bitcoin)
    }

    else if (initialCurrency.value == "bitcoin" && finalCurrency.value == "dollar") {
        result = new Intl.NumberFormat('en-US',
             { style: 'currency', currency: 'USD' }
        ).format(valueToBeConverted.value * (bitcoin * (valueToBeConverted.value / dollar)))
    }

    else if (initialCurrency.value == "bitcoin" && finalCurrency.value == "euro") {
        result = new Intl.NumberFormat('de-DE',
               { style: 'currency', currency: 'EUR' }
             ).format(valueToBeConverted.value * (bitcoin * (valueToBeConverted.value / euro)))    
    }

    // Initial Currency To The Same Currency

    else if (initialCurrency.value == "real" && finalCurrency.value == "real") {
               result = new Intl.NumberFormat('pt-BR',
               { style: 'currency', currency: 'BRL' }
             ).format(valueToBeConverted.value)
            }

    else if (initialCurrency.value == "dollar" && finalCurrency.value == "dollar") {
               result = new Intl.NumberFormat('en-US',
               { style: 'currency', currency: 'USD' }
             ).format(valueToBeConverted.value)
            }        

    else if (initialCurrency.value == "euro" && finalCurrency.value == "euro") {
               result = new Intl.NumberFormat('de-De',
            { style: 'currency', currency: 'EUR' }
      ).format(valueToBeConverted.value)
     }

    else if (initialCurrency.value == "bitcoin" && finalCurrency.value == "bitcoin") {
        result = valueToBeConverted.value }
                return result
}
const initialCurrencyValue = () => {
    return initialCurrency.value
}
const finalCurrencyValue = () => {
    return finalCurrency.value
}
const flagChange = () => {
    const firstFlag = document.querySelector(".flag")
    const firstValue = document.querySelector(".initialValue")

    if (initialCurrency.value == "real"){
        firstFlag.src = "./assets/real.svg"
        firstFlag.alt = "Bandeira do Brasil"
        document.querySelector(".firstCurrencyName").innerHTML = "Real"
        firstValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
      ).format(valueToBeConverted.value)
    }
    
    else if (initialCurrency.value == "dollar"){
        firstFlag.src = "./assets/dollar.svg"
        firstFlag.alt = "Bandeira dos EUA"
        document.querySelector(".firstCurrencyName").innerHTML = "Dollar"
        firstValue.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
       ).format(valueToBeConverted.value)
    }
    
    else if (initialCurrency.value == "euro"){
        firstFlag.src = "./assets/euro.svg"
        firstFlag.alt = "Bandeira da União Europeia"
        document.querySelector(".firstCurrencyName").innerHTML = "Euro"
        firstValue.innerHTML = new Intl.NumberFormat('de-DE',
         { style: 'currency', currency: 'EUR' }
       ).format(valueToBeConverted.value)
    }
    
    else if (initialCurrency.value == "bitcoin"){
        firstFlag.src = "./assets/bitcoin.svg"
        firstFlag.alt = "Simbolo do Bitcoin"
        document.querySelector(".firstCurrencyName").innerHTML = "Bitcoin"
        firstValue.innerHTML = valueToBeConverted.value
    }
}
const finalCurrencyFlagChange = () => {
    const finalFlag = document.querySelector(".flag2")
    const finalValue = document.querySelector(".finalValue")

    if (finalCurrency.value == "real"){
       finalFlag.src = "./assets/real.svg"
       finalFlag.alt = "Bandeira do Brasil"
       document.querySelector(".lastCurrencyName").innerHTML = "Real"
    }
    
    else if (finalCurrency.value == "dollar"){
        finalFlag.src = "./assets/dollar.svg"
        finalFlag.alt = "Bandeira dos EUA"
        document.querySelector(".lastCurrencyName").innerHTML = "Dollar"
    }
    
    else if (finalCurrency.value == "euro"){
        finalFlag.src = "./assets/euro.svg"
        finalFlag.alt = "Bandeira da União Europeia"
        document.querySelector(".lastCurrencyName").innerHTML = "Euro"
    }
    
    else if (finalCurrency.value == "bitcoin"){
        finalFlag.src = "./assets/bitcoin.svg"
        finalFlag.alt = "Simbolo do Bitcoin"
        document.querySelector(".lastCurrencyName").innerHTML = "Bitcoin"
    }
}
const valueConverted = () => {
    const finalValue = document.querySelector(".finalValue")

    if (finalCurrency.value == "real"){
       finalValue.innerHTML = convertButton()
    }
    
    else if (finalCurrency.value == "dollar"){
        finalValue.innerHTML = convertButton()
    }
    
    else if (finalCurrency.value == "euro"){
        finalValue.innerHTML = convertButton()
    }
    
    else if (finalCurrency.value == "bitcoin"){
        finalValue.innerHTML = convertButton()
    }
}

convert_Button.addEventListener("click", valueConverted)
convert_Button.addEventListener("click", convertButton)
initialCurrency.addEventListener("change", initialCurrencyValue)
initialCurrency.addEventListener("change", flagChange)
finalCurrency.addEventListener("change", finalCurrencyValue)
finalCurrency.addEventListener("change", finalCurrencyFlagChange)
valueToBeConverted.addEventListener("change", flagChange)
valueToBeConverted.addEventListener("change", finalCurrencyFlagChange)