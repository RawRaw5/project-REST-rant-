const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <img src={data.place.pic} alt={data.place.cuisines} />
            </div>
          </main>
        </Def>
    )
}

module.exports = show