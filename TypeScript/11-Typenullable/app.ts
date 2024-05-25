type User = {
    address: {
        street: {
            name: string
        }
    }
}

const user: User = {
    address: {
        street: {
            name: 'Plaza España'
        }
    }
};

user?.address?.street?.name === 'Plaza España' 
    ? console.log('Enhorabuena!. Tu envío será gratuito') 
    : console.log('Ops!. Te costará 3€ el coste de envío.')

function getDefinirOrDefault(stringOrNull: string | null): string {
    return stringOrNull ?? 'default'
}