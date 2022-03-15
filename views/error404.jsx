const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="images/404-image.jpg" alt="404 image" />
                <div>
                  Photo by <a href="AUTHOR_LINK">Andrew Bui</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
          </main>
      </Def>
    )
  }

module.exports = error404  