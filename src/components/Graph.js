import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import axios from 'axios';

// import '../stylesheets/Everything.css';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
)

var graphData = [1, 3, 2, 6, 7, 9, 0];

function increment(event) {
    var clickedId = event.target.getAttribute("id");
    var counter = document.getElementById("cv" + clickedId);
    var count = counter.getAttribute("value");
    count++
    counter.setAttribute("value", count);
    counter.value = count;

    //after updating ui, update the eventsAdded array
    graphData[clickedId - 1]++;
    //print statement to check if data's updated
    console.log(graphData);
    // chart.update();
}

function AddMenu(props) {
    const doIt = props.doIt;

    return (
        <div className="editMenu">
            <h1>What Days Do you Want new events?</h1>
            <div className="wrapper">
                <span className="quantity-counter">
                    <h2 className="popupTxt">Sunday</h2>
                    <input id="cv1" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="1" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Monday</h2>
                    <input id="cv2" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="2" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Tuesday</h2>
                    <input id="cv3" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="3" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Wednesday</h2>
                    <input id="cv4" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="4" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Thursday</h2>
                    <input id="cv5" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="5" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Friday</h2>
                    <input id="cv6" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="6" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <h2 className="popupTxt">Saturday</h2>
                    <input id="cv7" className="value" type="number" value="0" disabled></input>
                    <button onClick={increment} id="7" className="increment">+</button>
                </span>

                <span className="quantity-counter">
                    <button onClick={doIt} className="submit">Submit</button>
                </span>

            </div>
        </div>
    )
};

export default function Graph(props) {

    //get data from sql server
    // useEffect(() => {
    //     axios.get('http://localhost:8081/userdat')
    //         .then(res => {
    //             var dat = res.data[0];
    //             graphData = [dat.sundays, dat.mondays, dat.tuesdays, dat.wednesdays, dat.thursdays, dat.fridays, dat.saturdays];
    //             // console.log(graphData)
    //         })
    //         .catch(err => console.log(err));
    // }, [])

    //load consts
    const data = {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Number of Events',
                data: graphData,
                borderColor: 'black',
                pointBackgroundColor: '#000000',
                borderWidth: 3,

            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        tension: 0.3,
        backgroundColor: '#000',
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div style={{ padding: 20 }} className="graphCont">
            <Line
                data={data}
                options={options}
                height={"600px"}></Line>
        </div>
    );
}

export { graphData };