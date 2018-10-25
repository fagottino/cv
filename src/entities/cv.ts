import {WorkExperiences} from './work-experiences';
import {Education} from './education';
import {Knowledge} from './knowledge';
import {SocialLink} from './social-link';

class Cv {
  nameSurname: string;
  description: string;
  email: string;
  website: string;
  socialForContacts: SocialLink;
  socialLink: SocialLink[];
  workExperiences: WorkExperiences[];
  education: Education[];
  knowledge: Knowledge[];
}
