import { Client } from '@itchatapp/client'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

const client = new Client()

const clientContext = createContext(client)


export const useClient = () => useContext(clientContext)