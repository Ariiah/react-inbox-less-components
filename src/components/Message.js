import React, { Component } from 'react'

// class Message extends Component {
const Message = ({ email, selected, starred, read, checked, labels }) => {

  const selectedClass = selected ? 'selected' : undefined
  const starredClass = starred ? 'fa-star' : 'fa-star-o'
  const readClass = read ? 'read' : 'unread'
  // const checkedClass = checked ? 'checked' : ''
  const labelClass = labels ? email.labels : []


  // handleSelectedChange(e) {
  //   const selected = e.target.value
  //   this.props.selected
  // }


  // selectedClass = () => {
  //   let selected = ''
  // if (this.props.email.selected) {
  //     selected = 'selected'
  //   } else {
  //     selected = ''
  //   }
  //   return selected
  // }

  // checkedClass = () => {
  //   let checked = ''
  //   if (this.props.email.selected) {
  //     checked = "checked"
  //   } else {
  //     checked = ''
  //   }
  //   return checked
  // }
  //
  // readClass = () => {
  //   let read
  //   if (this.props.email.read) {
  //     read = "read"
  //   } else {
  //     read = "unread"
  //   }
  //   return read
  // }
  //
  // labelClass = () => {
  //   let labels = []
  //   if (this.props.email.labels) {
  //     labels = "label label-warning"
  //   } else {
  //     labels = ''
  //   }
  //   return labels
  // }

  // starredClass = () => {
  //   let starred
  //   if (this.props.email.starred) {
  //     starred = "star fa fa-star"
  //   } else {
  //     starred = "star fa fa-star-o"
  //   }
  //   return starred
  // }

      // console.log(this.props.email.selected);
    return(
      <div className={`row message ${readClass} ${selectedClass}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox"  />
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${starredClass}`}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">{`${labelClass}`}</span>
          <a href="#">
            {email.subject}
          </a>
        </div>
      </div>
    )
}

export default Message
