export function getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy){

    const costEthanol = (1 / ethanolAutonomy) * ethanolPrice;
    const costGas = (1 / gasAutonomy) * gasPrice;

    if(costEthanol < costGas){
        console.log("ETHANOL IS BEST");
    } else {
        console.log("GASOLINE IS BEST");
    }
}