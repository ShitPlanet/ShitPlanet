import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${(163 * 100) / 1440}vw;
  height: calc(5.5vw - 4px);
  border: 2px solid rgba(255, 255, 255, 0.77);
  border-radius: 0.3vw;
  &.show {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    border-color: #bcffce;
  }
  & button {
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0 2vw;
    text-align: left;
    font-family: 'Lexend bold';
    font-size: 2.5vw;
    color: #fff;
    outline: none;
  }
  & button svg {
  }
  & .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  & .options {
    display: none;
    left: -2px;
    right: -2px;
    top: 4.4vw;
    position: absolute;
    border-bottom-left-radius: 0.3vw;
    border-bottom-right-radius: 0.3vw;
    border-left: 2px solid #bcffce;
    border-right: 2px solid #bcffce;
    border-bottom: 2px solid #bcffce;
  }
  &.show .options {
    display: block;
  }
  & .options button {
    margin: 1vw 0;
    opacity: 0.9;
  }
  & .options button:hover {
    opacity: 1;
    text-shadow: 0 0 0.2vw #fff;
  }
`

interface IProps {
  placeholder: string
  value: string
  options: {
    label: string
    value: string
  }[]
  onChange: (val: string) => void
}
const Selector = (props: IProps) => {
  const [selected, setSelected] = useState<null | {
    label: string
    value: string
  }>(null)
  const [show, setShow] = useState(false)
  const dom = useRef<HTMLDivElement>(null)
  const onClick = (value: string) => {
    props.onChange(value)
    setShow(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', e => {
      if (dom.current && !dom.current.contains(e.target as Element)) {
        setShow(false)
      }
    })
  }, [])
  useEffect(() => {
    if (props.value) {
      setSelected(
        props.options.filter(
          (i: { label: string; value: string }) => i.value === props.value
        )[0]
      )
    } else {
      setSelected(null)
    }
  }, [props.value])

  return (
    <Div ref={dom} className={show ? 'show' : ''}>
      <button className='select' onClick={() => setShow(!show)}>
        {selected ? selected.label : props.placeholder}
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 20L0 0L20 0L10 20Z'
            fill='white'
          />
        </svg>
      </button>
      <div className='options'>
        {props.options.map((i, index) => (
          <button key={index} onClick={() => onClick(i.value)}>
            {i.label}
          </button>
        ))}
      </div>
    </Div>
  )
}

export default Selector