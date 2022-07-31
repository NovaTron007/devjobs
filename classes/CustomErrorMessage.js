class CustomErrorMessage extends Error {
    constructor(message, statusCode){
        super(message) // use message property from error class
        this.statusCode = statusCode // add new property to error class
    }
}

export default CustomErrorMessage