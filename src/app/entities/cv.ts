import { WorkExperiences } from './work-experiences';
import { Education } from './education';
import { Knowledge } from './knowledge';
import { SocialLink } from './social-link';
import { ContactLink } from './contact-link';

export class Cv {
  name: string;
  surname: string;
  description: string;
  website: string;
  contactLink: ContactLink[];
  socialLink: SocialLink[];
  workExperiences: WorkExperiences[];
  education: Education[];
  knowledge: Knowledge[];
}
