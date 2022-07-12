import { useClient } from '../context'
import { BsPlus } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { useState } from 'preact/hooks';

const Divider = () => <hr class="sidebar-hr" />;

const Icon = ({ icon, text, children }: { text?: string, icon?: unknown, children?: unknown }) => (
    <div className="sidebar-icon group">
        {icon}
        {children}
        {text && <span class="sidebar-tooltip group-hover:scale-100">{text}</span>}
    </div>
);

export const Sidebar = () => {
    const client = useClient();
    const [servers, setServers] = useState(client.servers.cache);

    const update = () => setServers(client.servers.cache);

    client.on('serverCreate', update).on('serverUpdate', update).on('serverDelete', update)

    return <div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
        <Icon icon={<FaHome size="28" />} text="Direct Messages" />
        <Divider />
        <Icon text="Code Station">S</Icon>
        {servers.map((s) => <Icon text={s.name}>{s.name.charAt(0).toUpperCase()}</Icon>)}
        <Divider />
        <Icon icon={<BsPlus size="32" />} text="Add Server" />
    </div>
}