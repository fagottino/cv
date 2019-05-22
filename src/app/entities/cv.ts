import { WorkExperiences } from './work-experiences';
import { Educations } from './educations';
import { Knowledge } from './knowledge';
import { SocialLink } from './social-link';
import { ContactLink } from './contact-link';

export class Cv {
  name: string = '';
  surname: string = '';
  description: string = '';
  email: string = '';
  website: string = '';
  contactLink: ContactLink[] = [];
  socialLink: SocialLink[] = [];
  workExperiences: WorkExperiences[] = [];
  educations: Educations[] = [];
  knowledge: Knowledge[] = [];
}