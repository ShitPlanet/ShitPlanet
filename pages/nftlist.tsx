import { useLocalStore } from 'mobx-react-lite'
import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import NFTCard from '@/components/NFTCard'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore } from '@/store'

const Div = styled.div`
  &.blur {
    filter: blur(8px);
  }
`
const Main = styled.div`
  position: relative;
  min-height: 141vw;
`
const Container = styled.div`
  box-sizing: border-box;
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  padding: 9vw 0 13.9vw 0;
  text-align: center;
  & label {
    display: block;
    font-family: 'Bungee';
    font-size: 5vw;
    background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: default;
    margin-bottom: 2.8vw;
  }
`
const List = styled.div`
  width: calc(100% + 2.6vw);
  margin-left: -1.3vw;
`
const LoadingWrap = styled.div`
  width: 12vw;
  height: 12vw;
  margin: 0 auto;
`
const Wrap = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 26.5vw;
  height: 48vw;
  margin: 0 1.3vw 3vw 1.3vw;
  cursor: pointer;
`
const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  & #NFTCard {
    position: absolute;
    top: calc(50% - ${(60 * 100) / 1440}vw);
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const Btn = styled.div`
  position: absolute;
  display: flex;
  width: 26.5vw;
  justify-content: space-between;
  top: calc(50% + 22vw);
  left: 50%;
  transform: translate(-50%, -50%);
  & button {
    width: 47%;
    height: 4vw;
    border: none;
    border-radius: 4vw;
    font-family: Impact;
    font-size: 2.2vw;
    padding: 0;
    color: #fff;
  }
  & button.cancel {
    background: linear-gradient(90deg, #fe78ad 0%, #f3b197 100%);
  }
  & button.cancel:hover {
    box-shadow: 0 0 0.5vw #fe78ad;
  }
  & button.stake,
  & button.unstake {
    background: linear-gradient(90deg, #34a0ff 0%, #18d8d5 100%);
  }
  & button.stake:hover,
  & button.unstake:hover {
    box-shadow: 0 0 0.5vw #34a0ff;
  }
`

const NFTList = () => {
  const store = useStore()

  const state = useLocalStore(() => ({
    nftTokens: [],
    nftTokenDetailList: []
  }))

  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState<null | {
    imgNo: number
    minting: false
  }>(null)

  useEffect(() => {
    ;(async function() {
      try {
        if (!store.shitboxContract) return
        state.nftTokens = await store.shitboxContract.tokensOfOwner(
          store.account
        )

        console.log('state.nftTokens, ', state.nftTokens)

        const nftTokenDetailList = await Promise.all(
          state.nftTokens.map(nftTokenId =>
            store.shitboxContract.getBoxInfo(nftTokenId)
          )
        )
        state.nftTokenDetailList = nftTokenDetailList
        console.log(nftTokenDetailList[0])
      } catch (error) {
      } finally {
        setLoading(false)
      }
    })()
  }, [store.shitboxContract, store.account])

  return (
    <div>
      <Div className={showModal ? 'blur' : ''}>
        <Header />
        <Main>
          <Background phase={3} />
          {loading ? (
            <Container>
              <label>NFT list</label>
              <LoadingWrap>
                <Loading />
              </LoadingWrap>
            </Container>
          ) : (
            <Container>
              <label>NFT list</label>
              <List>
                {state.nftTokenDetailList.map((nftToken, index) => (
                  <Wrap
                    key={index}
                    onClick={() => {
                      setSelected({ imgNo: index + 1, minting: false })
                      setShowModal(true)
                    }}>
                    <NFTCard
                      {...{
                        power: nftToken.miningPower,
                        level: nftToken.quality,
                        timestampt: nftToken.timestamp,
                        usd: nftToken.initUSDValue,
                        minting: false, //@TODO
                        amount: nftToken.amount,
                        imgNo: index + 1
                      }}
                    />
                  </Wrap>
                ))}
              </List>
            </Container>
          )}
        </Main>
        <Footer />
      </Div>
      {showModal ? (
        <Modal>
          <NFTCard {...selected} />
          <Btn>
            <button
              className='cancel'
              onClick={() => {
                setShowModal(false)
                setSelected(null)
              }}>
              Cancel
            </button>
            {selected.minting ? (
              <button className='unstake' onClick={() => {}}>
                Unstake
              </button>
            ) : (
              <button className='stake' onClick={() => {}}>
                Stake
              </button>
            )}
          </Btn>
        </Modal>
      ) : null}
    </div>
  )
}

export default NFTList
