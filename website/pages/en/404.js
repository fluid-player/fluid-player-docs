const React = require("react");
class PageNotFound extends React.Component {
  render() {
    return <div id={"page-not-found-wrap"}>
      <div id={"page-not-found"}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <div id={"page-not-found-description"}>
          Sorry, but the page you were trying to view does not exist.
          Try looking in the <a href={"/docs/overview"}>documentation</a> or&nbsp;
          <a href={"https://github.com/fluid-player/fluid-player-docs/issues"}>submit an issue</a> if you
          believe this is not correct.
        </div>
      </div>
    </div>;
  }
}

PageNotFound.title = '404 Page Not Found';
PageNotFound.description = 'Requested page does not exist';

module.exports = PageNotFound;
