import { Wine } from "../types/WineSchema"

export const segregateData = (data:Wine[]) =>{
    let alcohol1: Wine[] = []
    let alcohol2: Wine[]  = []
    let alcohol3: Wine[]  = []

    data.forEach((wine:any)=>{
      let gamma = (Number(wine['Ash'])*Number(wine['Hue']))/Number(wine['Magnesium'])
      wine.Gamma = gamma.toFixed(3)
      if(wine.Alcohol===1){
        alcohol1.push(wine) 
      }
      if(wine.Alcohol===2){
        alcohol2.push(wine) 
      }
      if(wine.Alcohol===3){
        alcohol3.push(wine) 
      }
    })

    return { alcohol1, alcohol2, alcohol3 }
}