import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'

const getItems = (n: number) =>
  [...Array(n).keys()].map(i => ({
    id: `item-${i}`,
    content: `Item ${i}`,
  }))

const reorder = (list: any, startIndex: number, endIndex: number) => {
  const [removed] = list.splice(startIndex, 1)
  list.splice(endIndex, 0, removed)
  return list
}

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    userSelect: 'none',
  },
  container: {
    width: '300px',
    margin: '8px',
    borderRadius: '2px',
    border: '1px solid rgb(80, 90, 107)',
    backgroundColor: (props: any) =>
      props.isDraggingOver ? 'rgb(46, 52, 60)' : 'lightgray',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: '8px',
  },
})

const getTaskListStyle = (isDraggingOver: boolean) => ({
  padding: '8px',
  minHeight: '200px',
  flexGrow: 1,
  transition: 'background-color 0.2s ease',
  backgroundColor: isDraggingOver ? 'rgb(72,79,94)' : '',
})

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: 'none',
  padding: '8px',
  marginBottom: '8px',
  borderRadius: '2px',
  border: '3px solid rgb(78, 88, 102)',
  fontSize: '18px',
  backgroundColor: isDragging ? 'white' : '#1F2022',
  ...draggableStyle,
})

const TaskApp = () => {
  const [itemList, setItemList] = useState(getItems(10))
  const classes = useStyles()

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    const newItemList = reorder(
      itemList,
      result.source.index,
      result.destination.index
    )
    setItemList(newItemList)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h3 className={classes.title}>Todo</h3>
          <Droppable droppableId='droppable'>
            {(droppableProvided, droppableSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                style={getTaskListStyle(droppableSnapshot.isDraggingOver)}>
                {itemList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        style={getItemStyle(
                          draggableSnapshot.isDragging,
                          draggableProvided.draggableProps.style
                        )}>
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}

export default TaskApp
