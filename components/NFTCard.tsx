import { observer } from 'mobx-react-lite'
import { BigNumber } from '@ethersproject/bignumber'
import { ethers, utils } from 'ethers'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Level from './Level'
import NFTImage from './NFTImage'
import { useStore } from '@/store'
import shitAbi from '@/config/abi/shit.json'

const Div = styled.div`
  position: relative;
  display: inline-block;
  width: 26.5vw;
  height: 45vw;
  border-radius: 1.3vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
`
const Header = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2vw 2.2vw 2.2vw 2.2vw;
`
const Text = styled.div`
  font-family: Impact;
  font-size: 2.5vw;
  line-height: 3vw;
  color: #fff;
  text-align: left;
  & span {
    display: block;
  }
`
const Footer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2.2vw;
`
const Amount = styled.div`
  & span {
    display: block;
    text-align: left;
  }
  & span.label {
    font-family: 'Lexend bold';
    font-size: 1.2vw;
    color: #bcfff7;
    font-style: italic;
    margin-bottom: 0.4vw;
  }
  & span.stk {
    padding: 0 1vw;
    font-family: 'IBMPlexSans bold';
    font-size: 2.2vw;
    line-height: 2.2vw;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & span.usd {
    padding: 0.2vw 1vw 0 1vw;
    font-family: 'IBMPlexSans';
    font-size: 1.2vw;
    color: #fff;
  }
`
const Time = styled.div`
  display: flex;
  text-align: left;
  align-items: flex-start;
  padding-top: 0.2vw;
  & span.label {
    font-family: 'Lexend bold';
    font-size: 1.2vw;
    font-style: italic;
    color: #bcfff7;
    padding-top: 0.2vw;
  }
  & span.time {
    font-family: 'IBMPlexSans bold';
    font-size: 1.6vw;
    color: #fff;
    padding-left: 1.4vw;
  }
`
const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Power = styled.div`
  position: absolute;
  width: ${(60 * 100) / 1440}vw;
  height: ${(60 * 100) / 1440}vw;
  color: #1384bc;
  top: ${(166 * 100) / 1440}vw;
  left: ${(32 * 100) / 1440}vw;
  text-align: center;
  &.minting {
    color: #66ccff;
  }
  & svg {
    display: block;
    width: 60%;
    height: 60%;
    margin: 0 auto;
  }
  &.minting svg {
    transform: rotate(0);
    animation: ${roll} 2000ms linear infinite;
  }
  & span {
    display: block;
    width: 100%;
    left: 0;
    text-align: center;
    font-family: 'IBMPlexSans';
    font-size: 1vw;
    color: #fff;
  }
`
const Upgrade = styled.button`
  position: absolute;
  width: auto;
  height: auto;
  top: 28.8vw;
  right: 2.2vw;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 1.1vw;
  font-family: 'Lexend bold';
  color: #fff;
  opacity: 0.8;
  cursor: not-allowed;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    color: #fff;
    background-color: transparent !important;
  }
`

