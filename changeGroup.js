
var AWS = require('aws-sdk');
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export async function main(event, context) {
    var params = {
      GroupName: 'admin',
      UserPoolId: process.env.userPoolId,
      Username: event.requestContext.identity.cognitoIdentityId
    };
  
    cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
      if (err) console.log("Error");
      else     console.log("Success");
    });
  
    console.log("Executed.");
  
    context.succeed(event);
}