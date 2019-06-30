
import AWS from "aws-sdk";
//var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export async function main(event, context) {
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
    var params = {
      GroupName: 'admin',
      UserPoolId: 'eu-west-1_lqYtitXfC',
      Username: 'firastayeb1@gmail.com'
    };
  
    cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
      if (err) console.log("Error");
      else     console.log("Success");
    });
  
    console.log("Executed.");
  
    context.succeed(event);
}