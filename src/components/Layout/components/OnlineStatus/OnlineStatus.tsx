import {useOnlineStatus} from '@/hooks/custom/use-online-status'
import {Alert} from "antd";

export const OnlineStatus = () => {

    const isOnline = useOnlineStatus()

    if(isOnline) return

    return (
        <div><Alert className={'w-screen'} banner type={'warning'} message={'Network is not working'}/></div>
    )
}