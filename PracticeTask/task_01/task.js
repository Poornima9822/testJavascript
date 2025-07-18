let userType = 'employee';
let serviceType;

switch(userType){
    case "employee":
        serviceType = "have access to Dietary services";
        break;
    case 'entrollled_member':
        serviceType = "have access to Dietary service and one-on-one interaction with dietician";
        break;
    case 'subscriber':
        serviceType = "have partial access to facilitate Dietary services";
        break;
    case 'non_subscriber':
        serviceType = "need to entroll or atleast subscribe first to avail the facility";
        break;
    default:
        serviceType = "invalid user.";
        break;
}

console.log("Service Type:", serviceType);