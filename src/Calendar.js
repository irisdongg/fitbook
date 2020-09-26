import React from 'react';
import "./Calendar.css";
import "./App.css";

function Calendar(props) {
    return (       
<div>
    <h1>Calendar</h1>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <table>
        <thead>
            <tr>
                <th></th>
                <th>
                    <span class="day">1</span>
                    <span class="long">Monday</span>
                    <span class="short">Mon</span>
                </th>
                <th>
                    <span class="day">2</span>
                    <span class="long">Tuesday</span>
                    <span class="short">Tue</span>
                </th>
                <th>
                    <span class="day">3</span>
                    <span class="long">Wednesday</span>
                    <span class="short">We</span>
                </th>
                <th>
                    <span class="day">4</span>
                    <span class="long">Thursday</span>
                    <span class="short">Thur</span>
                </th>
                <th>
                    <span class="day active">5</span>
                    <span class="long">Friday</span>
                    <span class="short">Fri</span>
                </th>
                <th>
                    <span class="day">6</span>
                    <span class="long">Saturday</span>
                    <span class="short">Sat</span>
                </th>
                <th>
                    <span class="day">7</span>
                    <span class="long">Sunday</span>
                    <span class="short">Sun</span>
                </th>
            </tr>
        </thead>
        <div className="scroll">
            <tbody>
                <tr>
                    <td class="hour" rowspan="4"><span>6 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>7 am</span></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>8 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>9 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>10 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>

                <tr>
                    <td class="hour" rowspan="4"><span>11 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>12 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>1 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>

                <tr>
                    <td class="hour" rowspan="4"><span>2 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                </tr>

                <tr>
                    <td class="hour" rowspan="4"><span>3 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>4 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>5 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="free2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>6 pm</span></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                
                <tr>
                    <td class="hour" rowspan="4"><span>7 pm</span></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="hour" rowspan="4"><span>8 pm</span></td>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td className="free"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td className="free2"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="hour" rowspan="4"><span>9 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>10 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>11 pm</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="hour" rowspan="4"><span>12 am</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </div>
    </table>
<div class="friends">
    <h2>Compare with friends</h2>
    <h3>Monica</h3> <p>click to overlay schedules</p>
    <p>Suggested:</p>
      <p>Mon Sept 9, 6pm - 8pm</p>
      <p>Tues Sept 10, 4:30 pm - 6 pm</p>
</div>

</div>
        
    
    );
}

export default Calendar;