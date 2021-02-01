import {randomBytes ,scrypt} from 'crypto';
import {promisify} from 'util';


const scryptAsync=promisify(scrypt);
export class Password{
    static async hash(password:string){
        const salt=randomBytes(8).toString('hex');
        
        const buf=(await scryptAsync(password ,salt ,64)) as Buffer;
        return `${buf.toString('hex')}.${salt}`
    }

    static  async compareHash(storedpassword:string ,suppliedPassword:string){
        const[hashpassword,salt]=storedpassword.split('.');
        const buf =(await scryptAsync(suppliedPassword,salt,64))as Buffer
        return buf.toString('hex')===hashpassword
    }
}