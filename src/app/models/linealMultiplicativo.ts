export interface MultiplicativoCongruencialSecuencia{
    i:number,
    operation:string,
    xi:number,
    ri:string,
}

export interface MultiplicativoCongruencial{
    x0:number,
    k:number,
    g:number,
    a:number,
    m:number,
    p:number,
    secuencia?:MultiplicativoCongruencialSecuencia [],
}

