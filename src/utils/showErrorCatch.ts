const showErrorCatch = (nameMethod:string, nameController:string) =>{
    console.log({message: `Error with the ${nameMethod} - ${nameController}`});
}
export default showErrorCatch;