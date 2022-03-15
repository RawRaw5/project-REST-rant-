const React = require('react')
const Def = require('../default')

function show (data) {
    // console.log(data)
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
              <textarea name="rating" id="rating" 
              style={{margin: + '1.2em'}}>
                Not Rated
              </textarea>  
            </div>
            <div>
                <img src={data.place.pic} alt={data.place.cuisines} />
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
              <div>
              <textarea name="comments" id="comments" 
              style={{marginRight: + '1.2em'}}>
                Hey.. say something
              </textarea>  
            </div>
            </form>      
          </main>
        </Def>
    )
}

module.exports = show