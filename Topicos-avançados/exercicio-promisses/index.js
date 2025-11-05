async function calcImc(weight , height ) {
    if (isNaN(weight) || isNaN(height )) {
        return Promise.reject('arguments must be of type number')
    }
    return (weight / (height  * height ))
}

async function showImc(weight, height) {
    try {

        console.log(`Calculando o IMC para o peso ${weight} e altura ${height}`)

        const result = await calcImc(weight,height)

        console.log(`O resolutado do IMC foi de ${result}.`)

        if (result < 18.5) console.log(`Situação : Magreza`)
        else if(result <25) console.log(`Situação : Normal`)
        else if (result < 30) console.log(`Situação Sobrepeso`)
        else if (result < 40) console.log(`Situação : Obesidade`)
        else console.log(`Situação : Obesidade Grave`)

    } catch (error) {
        console.log(error)
    }
}


showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)

