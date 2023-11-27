export function getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy){

    const costEthanol = (1 / ethanolAutonomy) * ethanolPrice;
    const costGas = (1 / gasAutonomy) * gasPrice;
    let bestFuel;

    if(costEthanol < costGas){
        bestFuel = "Etanol";
        console.log("ETHANOL IS BEST");
    } else {
        bestFuel = "Gasolina";
        console.log("GASOLINE IS BEST");
    }

    return bestFuel;
}