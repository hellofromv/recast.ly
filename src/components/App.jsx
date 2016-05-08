class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getYoutubeVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };
  }
  
  callSearchYouTube() {
    this.props.searchYouTube(obj, cb);
  }
  

  render() {
    return (
      <div>
        <Nav youtube={this.state.youtube}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList youtube={this.state.youtube} clickFunction={this.onVideoClick.bind(this)} videos={this.state.data}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
