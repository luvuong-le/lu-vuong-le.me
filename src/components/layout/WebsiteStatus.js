import React from "react"

export default function WebsiteStatus({ status, children }) {
    const statusNotif = React.createRef()

    const closeStatusNotification = () => {
        statusNotif.current.style.transform = "translateY(-100%)"
    }

    return (
        <div className="website-status anim--slideDown" ref={statusNotif}>
            <span>{status}</span>
            <button className="website-status__close">
                <i
                    className="fa fa-close margin-r-sm"
                    onClick={closeStatusNotification}
                    onKeyDown={closeStatusNotification}
                    role="alertdialog"
                ></i>
            </button>
        </div>
    )
}
