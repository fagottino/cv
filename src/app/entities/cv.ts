import { WorkExperiences } from './work-experiences';
import { Educations } from './educations';
import { Knowledges } from './knowledges';
import { SocialLink } from './social-link';
import { ContactLink } from './contact-link';
import { Cms } from './cms';

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
  knowledges: Knowledges[] = [];
  cms: Cms[] = [];
  /*knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];
  knowledges: Knowledges[] = [];*/
}