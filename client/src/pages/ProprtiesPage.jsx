import React, {useEffect} from 'react'
import {Col, Container,Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import {getProperties, reset} from '../features/properties/propertySlice'

export const ProprtiesPage = () => {
    const {properties, isLoading, isSuccess} = useSelector((state)=> state.properties)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProperties())
    },[dispatch])

    if (isLoading){
        return <Spinner/>
    }
  return (
    <>
    <Container>
        <Row>
            <Col className='mg-top'>
                <h1>Properties Will be displayed heir</h1>
            </Col>
        </Row>
    </Container>
    </>
  )
}
