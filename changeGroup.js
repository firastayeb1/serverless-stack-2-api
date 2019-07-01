import { success, failure } from "../libs/response-lib";
import AWS from "aws-sdk";

export async function main(event, context) {
    const data = JSON.parse(event.body);
    var cognitoISP = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
    
    const authProvider = event.requestContext.identity.cognitoAuthenticationProvider;
    const parts = authProvider.split(':');
    const userPoolIdParts = parts[parts.length - 3].split('/');
    const userPoolId = userPoolIdParts[userPoolIdParts.length - 1];
    
    var params = {
        GroupName: data.groupName,
        UserPoolId: userPoolId,
        Username: data.username
    };

    try {
        await cognitoISP.adminAddUserToGroup(params).promise();
        return success({ status: true });
    } catch (e) {
        return failure({ message: e.message });
    }
}