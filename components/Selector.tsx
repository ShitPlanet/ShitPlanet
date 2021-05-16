import styled from 'styled-components'
import { useEffect, useRef, useState, useMemo } from 'react'

var swapItem = function(arr, fromIndex, toIndex) {
  arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0]
  return arr
}

const Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${(163 * 100) / 1440}vw;
  border: 2px solid rgba(255, 255, 255, 0.77);
  border-radius: 0.3vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
  z-index: 1000;
  &.show {
    border-color: #bcffce;
  }
  & button {
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0 1vw;
    text-align: left;
    font-family: 'Lexend bold';
    font-size: 2.5vw;
    color: #fff;
    outline: none;
  }
  & .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(5.5vw - 8px);
  }
  & .options {
    display: none;
    top: 4.4vw;
  }
  &.show .options {
    display: block;
  }
  & .options button {
    margin: 1vw 0;
    opacity: 0.9;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: no-wrap;
  }
  & .options button:first-child {
    margin-top: 0.6vw;
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

  const calculatedOptions = useMemo(() => {
    // lowb, doge, wbnb

    let temp = props.options.filter(item => item.value !== props.value)

    const dogeIndex = temp.findIndex(item => item.label === 'DOGE')
    if (dogeIndex > 0) {
      temp[0] = temp.splice(dogeIndex, 1, temp[0])[0]
    }
    const wbnbIndex = temp.findIndex(item => item.label === 'WBNB')
    if (wbnbIndex > 0) {
      temp[1] = temp.splice(wbnbIndex, 1, temp[1])[0]
    }

    return temp
  }, [props.options, props.value])

  return (
    <Div ref={dom} className={show ? 'show' : ''}>
      <button
        className='select leading_target_2'
        onClick={() => setShow(!show)}>
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
        {calculatedOptions.map((i, index) => (
          <button key={index} onClick={() => onClick(i.value)}>
            {i.label}
          </button>
        ))}
      </div>
    </Div>
  )
}

export default Selector
