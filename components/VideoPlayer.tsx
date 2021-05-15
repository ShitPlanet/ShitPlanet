import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  & div {
    width: 50vw;
    height: 28.125vw;
    margin: 22vh auto 0 auto;
  }
`

const VideoPlayer = () => {
  return (
    <Div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        controls={true}
      />
    </Div>
  )
}

export default VideoPlayer
