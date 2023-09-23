
const initialState = {
    pageTitle: "Operations Dashboard",
    pageDasboard: "Dashboard"
}

const CommonReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'DASHBOARD':
            return{
                ...state,
                pageTitle: 'Operations Dashboard',
                pageDasboard: 'Dashboard'
            }
        case 'HOME':
            return{
                ...state,
                pageTitle: 'Home',
                pageDasboard: " "
            }
        case 'REPORTS':
            return{
                ...state,
                pageTitle: 'Reports',
                pageDasboard: " "
            }
        case 'INBOUNDJOB':
            return{
                ...state,
                pageTitle: 'Inbound Job',
                pageDasboard: " "
            }
        case 'TIMELINE':
            return{
                ...state,
                pageTitle: 'Timeline',
                pageDasboard: " "
            }
        case 'MAILBOX':
            return{
                ...state,
                pageTitle: 'Mailbox',
                pageDasboard: " "
            }
        case 'MESSAGES':
            return{
                ...state,
                pageTitle: 'Messages',
                pageDasboard: " "
            }
        default:
            return state
        
    }
}
export default CommonReducer;