export function getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy){


    const costEthanol = ethanolPrice / ethanolAutonomy;
    const costGas = gasPrice / gasAutonomy;


    

    if(costEthanol < costGas){
    
        console.log("ETHANOL IS BEST");
        return "ETANOL";
        
         
    } else {
        
        console.log("GASOLINE IS BEST");
        return "GASOLINA";
    }
}