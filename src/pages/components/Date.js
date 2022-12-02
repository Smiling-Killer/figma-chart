import React,{Component} from "react"
class DateTime extends Component {
    constructor() {
      super()
      let d = new Date()
        this.state = {
          day: d.getDay(),
          month: d.getMonth(),
          date: d.getDate(),
          year: d.getFullYear(),
          time: d.toLocaleTimeString()
        }
      this.countingSecond = this.countingSecond.bind(this)
    }
    countingSecond() {
      let d = new Date()
      this.setState({
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      })
    }
    componentWillMount() {
      setInterval(this.countingSecond, 1000)
    }
    render() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
  
    return (
        <div className='timeclock-main'>
          <h3 className='timeclock-text'> {months[this.state.month]}/ {this.state.date}/ {this.state.year} [ {this.state.time} ]</h3>
        </div>
      )
    }
  }
export default DateTime;