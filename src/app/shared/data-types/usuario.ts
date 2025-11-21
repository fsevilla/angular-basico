interface UserAddress {
    street: string;
    zipcode: string;
}

export interface IUsuario {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
}
