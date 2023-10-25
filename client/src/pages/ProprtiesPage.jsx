import React, {useEffect} from 'react'
import {Col, Container,Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import {getProperties, reset} from '../features/properties/propertySlice'
import {toast} from 'react-toastify'
import Property from '../components/Property'
export const ProprtiesPage = () => {
    const {properties, isLoading, isError, message} = useSelector((state)=> state.properties)
    const dispatch = useDispatch()
    useEffect(()=>{
        if (isError) {
            toast.error(message, {icon:"😭"})
        }
        dispatch(getProperties())
    },[dispatch,isError,message])

    if (isLoading){
        return <Spinner/>
    }
  return (
    <>
    <Container>
        <Row>
            <Col className='mg-top text-centre'>
                <h1>Our catalog of properties</h1>
                <hr className='hr-text' />
            </Col>
        </Row>
        {
            <>
            <Row className='mt-3 mr-5'>
                {properties.map((property)=>(
                    <Col key={property.id} sm={12} md={6} lg={4} xl={3} className='mr-5'>
                        <Property property={property} />
                    </Col>
                ))}
            </Row>
            </>
        }
    </Container>
    </>
  )
}
