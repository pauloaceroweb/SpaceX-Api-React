import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import { LaunchItem } from './launchItem';
import * as API from '../services/launches';

export function LaunchList () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches()
        .then(setLaunches)
        .catch(console.log);
    }, []);

 return (
    <>
      <Heading as="h1" size="lg" m={4} >
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (<div >Loading...</div>) : (
        <Grid templateColumns='repeat(3, 1fr)' gap={1}>
          {launches.map(launch => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}          
        </Grid>  
      )}      
    </>  
 )
}

