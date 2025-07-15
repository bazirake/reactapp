export type RegisterData={
userType:string;
Fullname:string;
Email:string;
Phone:string;
Country:string;
Password:string;
PConfirm:string;
cateoryid:string;
contentid:string;

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