import { WorkExperiences } from './work-experiences';
import { Educations } from './educations';
import { Knowledges } from './knowledges';
import { SocialLink } from './social-link';
import { ContactLink } from './contact-link';
import { Cms } from './cms';
import { Languages } from './languages';
import { SkillsAndCompetences } from './skills-and-competences';
import { InterestsAndHobbies } from './interests-and-hobbies';
import { Portfolio } from './portfolio';

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
  languages: Languages[] = [];
  skillsAndCompetences: SkillsAndCompetences[] = [];
  interestsAndHobbies: InterestsAndHobbies[] = [];
  portfolio: Portfolio[] = [];
  /*contacts: Contacts[] = [];*/
}