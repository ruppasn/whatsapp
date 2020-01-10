import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTabData } from './actions'
import Tabs from './components/tabs'

const Chats = props => {

    const { getChatInfo, getCallsInfo, getStatusInfo, getTabData } = props
    const activeTabName = (props.location.pathname && props.location.pathname.split('/')[1]) || 'chats'

    useEffect(() => {
        // getChatInfo();
        // getCallsInfo();
        // getStatusInfo();
        console.log('in compo',activeTabName);
        
        getTabData(activeTabName)
    }, [getChatInfo, getCallsInfo, getStatusInfo, getTabData, activeTabName])

    return (
        <div>
            <Tabs {...props} activeTabName={activeTabName}/>
        </div>
    )
}

const mapStateToProps = state => ({
    chats: state.whatsapp.chats,
    calls: state.whatsapp.calls,
    status: state.whatsapp.status
})

const mapDispatchToProps = {
    getTabData
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)