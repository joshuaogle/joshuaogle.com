import React from 'react';
import InlineSVG from './InlineSVG';
import CaseStudyItem from './CaseStudyItem';

class TimelineItem extends React.Component {
  renderCaseStudyItem(caseStudy, index) {
    const caseStudyProps =  caseStudy.defaultProps;
    return (
      <CaseStudyItem item={caseStudyProps} key={index} />
    )
  }

  renderCaseStudies(caseStudies) {
    if (caseStudies) {
      return (
        <nav className="timeline-case-studies">
          {caseStudies.map((caseStudy, index) => this.renderCaseStudyItem(caseStudy, index))}
        </nav>
      )
    }
  }

  render() {
    return (
      <li>
        <div className="timeline-details">
          <h3 className="timeline-company">
            <InlineSVG src={this.props.icon} />
            {this.props.company}
          </h3>
          <div className="timeline-span">
            {this.props.title}, {this.props.when}
          </div>
          <p className="timeline-summary">
            {this.props.children}
          </p>
        </div>

        {this.renderCaseStudies(this.props.caseStudies)}
      </li>
    );
  }
}

export default TimelineItem;
