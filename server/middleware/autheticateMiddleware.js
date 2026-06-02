

const autheticateMiddleware = async (req, resizeBy, next) => {


    console.log("autheticate user");
    next();
}

export { autheticateMiddleware };