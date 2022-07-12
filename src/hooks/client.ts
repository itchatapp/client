import { Client } from '@itchatapp/client'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'


// TODO:
const isDev = true;

const client = new Client({
    rest: {
        api: isDev ? 'https://api-dev.itchat.world' : 'https://api.itchat.world'
    },
    ws: {
        url:  isDev ? 'wss://api-dev.itchat.world/ws' : 'wss://api.itchat.world/ws'
    }
})

const clientContext = createContext(client)

export const useClient = () => useContext(clientContext)