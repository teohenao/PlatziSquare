import { Pipe, PipeTransform } from "@angular/core";
import { linkifyStr } from 'linkifyjs/string';

@Pipe({name:'LinkifystrPipe'})
//PipeTransform transformar vinculos en hipervinculos
export class LinkifystrPipe implements PipeTransform{
    transform(str:string):string{
        return str? linkifyStr(str,{target:'_system'}) : str;
    }
}