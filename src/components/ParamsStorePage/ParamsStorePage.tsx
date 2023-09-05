import React, { useEffect } from "react";
import { SSMClient, GetParametersCommand, SSM } from "@aws-sdk/client-ssm";
import { endpointList, getBaseUrlName } from "../../utils/getParametersName";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js"
import * as AWS from "aws-sdk";
import axios from 'axios';

const ParamsStorePage = ({ }: any) => {


    useEffect(() => {
    //     let authenticationData = {
    //         Username: 'vikas@abc.com',
    //         Password: 'Vikas123',
    //         "Permanent": true
    //     };

    //     let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    //     let poolData = {
    //         UserPoolId: 'ap-south-1_DzYnQHNXc',
    //         ClientId: '3i7mtrbcek3f3qe9ue4hj0824k'
    //     };
    //     let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    //     let userData = {
    //         Username : 'vikas@abc.com',
    //         Pool : userPool
    //     };
    //     let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    //     cognitoUser.authenticateUser(authenticationDetails, {
    //         onSuccess:  (result)=> {
    //             let accessToken = result.getAccessToken().getJwtToken();
    
    //             let idToken = result;
    //             console.log("getBaseUrlName() : ", result)
    //         },
    
    //         onFailure: (err)=> {
    //             alert(err);
    //         },
    
    // });


        // console.log("getBaseUrlName() : ", authenticationDetails)

        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //     IdentityPoolId:"ap-south-1:4275b728-b24a-4c8b-9428-48c8daf16667"
        // })



        // getSsmData()
        getUrlsFromJSON()
    }, [])

    const getUrlsFromJSON =async()=>{
        // const response = await axios.get('https://static-web-site-ssm.s3.ap-south-1.amazonaws.com/urls.json')
        const response = await axios.get('/urls.json')
        console.log("RESPONSE : ", response)
    }


    const getSsmData = async () => {
        const client = new SSM({ region: "ap-south-1" });
        // const client = new SSMClient({ region: "ap-south-1" });
        // const client = new SSMClient({
        //     region: "ap-south-1"
        //     // credentials: {
        //     //     accessKeyId: 'AKIATPAP7SQHMMCWNNMM',
        //     //     secretAccessKey: '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'
        //     // }
        // });
        const input = {
            Names: [
                getBaseUrlName(),
                ...endpointList()
            ],
            WithDecryption: false,
        };
        const command = new GetParametersCommand(input);
        try{

            const response = await client.send(command);
            console.log('RESPONSE : ', response)
        }catch(err){
            console.log("Err : ", err)
        }
    }

    return (
        <h1>Params Store Page</h1>
    )

}


export default ParamsStorePage