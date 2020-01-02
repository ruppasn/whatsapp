import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getChatInfo, getCallsInfo, getStatusInfo } from './actions'
import Tabs from './components/tabs'

const Chats = props => {

    const { getChatInfo, getCallsInfo, getStatusInfo } = props

    useEffect(() => {
        getChatInfo();
        getCallsInfo();
        getStatusInfo();
    }, [getChatInfo, getCallsInfo, getStatusInfo])

    return (
        <div>
            <Tabs {...props} />
        </div>
    )
}

const mapStateToProps = state => ({
    chats: state.whatsapp.chats,
    calls: state.whatsapp.calls,
    status: state.whatsapp.status
})

const mapDispatchToProps = {
    getChatInfo,
    getCallsInfo,
    getStatusInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)