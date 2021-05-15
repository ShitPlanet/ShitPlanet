import { createStore } from './createSore'
import { useLocalStore } from 'mobx-react-lite'

export function useModel() {
  return useLocalStore(() => ({
    account: null,
    setAccount(value) {
      this.account = value
    }
  }))
}

const store = createStore(useModel)

export const Provider = store.Provider
export const Context = store.Context
export const useStore = store.useStore
