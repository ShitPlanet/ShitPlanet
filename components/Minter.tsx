import { useLocalStore, observer } from 'mobx-react-lite'
import { ethers } from 'ethers'
import styled from 'styled-components'
import Selector from './Selector'
import { useState, useCallback, useEffect, useMemo } from 'react'
import shitAbi from '@/config/abi/shit.json'
import template from '@/config/abi/template.json'
import { useStore } from '@/store'
import { tokenAddress } from '@/config/constants/tokenAddres'

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
const InputGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 48.1vw;
  height: calc(5.5vw - 4px);
  max-height: 5.5vw;
  border: 2px solid rgba(255, 255, 255, 0.77);
  border-radius: 0.3vw;
  & input {
    flex: 1;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0 1.7vw;
    font-family: 'IBMPlexSans bold';
    font-size: 2.5vw;
    color: #fff;
    outline: none;
  }
  & input::placeholder {
    color: #fff;
    opacity: 0.2;
  }
  & button {
    width: 9vw;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: 'OpenSans';
    font-style: italic;
    font-weight: bold;
    font-size: 2.5vw;
    color: #bcffce;
  }
  & button:hover {
    color: #fff;
  }
`
const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: ${(300 * 100) / 1440}vw;
  height: ${(80 * 100) / 1440}vw;
  border: none;
  border-radius: ${(80 * 100) / 1440}vw;
  background: linear-gradient(90deg, #3c92dd 0%, #34c4c2 100%);
  font-family: 'Lexend';
  font-size: 2.5vw;
  color: #fff;
  &:hover {
    box-shadow: 0 0 0.5vw #3c92dd;
  }
  & svg {
    margin-right: 1.3vw;
  }
`

interface IProps {
  setLoading: (val: boolean) => void
  setNewlyMinted: (val: { level: number }) => void
}

const Minter = observer((props: IProps) => {
  const store = useStore()

  const state = useLocalStore(() => ({
    shitContract: null,
    lajiContract: null,
    disabled: false,
    setDisabled(value) {
      this.disabled = value
    },
    approved: false,
    token: null,
    setToken(value: string) {
      this.token = value
    },
    mintValue: '',
    setMintValue(value) {
      this.mintValue = value
    },
    allowance: ethers.BigNumber.from(0)
  }))

  const [shitTokenList, setShitTokenList] = useState([])

  useEffect(() => {
    ;(async function() {
      try {
        if (!store.shitContract) return
        const shitTokenAddressList = await store.shitContract.getShitTokenList()

        const shitTokenList = await Promise.all(
          shitTokenAddressList.map(async address => {
            const thirtyPartyShitContract = new ethers.Contract(
              address,
              template,
              store.provider
            )
            const name = await thirtyPartyShitContract.symbol()

            return {
              name,
              address
            }
          })
        )
        setShitTokenList(shitTokenList)
        if (shitTokenList[0]) {
          state.setToken((shitTokenList[0] as any).address)
        }
      } catch (error) {
        console.log(error)
      } finally {
      }
    })()
  }, [store.shitContract, store.provider, store.account])

  // 选中的laji币切换时，重新设置lajiContract、approve、上限状态
  useEffect(() => {
    ;(async function() {
      try {
        if (!state.token) return
        state.lajiContract = new ethers.Contract(
          state.token,
          shitAbi,
          store.signer
        )
        const allowance = await state.lajiContract.allowance(
          store.account,
          tokenAddress.shitbox
        )
        state.allowance = allowance
        state.approved = allowance.gt(0)
      } catch (error) {
        console.log(error)
      } finally {
      }
    })()
  }, [state.token])

  const approve = useCallback(async () => {
    try {
      if (!state.lajiContract) return
      props.setLoading(true)
      const tx = await state.lajiContract.approve(
        tokenAddress.shitbox,
        ethers.BigNumber.from('1000000000000000000000000')
      )

      await tx.wait()
      state.approved = true
    } catch (error) {
      console.log(error)
    } finally {
      props.setLoading(false)
    }
  }, [state.lajiContract])

  const mint = useCallback(async () => {
    try {
      props.setLoading(true)
      const tx = await store.shitboxContract.mintShitBox(
        state.token,
        ethers.utils.parseEther(state.mintValue)
      )
      await tx.wait()
      props.setNewlyMinted({ level: 1 })
    } catch (error) {
      console.log(error)
    } finally {
      props.setLoading(false)
    }
  }, [store.shitContract])

  return (
    <Div>
      <InputGroup>
        <input
          value={state.mintValue}
          onChange={e => {
            state.setMintValue(e.target.value)
          }}
          type='number'
          placeholder='Destroyed Quantity'
        />
        <button
          onClick={() => {
            const max = state.allowance
              .div(ethers.BigNumber.from('1000000000000000000'))
              .toNumber()
            state.setMintValue(max)
          }}>
          MAX
        </button>
      </InputGroup>
      <Selector
        placeholder=''
        value={state.token}
        options={shitTokenList.map((token, index) => ({
          label: token.name,
          value: token.address
        }))}
        onChange={val => state.setToken(val)}
      />
      <Button
        disabled={state.disabled}
        onClick={() => {
          if (!state.approved) {
            approve()
          } else {
            mint()
          }
        }}>
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.3333 10H16.6667V13.3333H13.3333V10ZM10 13.3333H13.3333V16.6667H10V13.3333ZM16.6667 13.3333H20V16.6667H16.6667V13.3333ZM20 10H23.3333V13.3333H20V10ZM6.66667 10H10V13.3333H6.66667V10ZM26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM10 25H6.66667V21.6667H10V25ZM16.6667 25H13.3333V21.6667H16.6667V25ZM23.3333 25H20V21.6667H23.3333V25ZM26.6667 13.3333H23.3333V16.6667H26.6667V20H23.3333V16.6667H20V20H16.6667V16.6667H13.3333V20H10V16.6667H6.66667V20H3.33333V16.6667H6.66667V13.3333H3.33333V3.33333H26.6667V13.3333Z'
            fill='white'
          />
        </svg>
        {state.approved ? 'Mint NFT' : 'Approve'}
      </Button>
    </Div>
  )
})
export default Minter
