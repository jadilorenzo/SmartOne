import React from 'react'
import { TestContext } from '../../context/TestContext'
import { Typography, Card, Chip } from '@material-ui/core'
import ChevronRight from '../icons/ChevronRight'

export default (props: { test?: any }) => {
  const [test] = React.useContext(TestContext)
  const thisTest = props.test ? props.test : test

  return (
    <Card
      elevation={0}
      variant="outlined"
      style={{ marginBottom: '0.5em', padding: '0.5em' }}
    >
      <Typography variant="h6">{thisTest.title || 'Untitled'}</Typography>
      {thisTest.tags.length > 0 ? (
        thisTest.tags.map((x: string, index: number) => (
          <Chip
            variant="outlined"
            key={index}
            label={x}
            style={{ marginRight: '0.5em' }}
          />
        ))
      ) : (
        <em>No tags</em>
      )}
      <div style={{ float: 'right', marginBottom: '1.7em' }}>
        <ChevronRight />
      </div>
    </Card>
  )
}