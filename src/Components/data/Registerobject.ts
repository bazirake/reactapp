import { ReactNode } from "react";

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

export type ResetpasswordError={
errEmail?:string;

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
    fname:string;
    emails:string;
    usertype:string;
    country:string;
    
}


export type UserProfile={
      fname:string;
      emails:string;
      usertype:string;
      country:string;
      tel:string;
      password:string;
      statuscode:string;
}

export type userupdateErr={
    fnameerr?:string;
    emailerr?:string;
    roleerr?:string;
    addresserr?:string;
    telerr?:string;
}

export type updateUser={
    fname:string;
    emails:string;
    usertype:string;
    country:string;
    tel:string;
}

export type emailobject={
    email:string;

}

export type resetError={
    ferror?:string;
}
