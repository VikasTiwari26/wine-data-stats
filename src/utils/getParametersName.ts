const env: any = "mliUat"

const getCurrentEnv = () => {
    switch (env) {
        case 'mliDev':
            return 'dev'
        case 'mliUat':
            return 'uat'
        case 'mliProd':
            return 'prod'
        default:
            return 'dev'
    }
}

export const getBaseUrlName = () => {
    return `/myApp/${getCurrentEnv()}/ui/baseUrl`
}

enum List {
    "otp" = "getOtp",
    "verify" = "verify"
}

const endpoints = [
    { eName: List.verify },
    { eName: List.otp }
]
export const endpointList = () => {
    console.log(List)
    let arr: string[] = []
    endpoints.forEach((endpoint) => {
        let parameterName = getEndpointName(endpoint.eName)
        arr.push(parameterName)
    })
    return arr
}

export const getEndpointName = (eName: string) => {
    return `/myApp/${getCurrentEnv()}/ui/endponit/${eName}`
}


