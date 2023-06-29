import { Wine } from "../types/WineSchema";

export const calculateMean = (data: Wine[], property: String) => {
    let key = property as keyof Wine
    let totalEntries: number = data.length
    let sum = 0
    data.forEach((d: Wine) => {
        sum += Number(d[key])
    })

    const mean: number = sum / totalEntries

    return mean.toFixed(3)
}


export const calculateMedian = (data: Wine[], property: String) => {
    let key = property as keyof Wine
    let size: number = data.length
    let isSizeEven: boolean = size % 2 === 0
    let median: number | null = null
    let sortedData: Wine[] = data.sort((d1: Wine, d2: Wine) => Number(d1[key]) - Number(d2[key]))
    if (isSizeEven) {
        let sumOfMiddleElements = Number(sortedData[(size / 2) - 1][key]) + Number(sortedData[(size / 2)][key])
        median = sumOfMiddleElements / 2
    } else {
        let indexOfMedian: number = Math.ceil(size / 2)
        median = Number(sortedData[indexOfMedian][key])
    }
    return median.toFixed(3)
}

export const calculateMode = (data: Wine[], property: String) => {
    let key = property as keyof Wine
    const mode: any = {}
    let maxRepeatedValue:any = 0
    let count = 0
    data.forEach((d: Wine) => {
        let modeKey = d[key] as keyof any
        if (mode[modeKey]) {
            mode[modeKey]++
        } else {
            mode[modeKey] = 1
        }

        if(count< mode[modeKey]){
            maxRepeatedValue = Number(modeKey)
            count =  mode[modeKey]
        }
    })

    return maxRepeatedValue.toFixed(3)
}