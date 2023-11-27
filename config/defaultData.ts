type DefaultData = {
    phone: {
        label: string;
        href: string;
    };

    email: string;
    contactFace?: string;
    somechanges?: string;

}

export const defaultData: DefaultData = {
    email: 'belmint@mail.ru',
    phone: {
        href: '+79524346863',
        label: '8 (952) 434-68-63'
    }
}