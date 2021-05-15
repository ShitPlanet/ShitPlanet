import styled from 'styled-components'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTelegramPlane,
  faTwitter,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
  width: 100%;
  padding: 4.6vw 0 4.2vw 0;
  background: #273c67;
`
const Container1 = styled.div`
  display: flex;
  width: 85vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
`
const Brand = styled.div`
  position: relative;
  width: 15.8vw;
  height: 2.9vw;
  padding-bottom: 0.8vw;
`
const Links = styled.div`
  display: flex;
`
const Link = styled.a`
  box-sizing: border-box;
  display: flex;
  width: 3vw;
  height: 3vw;
  justify-content: center;
  align-items: center;
  margin-left: 1.6vw;
  border-radius: 50%;
  border: 1px solid #fff;
  text-align: center;
  vertical-align: bottom;
  color: #fff;
  &:first-child {
    margin-left: 0;
  }
  & svg {
    width: 1.4vw !important;
    height: 1.4vw;
  }
  &:hover {
    color: #fff;
  }
`
const Divider = styled.div`
  width: 85vw;
  height: 1px;
  background-color: #fff;
  opacity: 0.21;
  margin: 1.2vw auto 2.5vw auto;
`
const Container2 = styled.div`
  display: flex;
  width: 85vw;
  margin: 0 auto;
  align-item: flex-start;
`
const Wrap1 = styled.div`
  width: 29.8vw;
  & span {
    display: block;
    width: 22.6vw;
    font-family: 'Lexend';
    font-size: 0.8vw;
    color: #fff;
    border-left: 3px solid rgba(255, 255, 255, 0.21);
    padding-left: 1.6vw;
    opacity: 0.55;
  }
`
const Wrap2 = styled.div`
  width: 20vw;
  & > div {
    height: 1.4vw;
    display: flex;
    align-items: center;
    margin-bottom: 1.2vw;
  }
  & span {
    font-family: 'Lexend';
    font-size: 0.8vw;
    color: #fff;
    opacity: 0.55;
  }
`
const Img = styled.div`
  position: relative;
  display: inline-block;
  width: 1.4vw;
  height: 1.4vw;
  margin-right: 1vw;
`
const Wrap3 = styled.div`
  width: 15.2vw;
  text-align: right;
  & div {
    display: inline-block;
    width: 6.1vw;
    text-align: right;
  }
  & a {
    display: block;
    font-family: 'Lexend';
    font-size: 0.8vw;
    color: #fff;
    opacity: 0.55;
    padding-bottom: 0.3vw;
  }
`

const Footer = () => {
  return (
    <Div>
      <div>
        <Container1>
          <Brand>
            <Image src='/image/logo2.svg' layout='fill' />
          </Brand>
          <Links>
            <Link href='https://t.me/joinchat/eIXOqWflKhgwZWU1' target='_blank'>
              <FontAwesomeIcon icon={faTelegramPlane} />
            </Link>
            <Link href='https://twitter.com/shitplanetsaver' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href='https://discord.gg/pfWmc6m2' target='_blank'>
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
          </Links>
        </Container1>
        <Divider></Divider>
        <Container2>
          <Wrap1>
            <span>
              The shapes of the profiles during normal and shunting conditions
              are similar, with more negative values obtained in die posterior
              section.
            </span>
          </Wrap1>
          <Wrap2>
            <div>
              {/* <Img>
                <Image src='/image/icon-phone.svg' layout='fill' />
              </Img>
              <span>(+86)183-3920-9433</span> */}
            </div>
            <div>
              {/* <Img>
                <Image src='/image/icon-mail.svg' layout='fill' />
              </Img>
              <span>Contact@shitplanet.world</span> */}
            </div>
          </Wrap2>
          <Wrap2>
            <div>
              {/* <Img>
                <Image src='/image/icon-map-maker.svg' layout='fill' />
              </Img>
              <span>(+86)183-3920-9433</span> */}
            </div>
          </Wrap2>
          <Wrap3>
            <div>
              <a href='#'>About us</a>
              <a href='#'>Contract us</a>
              <a href='#'>Jobs</a>
            </div>
            <div>
              <a href='#'>Blogs</a>
              <a href='#'>Teams</a>
              <a href='#'>Privacy</a>
            </div>
          </Wrap3>
        </Container2>
      </div>
    </Div>
  )
}

export default Footer
