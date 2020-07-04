import React from 'react'

class Result extends React.Component {
    render() {

        console.log('length: ' + this.props.country.length)

        if(this.props.country.length <= 0){
            return (
                <div>
                
                </div>
            );
        } else{
            return (
                <div className="mx-auto mt-5 mb-10 border rounded p-4 border-gray-400 px-5">
                    <div className="flex justify-start items-baseline">
                        <svg className="text-blue-500 fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm-.001 17.2a7.6 7.6 0 110-15.2 7.6 7.6 0 110 15.2zM11 9.33V4H9v6.245l-3.546 2.048 1 1.732 4.115-2.377A.955.955 0 0011 10.9v-.168l4.24-4.166a6.584 6.584 0 00-.647-.766L11 9.33z" /></svg>
                        <h1 className="text-left ml-2 text-lg font-bold text-blue-500">{this.props.country}</h1>
                    </div>
                    <div className="mt-5 text-left ml-5 mb-4">
                        <p className="font-semibold border rounded p-4 text-gray-700">Confirmed: <span className="ml-5 font-normal">{this.props.confirmed}</span></p>
                        <p className="font-semibold border rounded p-4 mt-2 text-gray-700">Deaths: <span className="ml-5 font-normal text-red-500">{this.props.deaths}</span></p>
                        <p className="font-semibold border rounded p-4 mt-2 text-gray-700">Recovered: <span className="ml-5 font-normal">{this.props.recovered}</span></p>
                    </div>
                </div>
            );
        }
    }
}

export default Result;