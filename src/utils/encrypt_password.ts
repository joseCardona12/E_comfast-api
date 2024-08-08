import bcrypt from "bcrypt";

export const hashPassword = async(password:string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}

export const verifyPassword = async(password: string, hashedPassword: string): Promise<string | undefined> =>{
    const mathPassword = await bcrypt.compare(password, hashedPassword);
    if(!mathPassword){
        console.log({message: "Password incorrect"});
        return;
    }
    console.log({message: "Password correct"});
}