interface IProps {
  type?: string
  tokenAddress?: string
  imgNo?: number
  amount?: number
  timestamp?: BigNumber
  usd?: BigNumber
  power?: number
  minting?: boolean
  level?: BigNumber
}
const NFTCard = observer((props: IProps) => {
  const store = useStore()
  const [category, setCategory] = useState(-1)
  const [time, setTime] = useState('')
  const [powerStr, setPowerStr] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')

  useEffect(() => {
    if (props.power) {
      const length = props.power.toString().length
      if (length <= 3) {
        setPowerStr(props.power.toString())
      } else if (length > 3 && length <= 6) {
        setPowerStr(`${props.power.toString().substr(0, length - 3)} K`)
      } else if (length > 6 && length <= 9) {
        setPowerStr(`${props.power.toString().substr(0, length - 6)} M`)
      } else if (length > 9 && length <= 12) {
        setPowerStr(`${props.power.toString().substr(0, length - 9)} G`)
      } else if (length > 12 && length <= 15) {
        setPowerStr(`${props.power.toString().substr(0, length - 12)} T`)
      } else if (length > 15 && length <= 18) {
        setPowerStr(`${props.power.toString().substr(0, length - 15)} P`)
      } else if (length > 18 && length <= 21) {
        setPowerStr(`${props.power.toString().substr(0, length - 18)} E`)
      }
    }
    if (props.timestamp) {
      const date = new Date(props.timestamp?.toNumber() * 1000)
      const str = `${date.getMonth() +
        1}/${date.getDate()}/${date.getFullYear()}`
      setTime(str)
    }
    if (props.usd) {
      const val = ethers.utils.formatEther(props.usd)
      let category: number
      if (
        props.usd.gt(ethers.utils.parseEther('0')) &&
        props.usd.lte(ethers.utils.parseEther('10'))
      ) {
        category = 0
      } else if (
        props.usd.gt(ethers.utils.parseEther('10')) &&
        props.usd.lte(ethers.utils.parseEther('100'))
      ) {
        category = 1
      } else if (
        props.usd.gt(ethers.utils.parseEther('100')) &&
        props.usd.lte(ethers.utils.parseEther('1000'))
      ) {
        category = 2
      } else if (
        props.usd.gt(ethers.utils.parseEther('1000')) &&
        props.usd.lte(ethers.utils.parseEther('10000'))
      ) {
        category = 3
      } else if (
        props.usd.gt(ethers.utils.parseEther('10000')) &&
        props.usd.lte(ethers.utils.parseEther('100000'))
      ) {
        category = 4
      } else if (
        props.usd.gt(ethers.utils.parseEther('0')) &&
        props.usd.lte(ethers.utils.parseEther('10'))
      ) {
        category = 5
      }
      setCategory(category)
    }
    if (props.tokenAddress) {
      const lajiContract = new ethers.Contract(
        props.tokenAddress,
        shitAbi,
        store.signer
      )
      lajiContract.symbol().then(name => {
        setTokenSymbol(name)
      })
    }
  }, [])
  const arr = [
    { name1: 'AHL No.02', name2: '', image: 'ufo' },
    { name1: 'Alien Skull', name2: '', image: 'skull' },
    { name1: 'Pistol', name2: 'Antenna', image: 'gun' },
    { name1: 'Counterfeit', name2: 'Skull', image: 'bottle' },
    { name1: 'AHL No.05', name2: '', image: 'aircraft' },
    { name1: 'Alien shit', name2: '', image: 'shit' }
  ]
  return (
    <Div id='NFTCard'>
      <Header>
        <Text>
          <span>{arr[category]?.name1 || ''}</span>
          <span>{arr[category]?.name2 || ''}</span>
        </Text>
        <Level level={props.level?.toNumber()} />
      </Header>
      <Power className={props.minting ? 'minting' : ''}>
        <svg viewBox='0 0 60 59' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M50.705 16.4684C47.4512 3.97228 32.3536 -2.40551 19.7939 0.837436C30.3254 2.0103 36.8764 5.73428 40.0813 11.8905C37.1165 8.63267 33.2835 6.28205 29.0293 5.11272C16.5456 1.66979 3.45445 11.5175 0 23.9596C6.8872 14.647 14.051 10.9879 21.7625 12.1877C20.6057 12.3436 19.462 12.5839 18.3406 12.9066C14.0857 14.2056 10.2936 16.6928 7.41323 20.0735C-0.997831 29.8888 2.4295 45.8765 12.2939 54.2596C7.84707 46.1522 6.7679 39.369 8.74729 33.6831C8.35708 36.6415 8.54119 39.6471 9.28959 42.5363C12.5434 55.0325 27.6464 61.4049 40.2006 58.1673C29.6909 56.9944 23.1453 53.2705 19.9349 47.1305C22.901 50.3754 26.7265 52.7192 30.9707 53.892C43.4436 57.335 56.5456 47.4872 60 35.0451C53.1128 44.3578 45.9436 48.0169 38.2321 46.8116C39.391 46.658 40.5367 46.4177 41.6594 46.0927C45.9205 44.7916 49.7183 42.3007 52.603 38.915C61.0033 29.0943 57.5813 13.1066 47.7223 4.72897C52.1746 12.8634 53.2484 19.6249 51.269 25.3109C51.6622 22.3507 51.4781 19.3428 50.7267 16.4522L50.705 16.4684Z'
            fill='currentColor'
          />
        </svg>
        <span>{powerStr || '3.01 K'}</span>
      </Power>
      <NFTImage imgNo={category + 1} />
      <Upgrade disabled>UPGRADE</Upgrade>
      <Footer>
        <Amount>
          <span className='label'>Burned Amount:</span>
          <span className='stk'>
            {ethers.utils.formatEther(props.amount) || ''} {tokenSymbol || ''}
          </span>
          <span className='usd'>
            ??? {ethers.utils.formatEther(props.usd) || ''} USD
          </span>
        </Amount>
        <Time>
          <span className='label'>Burned Time:</span>
          <span className='time'>{time}</span>
        </Time>
      </Footer>
    </Div>
  )
})
export default NFTCard
