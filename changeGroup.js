
import AWS from "aws-sdk";
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export async function main(event, context) {
    var params = {
      GroupName: 'admin',
      UserPoolId: 'eu-west-1_lqYtitXfC',
      Username: '9899f6cf-a070-4e15-8878-2026363b3d9c'
    };
  
    cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
      if (err) console.log("Error");
      else     console.log("Success");
    });
  
    console.log("Executed.");
  
    context.succeed(event);
}