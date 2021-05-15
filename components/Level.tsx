import styled from 'styled-components'

const LevelDiv = styled.div`
  height: 2.6vw;
  text-align: center;
  padding: 0 1.3vw;
  border-radius: 1.3vw;
  font-family: 'IBMPlexSans bold';
  font-style: italic;
  font-weight: 900;
  font-size: 1.6vw;
  line-height: 2.6vw;
  color: #fff;
  margin-top: 0.5vw;
  &.level_1 {
    background: linear-gradient(90deg, #b0b0b0 0%, #8b8b8b 100%);
  }
  &.level_2 {
    background: linear-gradient(90deg, #429321 0%, #b4ec51 100%);
  }
  &.level_3 {
    background: linear-gradient(90deg, #34a0ff 0%, #18d8d5 100%);
  }
  &.level_4 {
    background: linear-gradient(90deg, #fe78ad 0%, #f3b197 100%);
  }
  &.level_5 {
    background: linear-gradient(90deg, #f6b770 0%, #ff9a28 100%);
  }
`
interface LevelProps {
  level: number
}
const Level = (props: LevelProps) => {
  return (
    <LevelDiv className={`level_${props.level}`}>
      {props.level === 1 ? <span>COMMON</span> : null}
      {props.level === 2 ? <span>UNIQUE</span> : null}
      {props.level === 3 ? <span>RARE</span> : null}
      {props.level === 4 ? <span>EPIC</span> : null}
      {props.level === 5 ? <span>LEGEND</span> : null}
    </LevelDiv>
  )
}

export default Level
