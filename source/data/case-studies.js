import KitMathCaseStudy from '../pages/Work/CaseStudies/KitMath';
import SharespostCaseStudy from '../pages/Work/CaseStudies/Sharespost';
import SummitCaseStudy from '../pages/Work/CaseStudies/Summit';
import ArmadaCaseStudy from '../pages/Work/CaseStudies/Armada';
import OOOCaseStudy from '../pages/Work/CaseStudies/OOO';

const caseStudyProps = [
  SharespostCaseStudy.defaultProps,
  ArmadaCaseStudy.defaultProps,
  KitMathCaseStudy.defaultProps,
  SummitCaseStudy.defaultProps,
  OOOCaseStudy.defaultProps,
];

export default caseStudyProps;

export const featuredCaseStudies = caseStudyProps;
