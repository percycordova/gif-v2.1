export const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export const replaceHyphens = (str) => {
    return str.replace(/ /g, "-");
}
export const replaceBlanks = (str) => {
    return str.replace(/-/g, " ");
}


export const validate = ({ nombre, correo }) => {
    let errores = {};
    if (!nombre.trim()) {
        errores.nombre = 'Por favor ingrese un nombre';
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre)) {
        errores.nombre = 'El nombre solo puede contener letras y espacios';
    }
    if (!correo.trim()) {
        errores.correo = 'Por favor ingrese un correo';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo)) {
        errores.correo = 'Ingrese un correo válido';
    }

    return errores;
}