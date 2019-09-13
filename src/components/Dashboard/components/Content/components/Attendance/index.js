import React from "react";
import "./index.css"

const getYears = () => {
    let years = []
    const start = 2000
    let end = new Date().getFullYear()
    for (let i = start; i <= end; i++) {
        years[i] = i
    }

    return years
}

class Attendance extends React.Component {
    state = {

        members: [
            {
                id: 1,
                name: "Bikki",
                days: [],
            },
            {
                id: 2,
                name: "Shalu",
                days: [],
            },
            {
                id: 3,
                name: "Sushant",
                days: [],
            },
            {
                id: 4,
                name: "Nireesh",
                days: [],
            },
            {
                id: 5,
                name: "Zohaib",
                days: [],
            },
            {
                id: 6,
                name: "Neha",
                days: [],
            },
        ],

        days: [],
        years: getYears(),
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selectedYear: null,
        selectedMonth: null,
        tableDisplay: false
    };

    handleYearChange = (e) => {
        let { selectedYear } = this.state
        selectedYear = e.target.value

        this.setState({
            ...this.state,
            selectedYear
        })
    }

    getCurrentMonthDaysHandler = (selectedMonth) => {
        let dayOne;
        switch (selectedMonth) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                dayOne = 31;
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                dayOne = 30;
                break;
            default:
                if ((this.state.selectedYear % 100 === 0) ? (this.state.selectedYear % 400 === 0) : (this.state.selectedYear % 4 === 0))
                    dayOne = 29
                else
                    dayOne = 28
        }
        return dayOne;
    }


    handleMonthChange = (e) => {

        let { selectedMonth, selectedYear, tableDisplay } = this.state
        selectedMonth = e.target.value

        tableDisplay = true;

        const { members = [] } = this.state
        const { getCurrentMonthDaysHandler } = this

        let start = 1
        let end

        if ((parseInt(selectedYear) === new Date().getFullYear())) {

            if (selectedMonth.toString().substr(0, 3) === new Date().toString().substr(4, 3)) {
                end = new Date().getDate();
            } else if ((new Date(selectedMonth + 0).getMonth() < new Date().getMonth())) {
                end = getCurrentMonthDaysHandler(selectedMonth);
            }
            else {
                tableDisplay = false
            }
        } else if (selectedYear !== new Date().getFullYear()) {
            end = getCurrentMonthDaysHandler(selectedMonth);
        }
        else {
            tableDisplay = false
        }

        let dayOne = []
        for (let i = start; i <= end; i++) {
            dayOne[i] = i;
        }

        let x;
        for (let i of members) {
            i.days = []
            for (let j = start; j <= end; j++) {
                let currDate = {
                    day: '',
                    date: '',
                    status: '',
                    colorProperty: {
                        backColor: 'white',
                        textColor: 'white'
                    }
                }
                x = new Date(selectedMonth + j + ',' + selectedYear)
                currDate.day = x.toString().substr(0, 3)
                currDate.date = x.toString().substr(8, 2)
                currDate.status = ''
                i.days.push(currDate);
            }
        }


        this.setState({
            ...this.state,
            members,
            selectedMonth,
            days: dayOne,
            tableDisplay
        })
    }


    colorChangeHandler = (index, empValue = null) => {
        const { members = [] } = this.state
        const { days = [] } = members[index]

        days.colorProperty = days.map(el => {
            let x = el.status
            switch (x) {
                case 'P':
                case 'p':
                    el.colorProperty = {
                        backColor: 'darkGreen',
                        textColor: 'white'
                    }
                    break;

                case 'A':
                case 'a':
                    el.colorProperty = {
                        backColor: 'red',
                        textColor: 'white'
                    }
                    break;

                case 'H':
                case 'h':
                    el.colorProperty = {
                        backColor: 'blue',
                        textColor: 'white'
                    }
                    break;

                case 'L':
                case 'l':
                    el.colorProperty = {
                        backColor: 'yellow',
                        textColor: 'black'
                    }
                    break;

                default:
                    el.colorProperty = {
                        backColor: 'white',
                        textColor: 'black'
                    }
            }


            this.setState({
                ...this.state,
                members
            })
        })
    }

    handleCheckBox = (e, index = 0) => {

        const { members = [] } = this.state
        const { colorChangeHandler } = this
        const { days = [] } = members[index]

        members[index].days = days.map(el => {
            if (el.day == 'Sat' || el.day == 'Sun') {
                el.status = 'H'
                colorChangeHandler(index);
            } else {
                el.status = 'P'
                colorChangeHandler(index);
            }
            return el;
        })

        this.setState({
            ...this.state,
            members
        })
    }

    handleDayStatus = (e, employeeIndex, dayIndex) => {

        let { members = [] } = this.state
        let { days = [] } = members[employeeIndex]
        const { colorChangeHandler } = this

        days[dayIndex].status = e.target.value
        colorChangeHandler(employeeIndex, days[dayIndex].status)

        this.setState({
            ...this.state,
            members
        })
    }


    render() {

        const { handleMonthChange, handleYearChange, handleCheckBox, handleDayStatus } = this;
        const { members, days, selectedMonth, selectedYear, years, months, tableDisplay } = this.state;

        console.log(members)

        return (

            <div>Attendance
                <div>
                    <form className="form-flex">
                    
                        <label>Year:</label>
                        <select name="year" onChange={handleYearChange} value={selectedYear}>
                            {years.map(el => <option value={el}> {el} </option>)}
                        </select>

                        <label>Month:</label>
                        <select name="month" onChange={handleMonthChange} value={selectedMonth} required>
                            {months.map(el =>
                                <option value={el}>{el}</option>)}
                        </select>
                    </form>
                </div>

                <div>
                    
                    {tableDisplay ?

                        <div>
                            <table id="t01">
                                <tr>
                                    <th>Name:</th>
                                    <th>Check Box:</th>
                                    <th>Days:</th>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="td-style">{
                                        days.map(
                                            (curr) => <p className="ele-date" >{curr}</p>)}
                                    </td>
                                </tr>

                                {members.map((m, empIndex) => {
                                    return (
                                        <tr>
                                            <td>{m.name}</td>
                                            <td><input type="checkbox" name="status" onChange={e => handleCheckBox(e, empIndex)} /></td>
                                            <td>{<div>
                                                {m.days.map(((el, dayIndex) =>
                                                    <input className='' style={{
                                                        backgroundColor: el.colorProperty.backColor,
                                                        color: el.colorProperty.textColor
                                                    }}
                                                        key={el} value={el.status}
                                                        onChange={e => handleDayStatus(e, empIndex, dayIndex)} size="1" />))}
                                            </div>}</td>
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                        : false}
                </div>
            </div>
        );
    }
}

export default Attendance;