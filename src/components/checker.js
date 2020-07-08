import React from 'react';
import pic from '../assets/pica.png.svg'
import Result from './result'
import { Link } from 'react-router-dom';

class Checker extends React.Component {

    constructor(props) {
        super(props);
        this.handleRona = this.handleRona.bind(this);
        this.state = {
            country: "",
            normal: "bg-green-500 px-4 py-1 rounded text-white w-full",
            confirmed: null,
            deaths: null,
            recovered: null,
            button: 'Check'
        }
    }

    handleRona = (e) => {
        e.preventDefault();

        const place = e.target.elements.country.value;
        console.log(e.target.elements.country.value.length[0]);

        this.setState(() => {
            return {
                normal: 'bg-blue-500 px-4 py-1 rounded text-white w-full',
                button: 'Loading...'
            }
        })
        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${place}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
                'x-rapidapi-key': '1d2e200e8amsh264b6230392cdfcp119d06jsn3f9a7a0e8fd0',
                'useQueryString': true
            }
        })
            .then(res => res.json())
            .then((result) => {
                // console.log(result)

                this.setState(() => {
                    return {
                        country: result.data.location,
                        confirmed: result.data.confirmed,
                        deaths: result.data.deaths,
                        recovered: result.data.recovered,
                        button: 'Check',
                        normal: 'bg-green-500 px-4 py-1 rounded text-white w-full'
                    }
                })

            })
    }

    render() {

        return (
            <div>
                <div className="mx-auto mt-5 border border-gray-400 rounded p-2 px-5">
                    <div>
                        <img className="mx-auto h-48 w-auto" src={pic} alt="Logo" />
                    </div>
                    <h1 className="font-bold text-xl mt-2 text-blue-500">Quarantine mood</h1>
                    <form onSubmit={this.handleRona}>
                        <div className="w-full">
                            <Link to="/help">
                                <li className="mt-8 ml-4 cursor-pointer text-left text-lg text-green-500">Help</li>
                            </Link>
                            <p className="text-gray-700 text-left">Be useful for once today</p>
                            <p className="text-gray-700 font-bold text-xs text-left">First letter must be capital</p>
                            <input name="country" placeholder="Your Country" className="w-full mt-2 rounded border-blue-300 mb-2 border p-2" />
                        </div>
                        <div className="mt-5 mb-4">
                            <button className={this.state.normal}>{this.state.button}</button>
                        </div>
                    </form>
                </div>

                <Result
                    country={this.state.country}
                    deaths={this.state.deaths}
                    confirmed={this.state.confirmed}
                    recovered={this.state.recovered}
                />
            </div>
        );
    };
}

export default Checker;