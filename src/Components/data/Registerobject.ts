export type RegisterData={
usertype:string;
fname:string;
email:string;
tel:string;
country:string;
password:string;
PConfirm:string;
cateid:string;
contid:string;
}

export type RegisterError={
erruserType?:string;
errFullname?:string;
errEmail?:string;
errPhone?:string;
errCountry?:string;
Password?:string;
errPConfirm?:string;
errcateoryid?:string;
errcontentid?:string;
}

export type Loginobject={
    emails:string;
    passwords:string;
}

export type LoginError={
    emailError?:string;
    passwordError?:string;
}

export type LoginResp={
    id:string;
    cateid:string;
    contentid:string;
}