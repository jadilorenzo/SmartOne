import React from 'react'

export default (props: any) => {
  console.log(props)
  const svg2 = (
    <svg
      style={{
        margin: -props.size - 0.2,
        position: 'relative',
        width: props.size,
        height: props.size,
        top: props.size,
        // marginTop: -0.1,
        right: -1,
        zIndex: 100
      }}
    >
      <polygon
        points={`0,0 ${props.size},00, ${props.size},${props.size}`}
        fill={props.color}
      />
    </svg>
  )

  const svg1 = (
    <svg
      style={{
        margin: -props.size - 0.2,
        position: 'relative',
        width: props.size,
        height: props.size,
        top: props.size - (props.padding ? 0 : 2),
        // left: props,
        zIndex: 100
      }}
    >
      <polygon
        points={`0,0 ${props.size},00, 00,${props.size}`}
        fill={props.color}
      />
    </svg>
  )

  const svg3 = (
    <svg
      style={{
        margin: -props.size - 1,
        position: 'relative',
        width: props.size,
        height: props.size,
        // marginTop: -0.1,
        top: -(2.5 * props.size) - 1,
        left: props.size,
        zIndex: 100
      }}
    >
      <polygon
        points={`0,0 ${props.size},${props.size}, 00,${props.size}`}
        fill={props.color}
      />
    </svg>
  )
  const svg4 = (
    <svg
      style={{
        margin: -props.size - 1,
        position: 'relative',
        width: props.size,
        height: props.size,
        // marginTop: -0.1,
        top: -props.height + props.size + 1,
        left: props.size + props.width + 5,
        zIndex: 100
      }}
    >
      <polygon
        points={`${props.size},0 ${props.size},${props.size}, 00,${props.size}`}
        fill={props.color}
      />
    </svg>
  )

  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          // alignItems: 'left'
          left: props.size,
          width: '100%'
        }}
      >
        {props.corner[0] && svg1}
        {props.children}
        {props.corner[1] && svg2}
      </div>
      <div>
        {props.corner[2] && svg3}
        {props.corner[3] && svg4}
      </div>
    </>
  )
}
