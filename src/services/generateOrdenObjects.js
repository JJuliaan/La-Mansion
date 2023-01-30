
const generateOrdenObject = ({
    nombre= "",
    email= "",
    telefono= "",
    cart = [],
    total = 0

}) => {
    return{
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono
        },
        items: cart,
        total: total,
        createAt: new Date().toLocaleString()
    }
}

export default generateOrdenObject