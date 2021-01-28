import {randomBytes ,scrypt} from 'crypto';
import {promisify} from 'util';


const scryptAsync=promisify(scrypt);
export class Password{
    static async hash(password:string){
        const salt=randomBytes(8).toString('hex');
        
        const buf=(await scryptAsync(password ,salt ,64)) as Buffer;
        return `${buf.toString('hex')}.${salt}`
    }

    static compareHash(storedpassword:string ,suppliedPassword:string){
       
    }
}