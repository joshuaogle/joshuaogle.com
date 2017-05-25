import KitMathCaseStudy from '../pages/Work/CaseStudies/KitMath';
import SharespostCaseStudy from '../pages/Work/CaseStudies/Sharespost';
import SummitCaseStudy from '../pages/Work/CaseStudies/Summit';
import EmberCaseStudy from '../pages/Work/CaseStudies/Ember';
import ArmadaCaseStudy from '../pages/Work/CaseStudies/Armada';
import OOOCaseStudy from '../pages/Work/CaseStudies/OOO';
import SchoolkeepCaseStudy from '../pages/Work/CaseStudies/Schoolkeep';

const caseStudyProps = [
  SharespostCaseStudy.defaultProps,
  KitMathCaseStudy.defaultProps,
  SummitCaseStudy.defaultProps,
  ArmadaCaseStudy.defaultProps,
  OOOCaseStudy.defaultProps,
  SchoolkeepCaseStudy.defaultProps,
  EmberCaseStudy.defaultProps,
];

export default caseStudyProps;

export const featuredCaseStudies = caseStudyProps;
