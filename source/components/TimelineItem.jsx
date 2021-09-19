import React from 'react';
import InlineSVG from './InlineSVG';
import CaseStudyItem from './CaseStudyItem';

class TimelineItem extends React.Component {
  renderCaseStudyItem(caseStudy, index) {
    const caseStudyProps =  caseStudy.defaultProps;
    return (
      <li key={index}>
        <CaseStudyItem item={caseStudyProps} key={index} />
      </li>
    )
  }

  renderCaseStudies(caseStudies) {
    if (caseStudies) {
      return (
        <ul>
          {caseStudies.map((caseStudy, index) => this.renderCaseStudyItem(caseStudy, index))}
        </ul>
      )
    }
  }

  render() {
    return (
      <li>
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

        {this.renderCaseStudies(this.props.caseStudies)}
      </li>
    );
  }
}

export default TimelineItem;
