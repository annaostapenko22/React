import React, { Component } from 'react';
import Controls from '../reader/controls/Controls';
import Progress from '../reader/progress/Progress';
import Articles from '../reader/articles/Articles';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  handleClickPrev = type => {
    if (this.state.publicationIndex > 0) {
      this.setState(({ publicationIndex }) => ({
        publicationIndex: publicationIndex - 1,
      }));
    }
    console.log(this.props.publications.length);
  };
  handleClickNext = () => {
    if (this.state.publicationIndex < this.props.publications.length - 1) {
      this.setState(({ publicationIndex }) => ({
        publicationIndex: publicationIndex + 1,
      }));
    }
  };
  render() {
    const publication = this.props.publications;
    return (
      <div>
        <Controls
          items={this.state.publicationIndex}
          handleClickPrev={this.handleClickPrev}
          handleClickNext={this.handleClickNext}
          publication={publication}
        />
        <Progress
          items={this.state.publicationIndex}
          publications={this.props.publications}
        />
        <Articles
          publication={publication}
          items={this.state.publicationIndex}
        />
      </div>
    );
  }
}

export default Reader;
