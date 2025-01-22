export type LoginTypes ={
    email:string;
    password:string;
}
export type SignUpTypes ={
    username:string;
    email:string;
    password:string;
}

export interface UserType {
    id: string
    name: string,
    email:string,
    contact: string
}

export type LoginResponse = {
    message: string
    status_code: number,
    data: {
      access_token: string
      expires_at: number,
      data: UserType
    }
  }
  