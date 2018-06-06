import {WorkExperiences} from './work-experiences';
import {Education} from './education';
import {Knowledge} from './knowledge';

export class Cv {
  nameSurname: string;
  description: string;
  website: string;
  sociallink: string;
  workExperiences: WorkExperiences[];
  education: Education[];
  knowledge: Knowledge[];
}
