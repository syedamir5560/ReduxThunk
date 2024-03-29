import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUsers } from './Store/AsynkThunk/fetchusers';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Alldata() {

  let alldata = useSelector((state) => state.usersdata)
  console.log(alldata.data)
  let dispatch = useDispatch()

  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  let onClickDelet = (para) => {
    console.log("Id:", para)
    dispatch(deleteUsers(para))

  }

  return (
    <>
      <h2 className='text-center bg-info'>All The Data</h2>
      <div className='d-flex justify-content-evenly my-4  align-items-center flex-row bg-warning rounded-3 flex-wrap'>
        {
          typeof alldata.data !== null ? (typeof alldata.data === 'object' && alldata.data.map(ele => {
            let descrip = ele.description.slice(0, 60) + '.......'
            return <Card key={ele.id} className='my-4 border border-4 border-info rounded-2'  style={{ width: '18rem' }}>
              <Card.Img style={{ height: '160px' }} variant="top" src={ele.image} />
              <Card.Body>
                <Card.Title>{ele.name}</Card.Title>
                <h3>{ele.email}</h3>
                <Card.Text>
                  {descrip}
                </Card.Text>
                <Button className='ms-2' variant="warning">Preview</Button>
                <Button className='ms-2' variant="info" onClick={()=>navigate(`/user/${ele.id}`)}>Edit</Button>
                <Button className='ms-2' variant="danger" onClick={() => onClickDelet(ele)}> Delete </Button>
              </Card.Body>
            </Card>
          })) : null
        }
      </div>
    </>

  )
}

export default Alldata