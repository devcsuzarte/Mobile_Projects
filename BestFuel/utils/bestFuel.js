export function getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy){

    const ethanolPKM = (1 / ethanolAutonomy).toFixed(2);
    const gasPKM = (1 / gasAutonomy).toFixed(2);
    const costEthanol = ethanolPKM * ethanolPrice;
    const costGas = gasPKM * gasPrice;
    

    if(costEthanol < costGas){
    
        console.log("ETHANOL IS BEST");
        return "ETANOL";
        
         
    } else {
        
        console.log("GASOLINE IS BEST");
        return "GASOLINA";
    }
}