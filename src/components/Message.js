import React from 'react'

const Message = ({email}) => {

  markRead = () => {
    let read
    if (this.props.emails.read === true) {
      read = "row message read"
    } else {
      read = "row message unread"
    }
    return read
  }

    return(
      <div className={this.markRead()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {email.subject}
          </a>
        </div>
      </div>
    )
}

export default Message
